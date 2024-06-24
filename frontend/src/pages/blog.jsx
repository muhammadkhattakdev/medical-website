import React, { useEffect, useState } from "react";
import img1 from "../static/images/img6.jpg";
import { useParams } from "react-router-dom";

const get_blog_url = process.env.REACT_APP_GET_BLOG;
const backend_url = process.env.REACT_APP_SITE_DOMAIN;

export default function ReadBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const getBlog = async (e) => {
    const response = await fetch(`${get_blog_url}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      setBlog(data.article);
        
    }
  };

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div class="col-lg-10  justify-content-center align-items-center">
            <div class="card-item blog-card-detail">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                  <div class="card-img-box">
                    {blog && (
                      <img
                        style={{maxHeight:'60vh', objectFit:'cover'}}
                        src={backend_url + blog.img}
                        className="mt-5 "
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
              <div class="card-content">
                <h4 class="card-meta">
                  <i class="la la-clock-o"></i> Few min read
                </h4>
                <h3 class="card-title">
                  {blog && <a href="blog-single.html">{blog.name}</a>}
                </h3>
                <ul class="list-items">
                  {/* <li class="card-dot-active">
                <span class="la la-user"></span>By
                <a href="#">TechyDevs </a>
              </li> */}
                  <li>
                    {blog && (
                      <div>
                        <span className="la la-calendar"></span> {blog.added_on}
                      </div>
                    )}
                  </li>
                </ul>
                {blog && <p class="card-desc mb-3">{blog.content}</p>}
                {/* <div class="blockquote-item mt-4 mb-4">
              <blockquote class="mb-0">
                <i class="fa fa-quote-right blockquote__icon"></i>
                <p class="blockquote__text">
                  Creativity is just connecting things. When you ask creative
                  people how they did something, they feel a little guilty
                  because they didn't really do it, they just saw something. It
                  seemed obvious to them after a while. That's because they were
                  able to connect experiences they've had and synthesize new
                  things.
                </p>
                <h4 class="blockquote__meta">
                  - Steve Jobs <span>Founder of Apple Inc.</span>
                </h4>
              </blockquote>
            </div> */}

                <div class="tag-items mt-4">
                  {/* <ul class="tag-list">
                <li class="fw-medium text-color me-2">Tags:</li>
                <li>
                  <a href="#" class="rounded-radius">
                    Coronavirus
                  </a>
                </li>
                <li>
                  <a href="#" class="rounded-radius">
                    Clinic
                  </a>
                </li>
                <li>
                  <a href="#" class="rounded-radius">
                    Prevention
                  </a>
                </li>
                <li>
                  <a href="#" class="rounded-radius">
                    Medicine
                  </a>
                </li>
                <li>
                  <a href="#" class="rounded-radius">
                    Virus
                  </a>
                </li>
              </ul> */}
                  <ul class="social-links mt-4">
                    <li class="fw-medium text-color me-2">Share post:</li>
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
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="related-post padding-top-45px">
              <h3 class="widget-title font-size-22">Related Posts</h3>
              <div class="related-post-inner mt-4">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card-item">
                      <div class="card-img-box">
                        <img src="images/img1.jpg" alt="" />
                      </div>
                      <div class="card-content">
                        <h4 class="card-meta">
                          <i class="la la-clock-o"></i> 4 min read
                        </h4>
                        <h3 class="card-title">
                          <a href="blog-single.html">
                            How we can tak care of our health against Virus
                          </a>
                        </h3>
                        <ul class="list-items">
                          <li class="card-dot-active">
                            <span class="la la-user"></span>By
                            <a href="#">TechyDevs </a>
                          </li>
                          <li>
                            <span class="la la-calendar"></span> Jan 8, 2019
                          </li>
                        </ul>
                        <a
                          href="blog-single.html"
                          class="template-btn btn-layout-small"
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card-item">
                      <div class="card-img-box">
                        <img src="images/img2.jpg" alt="" />
                      </div>
                      <div class="card-content">
                        <h4 class="card-meta">
                          <i class="la la-clock-o"></i> 4 min read
                        </h4>
                        <h3 class="card-title">
                          <a href="blog-single.html">
                            10 Ways to Stay Healthy on a Road Trip
                          </a>
                        </h3>
                        <ul class="list-items">
                          <li class="card-dot-active">
                            <span class="la la-user"></span>By
                            <a href="#">TechyDevs </a>
                          </li>
                          <li>
                            <span class="la la-calendar"></span> Jan 8, 2019
                          </li>
                        </ul>
                        <a
                          href="blog-single.html"
                          class="template-btn btn-layout-small"
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comments-wrap mt-5">
              <h2 class="widget-title font-size-22">4 Comments</h2>
              <div class="title-shape"></div>
              <ul class="comments-list padding-top-40px">
                <li>
                  <div class="comment">
                    <img
                      class="avatar__img"
                      alt=""
                      src="images/small-team1.jpg"
                    />
                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment__author">adam smith</span>
                        <span class="comment__date">
                          17 Dec, 2018 - 4:00 AM
                        </span>
                      </div>
                      <p class="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation. Curabitur non nulla sit amet nisl
                        tempus
                      </p>
                      <div class="comment-reply d-flex justify-content-between align-items-center">
                        <a class="template-btn comment__btn" href="#">
                          <i class="la la-reply"></i> Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul class="comments-reply">
                    <li>
                      <div class="comment">
                        <img
                          class="avatar__img"
                          alt=""
                          src="images/small-team2.jpg"
                        />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment__author">Julian Smith</span>
                            <span class="comment__date">
                              17 Dec, 2018 - 4:00 PM
                            </span>
                          </div>
                          <p class="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                            Curabitur non nulla sit amet nisl tempus
                          </p>
                          <div class="comment-reply d-flex justify-content-between align-items-center">
                            <a class="template-btn comment__btn" href="#">
                              <i class="la la-reply"></i> Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="comment">
                    <img
                      class="avatar__img"
                      alt=""
                      src="images/small-team3.jpg"
                    />
                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment__author">Matt Derry</span>
                        <span class="comment__date">
                          17 Dec, 2018 - 4:00 PM
                        </span>
                      </div>
                      <p class="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation. Curabitur non nulla sit amet nisl
                        tempus
                      </p>
                      <div class="comment-reply d-flex justify-content-between align-items-center">
                        <a class="template-btn comment__btn" href="#">
                          <i class="la la-reply"></i> Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="btn-box padding-top-20px text-center">
                <button type="button" class="template-btn border-0">
                  <span class="la la-refresh"></span> Load More
                </button>
              </div>
            </div>
            <div class="comment-form padding-top-55px">
              <div class="user-form">
                <div class="section-heading">
                  <h2 class="section__title font-size-22">Leave a Comment</h2>
                </div>
                <div class="contact-form-action mt-4">
                  <form method="post">
                    <div class="input-box">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                        <span class="la la-user input-icon"></span>
                      </div>
                    </div>
                    <div class="input-box">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                        <span class="la la-envelope-o input-icon"></span>
                      </div>
                    </div>
                    <div class="input-box">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                        <span class="la la-book input-icon"></span>
                      </div>
                    </div>
                    <div class="input-box">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="4"
                          name="message"
                          placeholder="Write Question Here"
                        ></textarea>
                        <span class="la la-pencil input-icon"></span>
                      </div>
                    </div>
                    <div class="btn-box">
                      <div class="form-group text-center mb-0">
                        <button
                          class="template-btn border-0 w-100"
                          type="submit"
                        >
                          Submit comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
