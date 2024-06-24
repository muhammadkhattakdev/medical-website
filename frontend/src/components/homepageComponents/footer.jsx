import React from "react";
import logo from "../../static/images/logo.png";

export default function Footer() {

    return (
        <>
                <section class="footer-area padding-top-90px">
      <div id="particles-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 column-td-6">
            <div class="footer-widget">
              <a href="index.html">
                <img
                  src={logo}
                  alt="footer logo"
                  class="footer__logo"
                />
              </a>
              <p class="padding-top-30px padding-bottom-20px">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan. sed do eiusmod tempor incididunt ut labor
              </p>
              <h3 class="widget-title font-size-16 fw-medium pb-3 mb-0">
                Connect with us
              </h3>
              <ul class="social-links">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 column-td-6">
            <div class="footer-widget">
              <h3 class="widget-title">Privacy & Tos</h3>
              <div class="section-divider"></div>
              <ul class="list-items">
                <li><a href="#">Advertiser agreement</a></li>
                <li><a href="#">Developer agreement</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Technology Privacy</a></li>
                <li><a href="#">Acceptable user policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 column-td-6">
            <div class="footer-widget">
              <h3 class="widget-title">Useful links</h3>
              <div class="section-divider"></div>
              <ul class="list-items">
                <li><a href="#">Situation Reports</a></li>
                <li><a href="#">Advice For Public</a></li>
                <li><a href="#">Prevention</a></li>
                <li><a href="#">Coronavirus Symptoms</a></li>
                <li><a href="#">Donor & Partners</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 column-td-6">
            <div class="footer-widget">
              <h3 class="widget-title">Contact Us</h3>
              <div class="section-divider"></div>
              <ul class="list-items">
                <li>
                  <span class="me-1 fw-medium text-color">Address:</span>2750
                  Quadra Street Victoria, Canada.
                </li>
                <li>
                  <span class="me-1 fw-medium text-color">Email:</span
                  ><a href="#">hello@example.com</a>
                </li>
                <li>
                  <span class="me-1 fw-medium text-color">Phone:</span
                  ><a href="#">+44 587 154756</a>
                </li>
                <li>
                  <span class="me-1 fw-medium text-color">Fax:</span
                  ><a href="#">+55 785 4578964</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-content text-center">
              <p class="copy__desc">
                &copy; <span class="year"></span> Costar. All Rights Reserved.
                By <a href="https://techydevs.com">TechyDevs.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}