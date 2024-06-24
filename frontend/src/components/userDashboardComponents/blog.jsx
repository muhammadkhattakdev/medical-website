import { faCircleCheck, faCirclePlus, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const delete_article_url = process.env.REACT_APP_DELETE_ARTICLE_URL;

export default function MyBlog(props) {

    const {id, title, approved} = props;
    const [message, setMessage] = useState('');
    const context = useContext(Context);
    const navigate = useNavigate();

    const noHandler = e => {
        e.target.parentElement.parentElement.parentElement.style.display = 'none';
        console.log("He")
    }

    const showAskModal = e => {
        document.querySelector('.ask-modal').style.display = 'flex';
    }
    
    const deleteBlogHandler = async e => {
        e.preventDefault();

        const response = await fetch(delete_article_url, {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${context.tokens.access}`
            },
            body: JSON.stringify({id:id})
        })

        const data = await response.json();

        if (response.status === 200) {
            context.setDeleteBlogMessage('Blog Deleted Successfully');
            await context.getBlogs();
            document.querySelector('.ask-modal').style.display = 'none';
        }

        if (response.status === 401) {
            navigate('/login/');
        }
    }
  return (
    <>
      <div className="ask-modal">
        <div className="center p-5">
        <div className="q">Do you want to delete this blog ?</div>
        <div className="btns d-flex flex-row gap-3 mt-4">
            <button onClick={deleteBlogHandler} className="yes delete-btn">Yes</button>
            <button onClick={noHandler} className="no my-primary-btn">No</button>
        </div>
        </div>
      </div>
      <div  className="my-blog">
        <div className="side"></div>
        <div className="title">
            {title}
        </div>
        <div className="approval">
            {approved ?  <FontAwesomeIcon style={{color:'green'}} icon={faCircleCheck} /> :  <FontAwesomeIcon style={{rotate:'45deg', color:'red'}} icon={faCirclePlus} /> }
        </div>
        <div className="btns">
            <Link to={`/dashboard/edit-blog/:${id}`} className="my-primary-btn d-flex align-items-center gap-2" ><FontAwesomeIcon icon={faPenToSquare}  /> Edit</Link>
            <Link onClick={showAskModal} className="delete-btn d-flex align-items-center gap-2" ><FontAwesomeIcon icon={faTrash}  /> Delete</Link>
        </div>
      </div>
    </>
  );
}
