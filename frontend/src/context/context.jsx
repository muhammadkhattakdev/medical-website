import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const login_url = process.env.REACT_APP_LOGIN_URL;
const get_articles_url = process.env.REACT_APP_GET_MY_ARTICLES;
const get_hidden_questions_url = process.env.REACT_APP_GET_HIDDEN_QUESTIONS_URL;
const get_paginated_blogs = process.env.REACT_APP_GET_PAGINATED_BLOGS;
const get_categorized_blogs = process.env.REACT_APP_GET_CATEGORIZED_BLOGS_URL;
const get_latest_blogs_url = process.env.REACT_APP_GET_LATEST_BLOGS_URL;
const check_token_url = process.env.REACT_APP_VALIDATE_TOKEN_URL;

export const Context = createContext();

export default function ContextProvider({ children }) {

    const [loaded, setLoaded] = useState(false);
    const [deleteBlogMessage, setDeleteBlogMessage] = useState('');
    const [message, setMessage] = useState('');
    const [categoryName, setCategoryName] = useState(localStorage.getItem('currentCategoryName')? localStorage.getItem('currentCategoryName') : null);
    const [tokens, setTokens] = useState(localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null);
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    const [blogs, setBlogs] = useState([]);
    const [loginResponseDetails, setLoginResponseDetails] = useState('');
    const [blogsPageNumber, setBlogsPageNumber] = useState(1);
    const [paginatedBlogs, setPaginatedBlogs] = useState([]);
    const [categorizedBlogs, setCategorizedBlogs] = useState([]);
    const [latestBlogs, setLatestBlogs] = useState([]);
    const navigate = useNavigate();

    const loginUser = async e => {
        try {
            e.preventDefault();
            const response = await fetch(login_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value }),
            });
    
            const data = await response.json();
    
            if(response.status === 401) {
                setMessage("Invalid Credentials");
                localStorage.removeItem('tokens')
                localStorage.removeItem('user')
            }

            if (response.ok) {
                setTokens(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem('tokens', JSON.stringify(data));
                localStorage.setItem('user', JSON.stringify(jwtDecode(data.access)));
                window.location.href = '/membership/'
            } else if (response.status === 401 || response.status === 403) {
                setMessage("User Account Not Found");
            } else {
                setLoginResponseDetails('Please try again');
                e.target.password.value = '';
                e.target.email.value = '';
            } if (response.status === 500 ) {
                setMessage('Something happened at the server. We are sorry for the inconvenience')
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    const getBlogs = async e => {
        const response = await fetch(get_articles_url, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${tokens.access}`
            }
        })

        const data = await response.json();

        if (response.status === 200) {
            setBlogs(data.articles);
            console.log('this is', data);
        }

        
        if(response.status === 401) {
            navigate('/login/');
            localStorage.removeItem('tokens')
            localStorage.removeItem('user')
        }
    }

    const [hiddenQuestions, setHiddenQuestions] = useState([]);

    const getHiddenQuestions = async (e) => {
        const response = await fetch(get_hidden_questions_url, {
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${tokens.access}`
            }
        });

        const data = await response.json();
        if (response.status === 200) {
            setHiddenQuestions(data.questions)
            console.log("hey");
        };

        if(response.status === 401) {
            navigate('/login/');
            localStorage.removeItem('tokens')
            localStorage.removeItem('user')
        }
    };
    
    const logoutUser = e => {
        e.preventDefault();
        setUser(null);
        localStorage.setItem('tokens', null);
        setTokens(null);
    };


    const getPaginatedBlogs = async (pageNumber) => {
        const response = await fetch(`${get_paginated_blogs}?page=${pageNumber}`, {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
            }
        });
        const data = await response.json();
    
        if(response.status === 200) {
            setPaginatedBlogs(data.blogs);
            console.log(data);
        }
    
        if(response.status === 401) {
            navigate('/login/');
        }
    }


    const getCategorizedBlogs = async (newCategoryName) => {

        const response = await fetch(`${get_categorized_blogs}?category_name=${newCategoryName}`, {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
            }
        });

        const data = await response.json();

        if (response.status === 200 ) {
            setCategorizedBlogs(data.blogs);
        }
    };

    const getLatestBlogs = async e => {

        try{ 

            const response = await fetch(get_latest_blogs_url, {
                method: "GET",
                headers: {
                    'Content-Type':'application/json'
                }
            });
    
            const data = await response.json();
    
            if(response.status === 200 ) {
                console.log(data);
                setLatestBlogs(data.blogs);
            }
        }
        catch(err) {

        }
    }

    
    const validateToken = async e => {

        if (tokens) {

            const response = await fetch(check_token_url, {
                method: "POST",
                headers: {
                    'Content-Type':'appilcation/json',
                },
                body: JSON.stringify({token:tokens.access})                
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data.valid);
                setLoaded(true);
                return true;
            };

            if (response.status === 401) {
                setTokens(null);
                setLoaded(true);
                localStorage.removeItem('tokens');
                localStorage.removeItem('user');
                return false;
            };
        } else {
            return false 
        }
    };

    useEffect(() => {

    }, [])

    const authValues = {
        user,
        tokens,
        myBlogs:blogs,
        message:message,
        getBlogs:getBlogs,
        loginUser: loginUser,
        logoutUser:logoutUser,
        latestBlogs:latestBlogs,
        categoryName:categoryName,
        validateToken:validateToken,
        getLatestBlogs:getLatestBlogs,
        paginatedBlogs:paginatedBlogs,
        hiddenQuestions:hiddenQuestions,
        blogsPageNumber:blogsPageNumber,
        setCategoryName:setCategoryName,
        categorizedBlogs:categorizedBlogs,
        getPaginatedBlogs:getPaginatedBlogs,
        setPaginatedBlogs:setPaginatedBlogs,
        deleteBlogMessage:deleteBlogMessage,
        setHiddenQuestions:setHiddenQuestions,
        getHiddenQuestions:getHiddenQuestions,
        setBlogsPageNumber:setBlogsPageNumber,
        getCategorizedBlogs:getCategorizedBlogs,
        setCategorizedBlogs:setCategorizedBlogs,
        loginResponseDetails:loginResponseDetails,
        setDeleteBlogMessage:setDeleteBlogMessage,
    };

    return (

        <Context.Provider value={authValues}>
            {children}
        </Context.Provider>
    );
}
