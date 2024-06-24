import React, { useContext, useEffect } from "react";
import logoImg from "../static/images/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const context = useContext(Context);

  // useEffect(() => {
  //   document
  //     .querySelector(".logo-right-button .side-menu-open")
  //     .addEventListener("click", function () {
  //       document
  //         .querySelector(".side-nav-container")
  //         .classList.toggle("active");
  //     });

  //   window.addEventListener("scroll", function () {
  //     var headerMenuArea = document.querySelector(".header-menu-area");
  //     if (window.scrollY > 0) {
  //       headerMenuArea.classList.add("header-fixed");
  //     } else {
  //       headerMenuArea.classList.remove("header-fixed");
  //     }

  //     var scrollToTop = document.getElementById("scroll-top");
  //     if (window.scrollY > 300) {
  //       scrollToTop.classList.add("back-btn-shown");
  //     } else {
  //       scrollToTop.classList.remove("back-btn-shown");
  //     }
  //   });
  // }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: "white",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "10",
        }}
        class="navbar navbar-expand-sm navbar"
      >
        <div className="container">
          <div className="logo-box py-3">
            <Link to="/" className="logo ">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > <FontAwesomeIcon icon={faBars} /> </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mx-auto me-auto mt-2 mt-lg-0">
              <li class="">
                <Link to='/' class="link-item mx-3" href="#" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="">
                <Link to='/about/' className="link-item mx-3">
                  About Us
                </Link>
              </li>
              <li class="">
                <Link to='/blogs/' className="link-item mx-3">
                  Blog
                </Link>
              </li>
              <li class="">
                <Link to='/contact/' className="link-item mx-3">
                  Contact
                </Link>
              </li>
            </ul>
            {
              context.user && context.validateToken() ? context.user.is_superuser?  
              <>
              <Link to='/dashboard/' className="mx-3 common-link text-decoration-none">User Panel</Link>
              <Link to='/admin/' className="my-primary-btn">Administration</Link>
              </>
              : 
              context.user.is_member ? <Link to='/dashboard/' className="my-primary-btn">Dashboard</Link> : <Link to='/membership/' className="my-primary-btn">Buy Membership</Link>
              : <>
                <Link to='/signup/' className="tex text-decoration-none mx-3 common-link">Sign Up</Link> 
                <Link to='/login/' className="my-primary-btn">Login</Link>
              </> 
            }
            
          </div>
        </div>
      </nav>
    </>
  );
}

// <section className="header-menu-area">
// <div className="header-menu-fluid">
//   <div className="container">
//     <div className="row align-items-center main-menu-content">
//       <div className="col-lg-3">
//         <div className="logo-box">
//           <Link to="/" className="logo">
//             <img src={logoImg} alt="logo" />
//           </Link>
//         </div>
//       </div>
//       <div className="col-lg-9">
//         <div className="menu-wrapper">
//           <nav className="main-menu">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about/">about</Link>
//               </li>
//               {/* <li>
//                 <a href="#">pages</a>
//                 <ul className="dropdown-menu-item">
//                   <li>
//                     <a href="doctors.html">Our doctors</a>
//                   </li>
//                   <li>
//                     <a href="doctor-single.html">Doctor detail</a>
//                   </li>
//                   <li>
//                     <a href="contact.html">Contact us</a>
//                   </li>
//                   <li>
//                     <a href="faq.html">Faqs</a>
//                   </li>
//                   <li>
//                     <a href="error.html">Error page</a>
//                   </li>
//                   <li>
//                     <a href="recover.html">Recover pass</a>
//                   </li>
//                 </ul>
//               </li> */}
//               <li>
//                 <Link to={`/blogs/`}>blog</Link>
//               </li>
//               <li>
//                 <Link to="/contact/">contact us</Link>
//               </li>
//               {context.user ? (
//                 <li>
//                   <Link to="/dashboard/">User Dashboard</Link>
//                 </li>
//               ) : (
//                 <>

//                 <li>
//                   <Link to="/signup/">Sign Up</Link>
//                 </li>
//                 <li>
//                   <Link to="/login/" className="template-btn">
//                     Login
//                   </Link>
//                 </li>
//                 </>
//               )}
//             <div className="logo-right-button">
//             <ul>
//               {/* {context.user && context.user.is_superuser ? (
//                 <li>
//                   <Link to="/login/" className="template-btn">
//                     Admin Dashboard
//                   </Link>
//                 </li>
//               ) : null } */}
//             </ul>
//             <div className="side-menu-open">
//               <i className="la la-bars"></i>
//             </div>
//           </div>
//             </ul>

//           </nav>
//           <div className="logo-right-button">
//             <ul>
//               {context.user && context.user.is_superuser ? (
//                 <li>
//                   <Link to="/login/" className="template-btn">
//                     Admin Dashboard
//                   </Link>
//                 </li>
//               ) : null }
//             </ul>
//             <div className="side-menu-open">
//               <i className="la la-bars"></i>
//             </div>
//           </div>
//           <div className="side-nav-container">
//             <div className="humburger-menu">
//               <div className="humburger-menu-lines side-menu-close"></div>
//             </div>
//             <div className="side-menu-wrap">
//               <ul className="side-menu-ul">
//                 <li className="sidenav__item">
//                   <Link to="/">home</Link>
//                 </li>
//                 <li className="sidenav__item">
//                   <Link to="/about/">about</Link>
//                 </li>
//                 <li className="sidenav__item">
//                 <Link to={`/blogs/`}>blog</Link>
//                   <span className="menu-plus-icon"></span>
//                 </li>
//                 <li className="sidenav__item">
//                   <Link to="/contact/">contact</Link>
//                 </li>
//                 <li className="sidenav__item">
//                   <Link to="/signup/">Sign Up</Link>
//                 </li>
//                 <li className="sidenav__item">
//                   <Link to="/login/">Login</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section>
