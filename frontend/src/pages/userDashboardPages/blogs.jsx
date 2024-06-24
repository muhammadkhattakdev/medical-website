import React, { useContext, useEffect, useState } from "react";
import MyBlog from "../../components/userDashboardComponents/blog";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const context = useContext(Context);
  const navigate = useNavigate();

  // const getBlogs = async e => {
  //     const response = await fetch(get_articles_url, {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type':'application/json',
  //             Authorization: `Bearer ${context.tokens.access}`
  //         }
  //     })

  //     const data = await response.json();

  //     if (response.status === 200) {
  //         setBlogs(data.articles);
  //         console.log('this is', data);
  //     }

  //     if (response.status === 401) {
  //         navigate('/login/');
  //     }
  // }

  useEffect(() => {
    context.getBlogs();
  }, []);
  return (
    <>
      {context.deleteBlogMessage ? (
        <h4
          style={{
            color: "green",
            width: "fit-content",
            padding: "1rem",
            borderBottom: "2px solid green",
            boxShadow: "-20px 0px 0px green",
          }}
          className="message"
        >
          {context.deleteBlogMessage}
        </h4>
      ) : null}
      <h2 className="section__title"> <FontAwesomeIcon icon={faPenNib} /> Your Blogs</h2>
      <div className="my-blogs d-flex w-100 flex-column gap-3">
        {context.myBlogs.map((blog) => {
          return (
            <>
              <MyBlog id={blog.id} approved={blog.approved} title={blog.name} />
            </>
          );
        })}
      </div>
    </>
  );
}
