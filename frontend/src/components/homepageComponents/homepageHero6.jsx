import React from "react";
import img1 from "../../static/images/img1.jpg";
import img2 from "../../static/images/img2.jpg";
import img3 from "../../static/images/img3.jpg";

export default function Hero6() {
  return (
    <>

      <section class="blog-area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="section-heading">
                <h5 class="section__meta">our blog posts</h5>
                <h2 class="section__title padding-bottom-15px line-height-55">
                  Check out Our Latest <br />
                  News & Articles
                </h2>
              </div>
              <div class="section-divider"></div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-4 column-td-6">
              <div class="card-item">
                <div class="card-img-box">
                  <img src={img1} alt="" />
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
            <div class="col-lg-4 column-td-6">
              <div class="card-item">
                <div class="card-img-box">
                  <img src={img2} alt="" />
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
            <div class="col-lg-4 column-td-6">
              <div class="card-item">
                <div class="card-img-box">
                  <img src={img3} alt="" />
                </div>
                <div class="card-content">
                  <h4 class="card-meta">
                    <i class="la la-clock-o"></i> 4 min read
                  </h4>
                  <h3 class="card-title">
                    <a href="blog-single.html">
                      How Scientific Is Modern Medicine Really?
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
      </section>
    </>
  );
}
