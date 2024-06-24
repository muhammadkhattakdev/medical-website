import React from "react";

export default function Header2( props ) {
    const { headingText } = props 
    return (
        <>
                <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-content text-center">
              <div class="section-heading">
                <h2 class="section__title">{headingText}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="breadcrumb-list">
        <ul class="list-items">
          <li class="active__list-item"><a href="index.html">home</a></li>
          <li>About</li>
        </ul>
      </div>
    </section>

        </>
    )
}