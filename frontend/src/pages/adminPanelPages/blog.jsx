import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const get_blog_url = process.env.REACT_APP_GET_BLOG;
const backend_url = process.env.REACT_APP_SITE_DOMAIN;
const blog_approve_url = process.env.REACT_APP_APPROVE_BLOG_URL;

export default function AdminBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const context = useContext(Context);

    const getBlog = async (e) => {

        const response = await fetch(`${get_blog_url}${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${context.tokens.access}`
            }
        });

        const data = await response.json();

        if (response.status === 200) {
            console.log(data);
            setBlog(data.article);
        }
    };

    const approveHandler = async e => {

        const response = await fetch(`${blog_approve_url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${context.tokens.access}`
            },
            body: JSON.stringify({blog_id:id})
        });

        const data = await response.json();

        if (response.status === 200) {
            console.log(data);
            setBlog(data.blog);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h2 className="section__title mb-5">
                Blog Details
            </h2>
            
            <div className="d-flex flex-column w-100">
                <img src={backend_url + blog.img} style={{maxHeight:'17rem', objectFit:'contain'}} alt="" />
                <div className="input">
                    <label htmlFor="" className="mb-2 fw-bolder">Blog Title</label>
                    <input type="text" value={blog.name} style={{width:'fit-content'}} className="form-control" />
                </div>
                <div className="input mt-4">
                    <label htmlFor="" className="mb-2 fw-bolder">Blog Category</label>
                    <input type="text" value={blog.category.name} style={{width:'fit-content'}} className="form-control" />
                </div>
                <div className="input mt-4">
                    <label htmlFor="" className="mb-2 fw-bolder">Blog Content</label>
                    <textarea className="form-control" name="" id="" cols="20" rows="10">
                        {blog.content}
                    </textarea>
                </div>
                <div className="input mt-5 mb-3">
                    {blog.approved ?
                    <button onClick={approveHandler} className="hide-btn"><FontAwesomeIcon icon={faTimes} /> Disapprove</button>
                    :
                    <button onClick={approveHandler}  className="my-primary-btn"><FontAwesomeIcon icon={faCheck} /> Approve</button>
                    }
                </div>
            </div>
        </>
    );
}
