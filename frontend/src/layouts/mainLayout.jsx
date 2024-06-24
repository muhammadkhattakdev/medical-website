import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/homepageComponents/footer";

export default function MainLayout() {
  useEffect(() => {
    // document
    //   .getElementById("scroll-top")
    //   .addEventListener("click", function () {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //     });
    //   });

    // document
    //   .querySelector(".humburger-menu .side-menu-close")
    //   .addEventListener("click", function () {
    //     document
    //       .querySelector(".side-nav-container")
    //       .classList.remove("active");
    //   });

    var preLoader = document.getElementById("loading-area");

    setTimeout(function () {
      preLoader.style.transition = "opacity 2s";
      preLoader.style.opacity = "0";
      setTimeout(function () {
        preLoader.style.display = "none";
      }, 2000);
    }, 500);
  }, []);

  return (
    <>
      <div id="loading-area">
        <div class="loader-col">
          <div class="loader" id="loader"></div>
        </div>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
      <div id="scroll-top">
        <i class="fa fa-angle-up" title="Go top"></i>
      </div>
    </>
  );
}
