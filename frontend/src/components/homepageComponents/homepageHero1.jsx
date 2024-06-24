import React from "react";
import img1 from '../../static/images/hero1.png';
import img2 from '../../static/images/img2.jpg';
import img3 from '../../static/images/hero1_2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function Hero1 () {

    return (
        <>
                <section className="about-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading text-center">
              <h5 className="section__meta">Why Our Site</h5>
              <h2 className="section__title padding-bottom-20px line-height-55">
                You Want to Be a Nurse! <br />
                We Want to Make Sure You Succeed
              </h2>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6">
            <div className="service-item pe-4">
              <h3 className="widget-title padding-bottom-15px">
                With Our Site
              </h3>
              <ul className="list-items">
                <li className="mb-3">
                  Get your study related content in the form of Text, Videos or Audios
                </li>
                <li>
                  Read Our Blog to gain Knowledge from Other People's Experience
                </li>
                <li>
                  Become a Premuim Member to Share Your Own Ideas in the Form of a Blog Posts. Note: Every Blog shared through our site is reviewed by our experts and upon approval, shared on our site
                </li>
                <li>
                  As a premium member you get to ask your questions anytime from our team of experts
                </li>
                <li>
                  Fill and submit a form related to your concerns and let us reach out to you, to solve your problems
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-item">
              <img src={img1} alt="" />
              <div className="service-item-video">
                <span> Video Guideline</span>
                <a
                  className="mfp-iframe video-btn video-play-btn"
                  href="https://www.youtube.com/watch?v=I9N2u5LpT-0"
                  title="Watch Video"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row padding-top-90px align-items-center">
          <div className="col-lg-6">
            <div className="service-item">
              <img src={img3} alt="" />
              <div className="service-item-video service-item-video-2">
                <a
                  className="mfp-iframe video-btn video-play-btn"
                  href="https://www.youtube.com/watch?v=I9N2u5LpT-0"
                  title="Watch Video"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </a>
                <span> Video Guideline</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-item ps-4">
              <h3 className="widget-title padding-bottom-15px line-height-33">
                We Help You Ace Nursing School
              </h3>
              <ul className="list-items">
                <li className="mb-1">
                  Collection of 1000s of nursing questions 
                </li>
                <li>
                  Get help from the best teachers of your field 
                </li>
                <li>
                  High quality content, tailored to your Nursing School Journey Success
                </li>
                <li>
                  Unable to find answer for your questions? Not to worry! Just submit your question and we will make sure to help you in best possible way
                </li>
                <li>
                  This and much more for <Link className="common-link" to='/membership/'>our members</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="row padding-top-90px align-items-center">
          <div className="col-lg-6">
            <div className="service-item pe-4">
              <h3 className="widget-title padding-bottom-15px line-height-33">
                How to project yourself when travelling during the
                coronavirus(COVID-19) outbreak
              </h3>
              <p className="fw-medium">
                Omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae,
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-item">
              <img src={img2} alt="" />
              <div className="service-item-video">
                <span> Video Guideline</span>
                <a
                  className="mfp-iframe video-btn video-play-btn"
                  href="https://www.youtube.com/watch?v=I9N2u5LpT-0"
                  title="Watch Video"
                >
                  <i className="la la-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>

        </>
    )
}