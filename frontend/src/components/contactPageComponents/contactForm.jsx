import React from "react";

export default function ContactForm() {
  return (
    <>
      <section class="contact-area padding-top-140px padding-bottom-120px">
        <div class="container">
          <div
            class="alert alert-success alert-message mb-3"
            role="alert"
          ></div>
          <div class="row">
            <div class="col-lg-7">
              <div class="user-form-wrap">
                <div class="user-form">
                  <div class="section-heading">
                    <h5 class="section__meta">get in touch</h5>
                    <h2 class="section__title font-size-28">
                      Contact with us! for help
                    </h2>
                  </div>
                  <div class="contact-form-action mt-4">
                    <form action="php/contact.php" class="contact-form">
                      <div class="input-box">
                        <div class="form-group">
                          <input
                            id="name"
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
                            id="email"
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
                            id="subject"
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
                            id="message"
                            class="form-control"
                            rows="4"
                            name="message"
                            placeholder="Write Message Here"
                          ></textarea>
                          <span class="la la-pencil input-icon"></span>
                        </div>
                      </div>
                      <div class="btn-box">
                        <div class="form-group text-center mb-0">
                          <button
                            id="send-message-btn"
                            class="template-btn border-0 w-100"
                            type="submit"
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="contact-content ps-4">
                <div class="contact-item mb-4">
                  <h3 class="widget-title font-size-20">Where We live</h3>
                  <ul class="list-items mt-3">
                    <li>
                      <span class="me-1 fw-medium text-color">Address:</span>
                      2750 Quadra Street Victoria, Canada.
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">Email:</span>
                      <a href="#">hello@example.com</a>
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">Phone:</span>
                      <a href="#">+44 587 154756</a>
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">Fax:</span>
                      <a href="#">+55 785 4578964</a>
                    </li>
                  </ul>
                </div>
                <div class="section-block"></div>
                <div class="contact-item mt-4 mb-4">
                  <h3 class="widget-title font-size-20">Opening Hours</h3>
                  <ul class="list-items mt-3">
                    <li>
                      <span class="me-1 fw-medium text-color">Monday:</span>8AM
                      - 6AM
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">Tuesday:</span>
                      <a href="#">8AM - 6AM</a>
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">Wednesday:</span>
                      <a href="#">8AM - 6AM</a>
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">Thursday:</span>
                      <a href="#">8AM - 6AM</a>
                    </li>
                    <li>
                      <span class="me-1 fw-medium text-color">
                        Friday - Sunday:
                      </span>
                      <a href="#">Closed</a>
                    </li>
                  </ul>
                </div>
                <div class="section-block"></div>
                <div class="contact-item mt-4">
                  <h3 class="widget-title font-size-20">Social Profile</h3>
                  <ul class="social-links mt-3">
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
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
