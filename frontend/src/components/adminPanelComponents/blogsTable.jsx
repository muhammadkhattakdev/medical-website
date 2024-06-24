import { faCheck, faCross, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const get_all_blogs_url = process.env.REACT_APP_GET_ALL_BLOGS_URL;
const backend_url = process.env.REACT_APP_SITE_DOMAIN;

export default function BlogsTable() {
  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(0);

  const context = useContext(Context);
  const navigate = useNavigate();

  const getBlogs = async (newPageNumber) => {
    try {
      if (!newPageNumber) {
        newPageNumber = 1;
      }
      const response = await fetch(`${get_all_blogs_url}${newPageNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.tokens.access}`,
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        setCount(data.count);
        setBlogs((prevBlogs) => {
          const newBlogs = data.blogs.filter(
            (newBlog) =>
              !prevBlogs.some((prevBlog) => prevBlog.id === newBlog.id)
          );

          return [...prevBlogs, ...newBlogs];
        });
      }
      if (response.status === 401) {
        navigate("/login/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loadUsersHandler = (e) => {
    e.preventDefault();
    setPageNumber((prevNum) => {
      const newPageNumber = prevNum + 1;
      getBlogs(newPageNumber);
      return newPageNumber;
    });
  };

  useEffect(() => {
    getBlogs();
  }, [pageNumber]);

  return (
    <>
      <div className="">
        {count} Blogs
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Added on</th>
              <th>Approved</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => {
              return (
                <>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <Link to={`${backend_url}${blog.img}`} target="_blank" style={{objectFit:'contain'}}>
                            <img src={`${backend_url}${blog.img}`} width='100' alt="" />
                        </Link>
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{blog.name}</p>
                          by 
                          <a
                            href={`/admin/user/${blog.user.id}`}
                            target="_blank"
                            class="text-muted mx-1 mb-0"
                          >
                            {blog.user.first_name + blog.user.last_name}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">{blog.category.name}</p>
                    </td>
                    <td>{blog.added_on}</td>
                    <td style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'50%', height:'100%'}}>
                        {blog.approved ? <FontAwesomeIcon style={{color:'green'}} icon={faCheck} />: <FontAwesomeIcon style={{color:'red'}} icon={faTimes} />}
                    </td>
                    <td>
                      <Link
                        to={`/admin/blog/${blog.id}`}
                        type="button"
                        class="btn btn-link btn-sm btn-rounded"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
      >
        <Link onClick={loadUsersHandler}>Load More</Link>
      </div>
    </>
  );
}
