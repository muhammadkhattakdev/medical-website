import React from "react";

export default function Header() {
  return (
    <>
      <section className="slider-area">
        <div className="homepage-slide1">
          <div className="single-slide-item slide-bg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-content">
                    <div className="section-heading">
                      <p className="section__meta">Join Now to Learn More</p>
                      <h2 className="section__title">
                        We Help You Ace Nursing School <br />
                        With Least Study Hours
                      </h2>
                    </div>
                    <div className="section-description">
                      <p className="section__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisi cing
                        elit. Odit quaerat est, a labore excepturi <br />
                        rem sed eius facere error! Dolore in perspiciatis porro
                        dolor debitis
                      </p>
                    </div>
                    <div className="btn-box hero-btn-box">
                      <a href="doctors.html" className="template-btn me-3">
                        find a doctor
                      </a>
                      {/* <a
                        href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                        className="video-text-btn mfp-iframe video-play-btn"
                      >
                        <span className="video-btn">
                          <i className="la la-play"></i>
                        </span>
                        <span> watch video</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
