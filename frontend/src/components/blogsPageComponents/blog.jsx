import React, { useEffect } from "react";
import img3 from '../../static/images/img3.jpg';
import { Link } from "react-router-dom";


const backend_url = process.env.REACT_APP_SITE_DOMAIN;

export default function Blog(props) {

  const { id, title, date, img } = props;

  useEffect(() => {
  }, [])
  return (
    <>
      <div class="card-item">
        <div class="card-img-box">
          <img style={{height:'16rem', objectFit:'cover'}} src={ backend_url + img} alt="" />
        </div>
        <div class="card-content">
          <h4 class="card-meta">
          </h4>
          <h3 class="card-title">
            <Link to={`/blog/${id}`}>
              {title}
            </Link>
          </h3>
          <ul class="list-items">
            <li>
              <span class="la la-calendar"></span> {date}
            </li>
          </ul>
          <Link to={`/blog/${id}`} class="template-btn btn-layout-small">
            read more
          </Link>
        </div>
      </div>
    </>
  );
}
