import React, { useContext, useEffect } from "react";
import BlogsSidebar from "./blogSidebar";
import Blog from "./blog";
import { Context } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BlogsLayout() {

  const context = useContext(Context);

  const prevBtnClickHandler = e => {
    e.preventDefault();
    if (context.blogsPageNumber > 1) {
      context.setBlogsPageNumber(prevNum => {
        console.log(prevNum);
          console.log("hey")
          const newPageNumber = prevNum - 1;
          context.getPaginatedBlogs(newPageNumber);
          return newPageNumber;
      });
    }
};

  const nextBtnClickHandler = e => {
    e.preventDefault();
    context.setBlogsPageNumber(prevNum => {
        const newPageNumber = prevNum + 1;
        context.getPaginatedBlogs(newPageNumber);
        return newPageNumber;
    });
};
  useEffect(() => {
    context.getPaginatedBlogs();
  }, []);

  return (
    <>
      <section class="blog-area padding-top-140px padding-bottom-120px">
        <div class="container">
          <div class="row">
            <BlogsSidebar />
            <div class="col-lg-8">
              <div class="blog-sidebar-wrap">
                <div class="row">
                  {context.paginatedBlogs.map((blog) => {
                    
                    return (
                      <>
                      {
                        blog.approved ? 
                        <div class="col-lg-6 column-td-6">
                          <Blog id={blog.id} img={blog.img} title={blog.name} date={blog.added_on} />
                        </div> 
                        : 
                        null
                      }
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="page-navigation-wrap mt-4">
                <div class="page-navigation mx-auto">
                  <Link onClick={prevBtnClickHandler} class="page-go page-prev">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Link>
                  <ul class="page-navigation-nav">
                    <li class="active">
                      <Link  class="page-go-link">
                       {context.blogsPageNumber}
                      </Link>
                    </li>
                  </ul>
                  <Link onClick={nextBtnClickHandler}  class="page-go page-next">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
