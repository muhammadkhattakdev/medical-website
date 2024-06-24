import React, { useContext, useEffect, useState } from "react";
import SidebarBlog from "./sidebarBlog";
import SidebarCategory from "./sidebarCategory";
import { Context } from "../../context/context";

const get_categories_url = process.env.REACT_APP_GET_ARTICLE_CATEGORIES_URL;
const search_blogs_url = process.env.REACT_APP_SEARCH_BLOGS_URL;

export default function BlogsSidebar() {
  const context = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const searchBlogHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${search_blogs_url}?search-query=${searchQuery}`, {
      method: "GET",
      headers: {
        'Content-Type':'application/json',
      }
    });

    const data = await response.json();

    if (response.status === 200 ) {
      context.setPaginatedBlogs(data.blogs);
      console.log(data); 
    }
  }



  const getCategories = async (e) => {
    try {
      const response = await fetch(get_categories_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
        setCategories(data.categories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
    context.getLatestBlogs();
  }, []);

  return (
    <>
      <div class="col-lg-4">
        <div class="sidebar">
          <div class="sidebar-widget">
            <h3 class="widget-title">Search</h3>
            <div class="section-divider"></div>
            <div class="contact-form-action mt-4">
              <form onSubmit={searchBlogHandler}>
                <div class="form-group mb-0">
                  <input
                    class="form-control ps-3"
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search here"
                  />
                  <button class="search-btn">
                    <i class="la la-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="sidebar-widget">
            <h3 class="widget-title">Category</h3>
            <div class="section-divider"></div>
            <ul class="list-items mt-4">
                {categories.map((category) => {
                return (
                  <>
                    <SidebarCategory name={category.name} />
                  </>
                );
              })}
            </ul>
          </div>
          <div class="sidebar-widget">
            <h3 class="widget-title">Recent Posts</h3>
            <div class="section-divider"></div>
            <div class="sidebar-posts mt-4">
              {
                context.latestBlogs.map(blog => {
                  return (
                    <>
                      <SidebarBlog id={blog.id} title={blog.name} img={blog.img} />                  
                    </>
                  )
                })
              }
            </div>
          </div>
          <div class="sidebar-widget">
            <h3 class="widget-title">Follow &amp; Connect</h3>
            <div class="section-divider"></div>
            <ul class="social-links mt-4">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
