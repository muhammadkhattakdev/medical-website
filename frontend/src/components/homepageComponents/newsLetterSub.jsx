import React from "react";


export default function NewsLetterSub() {

    return (
        <>
                <section class="subscriber-area padding-top-80px padding-bottom-80px">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="section-heading">
              <h5 class="section__meta section__meta2">newsletter</h5>
              <h2 class="section__title text-white padding-bottom-15px">
                Subscribe Our sletter <br />
                to get Coronavirus Updates
              </h2>
            </div>
            <div class="section-divider section-divider-2 mb-0"></div>
          </div>
          <div class="col-lg-5">
            <div class="subscriber-form">
              <div class="contact-form-action">
                <form method="post">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                    />
                    <span class="la la-envelope-o input-icon"></span>
                  </div>
                  <div class="btn-box">
                    <button class="template-btn border-0 w-100" type="submit">
                      Subscribe now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}