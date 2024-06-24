import React, { useContext, useState } from "react";
import { Context } from "../../context/context";


export default function LoginForm() {

    const [message, setMessage] = useState('');
    const context = useContext(Context);


    return (
        <>
                <section class="contact-area padding-top-140px padding-bottom-120px">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <div class="login-form">
              <div class="user-form">
                <div class="section-heading text-center">
                  <h5 class="section__meta">login account</h5>
                  <h2 class="section__title font-size-30">
                    Login to Your Account
                  </h2>
                  <p class="font-size-16 mt-2">
                    with your social network, Note: Costar will never <br />
                    post content to your social pages.
                  </p>
                </div>
                <div class="contact-form-action mt-4">
                  <form onSubmit={context.loginUser}>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <button
                            class="template-btn btn-bg-1 border-0 w-100"
                            type="submit"
                          >
                            <i class="fa fa-google me-2"></i> Google
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <button
                            class="template-btn btn-bg-2 border-0 w-100"
                            type="submit"
                          >
                            <i class="fa fa-facebook me-2"></i> Facebook
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <button
                            class="template-btn btn-bg-3 border-0 w-100"
                            type="submit"
                          >
                            <i class="fa fa-twitter me-2"></i> Twitter
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="account-assist mt-4 mb-4 text-center">
                          <p class="account__desc">or</p>
                        </div>
                      </div>

                      {context.message ? <div className="col-lg-12">{context.message}</div> : ""}

                      <div class="col-lg-12">
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
                      </div>
                      <div class="col-lg-12">
                        <div class="input-box">
                          <div class="form-group">
                            <input
                              class="form-control password-field"
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                            <span class="la la-lock input-icon"></span>
                            <a
                              href="javascript:void(0)"
                              class="btn toggle-password"
                              title="Toggle show/hide password"
                            >
                              <i class="la la-eye eye-on"></i>
                              <i class="la la-eye-slash eye-off"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <div
                            class="custom-checkbox me-0 d-flex align-items-center justify-content-between"
                          >
                            <div>
                              <input
                                type="checkbox"
                                class="custom-control-input form-check-input"
                                id="chb1"
                              />
                              <label for="chb1" class="mb-0"
                                >Keep me logged in</label
                              >
                            </div>
                            <div>
                              <a
                                href="recover.html"
                                class="text-color-2 fw-medium"
                                >Forgot password?</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="btn-box">
                          <div class="form-group text-center mb-0">
                            <button
                              class="template-btn border-0 w-100"
                              type="submit"
                            >
                              login my account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}