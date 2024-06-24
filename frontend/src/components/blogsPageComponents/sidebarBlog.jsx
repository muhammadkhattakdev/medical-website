import React from "react";
import { Link } from "react-router-dom";

const backend_url = process.env.REACT_APP_SITE_DOMAIN;

export default function SidebarBlog(props) {
    const {id, img, title} = props 
  return (
    <>
      <div class="recent-item align-items-center">
        <div class="recent-img">
          <a href="blog-single.html">
            <img src={backend_url + img} alt="blog image" />
          </a>
        </div>
        <div class="recent-post-body">
          <h4 class="widget-title">
            <Link to={`/blog/${id}`}>
              {title}
            </Link>
          </h4>
          {/* <p class="recent__meta">
            By <a href="#">TechyDevs</a> 4 Jan, 2020
          </p> */}
        </div>
      </div>
    </>
  );
}
