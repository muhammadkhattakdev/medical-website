import React, { useEffect } from "react";
import Header from "../components/homepageComponents/header";
import Hero1 from "../components/homepageComponents/homepageHero1";
import Hero2 from "../components/homepageComponents/homepageHero2";
import Hero3 from "../components/homepageComponents/homepageHero3";
import Hero4 from "../components/homepageComponents/homepageHero4";
import Hero5 from "../components/homepageComponents/homepageHero5";
import FAQs from "../components/homepageComponents/faqs";
import Hero6 from "../components/homepageComponents/homepageHero6";
import NewsLetterSub from "../components/homepageComponents/newsLetterSub";
import Footer from "../components/homepageComponents/footer";
import Hero7 from "../components/homepageComponents/homepageHero7";

export default function Homepage() {


    useEffect(() => {

    
    }, [])
  return (
    <>

      <Header />
      <Hero1 />
      <div className="section-block"></div>
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <div class="section-block"></div>
      <Hero5 />
      <Hero7 />
      <FAQs />
      <div class="section-block"></div>
      <Hero6 />
      <NewsLetterSub />

    </>
  );
}
