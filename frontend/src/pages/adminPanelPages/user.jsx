import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faCross, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

const get_user_url = process.env.REACT_APP_GET_USER;

export default function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const context = useContext(Context);

  const getUser = async (e) => {
    const response = await fetch(`${get_user_url}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.tokens.access}`,
      },
    });
    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
      setUser(data.user);
    }

    if (response.status === 401) {
      navigate("/login/");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="section__title">
            <FontAwesomeIcon icon={faUser} /> User Details
          </h3>
        </div>
        <div className="row  mt-5">
            <div className="col-lg-12">
                <h4 className="section__title mb-3">General Info</h4>
            </div>
          <div className="col-lg-3 col-md-5">
            <div className="single-detail">{user.first_name}</div>
            First Name
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="single-detail">{user.last_name}</div>
            Last Name
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="single-detail">{user.email}</div>
            Email Address
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="single-detail">{user.status}</div>
            Status
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-5">
            <div className="single-detail">{user.speciality}</div>
            Speciality
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="single-detail">{user.registration_body}</div>
            Registration Body
          </div>
        </div>
        <div className="row mt-5">
            <h3 className="mb-5 section__title">Current Status</h3>
            <div className="col-lg-3 d-flex flex-column align-items-center justify-content-around  col-md-5">
                    { user.is_superuser ? <FontAwesomeIcon style={{fontSize:'25px', color:'green'}} icon={faCheck} />: <FontAwesomeIcon icon={faTimes} style={{color:'red', fontSize:'25px'}} /> }
                    Is Admin 
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center justify-content-around  col-md-5">
                    { user.is_staff ? <FontAwesomeIcon style={{fontSize:'25px', color:'green'}} icon={faCheck} />: <FontAwesomeIcon icon={faTimes} style={{color:'red', fontSize:'25px'}} /> }
                    Is Staff Member
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center justify-content-around  col-md-5">
                    { user.is_active ? <FontAwesomeIcon style={{fontSize:'25px', color:'green'}} icon={faCheck} />: <FontAwesomeIcon icon={faTimes} style={{color:'red', fontSize:'25px'}} /> }
                    Is Active
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center justify-content-around  col-md-5">
                    { user.is_member ? <FontAwesomeIcon style={{fontSize:'25px', color:'green'}} icon={faCheck} />: <FontAwesomeIcon icon={faTimes} style={{color:'red', fontSize:'25px'}} /> }
                    Has Membership
            </div>
        </div>
        <div className="row d-flex flex-row justify-content-center align-items-center mt-5">
          <div className="col-lg-2 mt-3">
            <Link to={'/admin/'} style={{textDecoration:'none'}} className="my-primary-btn"><FontAwesomeIcon icon={faArrowLeft} /> Go Back</Link>
          </div>
        </div>
      </div>
    </>
  );
}
