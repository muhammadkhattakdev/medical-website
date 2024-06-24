import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faPlus } from "@fortawesome/free-solid-svg-icons";
import { json, useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const createArticleUrl = process.env.REACT_APP_CREATE_ARTICLE_URL;
const get_article_categories_url = process.env.REACT_APP_GET_ARTICLE_CATEGORIES_URL;
const create_article_category_url = process.env.REACT_APP_CREATE_ARTICLE_CATEGORY_URL;
const get_blog_url = process.env.REACT_APP_GET_BLOG;
const backend_url = process.env.REACT_APP_SITE_DOMAIN;
const edit_blog_url = process.env.REACT_APP_EDIT_BLOG_URL;

export default function EditBlogPage() {
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [img, setImg] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [currentCategoryId, setCurrentCategoryId] = useState('');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const context = useContext(Context);

    const getBlogToEdit = async e => {
        id = id.split(':')[1]
        const response = await fetch(`${get_blog_url}${id}`, {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${context.tokens.access}`
            }
        })

        const data = await response.json();
        
        if (response.status === 200) {
            setTitle(data.article.name);
            setImgUrl(backend_url + data.article.img);
            setCategoryId(data.article.category);
            setContent(data.article.content)
        }   
    }

    const openModalHandler = e => {
        document.querySelector('.create-category-modal').style.display = 'flex';
    }

    const getCategories = async e => {
        const response = await fetch(get_article_categories_url, {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${context.tokens.access}`
            }
        })

        const data = await response.json();

        if (response.status === 200 ){
            setCategories(data.categories);
        }
    }

    const categoryFormSubmitHandler = async e => {
        e.preventDefault();
        const response = await fetch(create_article_category_url, {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${context.tokens.access}`
            },
            body: JSON.stringify({category_name:categoryName})
        });

        const data = await response.json();

        if (response.status === 200) {
            getCategories();
            document.querySelector('.create-category-modal').style.display = 'none';
            setMessage("Category Created Successfully");
        }

        if (response.status === 401 ) {
            document.querySelector('.create-category-modal').style.display = 'none';
            navigate('/login/');
        }
    }

    const articleFormEditHandler = async (e) => {
        e.preventDefault();
        id = id.split(':')[1]
        const formData = new FormData();
        formData.append('id', id)
        formData.append('article_name', title);
        formData.append('content', content);
        formData.append('article_img', img);
        formData.append('article_category', categoryId);

        const response = await fetch(edit_blog_url, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${context.tokens.access}`
            },
            body: formData
        });

        const data = await response.json();

        if (response.status === 200) {
            console.log(data);
            console.log("Hello World");
        }

        if (response.status === 401 ) {
            navigate('/login/');
        }
    }

    const closeModalHandler = e => {
        document.querySelector('.create-category-modal').style.display = 'none';
    }

    useEffect(() => {
        getCategories();
        getBlogToEdit();
        console.log(jwtDecode(context.tokens.access));
    }, [])

    return (
        <>
            <div className="create-category-modal">
                <FontAwesomeIcon onClick={closeModalHandler} icon={faPlus} className="close-btn" />
                <form onSubmit={categoryFormSubmitHandler}>
                    <h3 className="section__title">
                        Fill the Details Below!
                    </h3>
                    <input type="text" value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Category Name" className="form-control mt-4" />
                    <button className="my-primary-btn mt-4">Create Category</button>
                </form>
            </div>
            { message ?
            <h4 style={{color:'green', width:'fit-content', padding:'1rem', borderBottom:'2px solid green', boxShadow:'-20px 0px 0px green'}} className="message">{message}</h4> : null}
            <h2 className="section__title">Write Blog</h2>
            <form onSubmit={articleFormEditHandler} className="col-lg-12">
                <div className="input mt-5">
                    <input value={title} onChange={e => setTitle(e.target.value)} required name="title" placeholder="Blog Title" type="text" className="form-control my-input" />
                </div>
                <div className="input mt-5">
                <img  style={{maxWidth:'15rem', objectFit:'cover', maxHeight:'14rem'}} src={imgUrl} alt="" />
                    <input onChange={e => setImg(e.target.files[0])} type="file" name="category_img" className="form-control mt-4 my-input" />
                </div>
                <div className="input d-flex flex-row align-items-center gap-4 mt-5">
                    <select value={categoryId} onChange={e => setCategoryId(e.target.value)} name="article_category" className="form-control my-input">
                        <option value="">Article Category</option>
                        { categories.map(category => {
                            return (
                                <>
                                    <option value={category.id}>{category.name}</option>
                                </>
                            )
                        })}
                    </select>
                    <span onClick={openModalHandler} className="create-category-btn"><FontAwesomeIcon icon={faPlus} /></span>
                </div>
                <div className="input mt-4">
                    <textarea value={content} onChange={e => setContent(e.target.value)} required placeholder="Blog Content Here..." name="content" cols="30" rows="10" className="form-control my-input">{content}</textarea>
                </div>
                <button className="my-primary-btn mt-4" type="submit">Create Article</button>
            </form>
        </>
    )
}
