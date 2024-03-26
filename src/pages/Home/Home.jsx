import React, { useState } from "react";
import { HomeBanner } from "./components/HomeBanner";
import HeroSection from "../../components/HeroSections/HeroSection";

import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ContactSection from "./components/ContactSection";
import Testimonal from "../../components/Testimonal/Testimonal";
import BrandSection from "./components/BrandSection";
import ExpertiseSection from "./components/ExpertiseSection";
import VideoSection from "./components/Video";
import PortfolioSection from "./components/PortfolioSection";

import HeroImage from "../../assets/Images/HeroImage.png";
import HeroIcon from "../../assets/messure.svg";

import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

import useScrollTop from "../../components/useTopScroll";

const Home = () => {
  useScrollTop();
  return (
    <main>
      {/* Home Banner**** */}
      <section>
        <HomeBanner />
      </section>

      {/* Project Section***** */}
      <section className="layout-section">
        <HeroSection
          Details={{
            Heading1: "ABOUT US",
            Heading2: "Complete Design, Build and Turnkey ",
            Span: "Projects.",
            Heading3: "20+ Years of Renovating Experience",
            Para: "Welcome to a world of innovative design, safety, and client-centric excellence. Bijliwala Contractors Canada is a company that began its journey in 2000 with a simple vision-to transform ordinary spaces into extra ordinary living. From cafe transformations to restaurant upgrades, our impact is felt all over.",
            Icon: HeroIcon,
            Image: HeroImage,
            Button: {
              Name: "KNOW MORE",
              Src: "/About",
            },
          }}
        />
      </section>

      {/* Expertise Section***** */}
      <section className="layout-section">
        <ExpertiseSection />
      </section>

      {/* Dream Projcet *** */}
      <section className="layout-section">
        <div className="max-width">
          <div className="flex lg:flex-row flex-col gap-8 justify-between lg:items-center">
            <div className="lg:w-[80%] w-[100%] flex flex-col gap-3">
              <h2 className="heading-h2">WE ARE</h2>
              <h3 className="heading-h3 leading-[4rem] font-bold">
                Your Premier Partner for Restaurant Turnkey Projects in
                <span className="text-[#8e7861]"> Mississauga</span>
              </h3>
              <p className="para">
                We're not just certified; we're WHMIS Certified. Trust our Red
                Seal-certified tradesmen, true artisans who bring your vision to
                life, creating spaces that leave a lasting impression. At
                Bijliwala Contractors Canada, your dream space begins with
                Accident Assurance—where safety and style collide.
              </p>
            </div>
            {/* <div className="lg:w-[20%] flex lg:justify-end">
              <Link
                to={"/Contact"}
                className="common-btn flex items-center gap-5"
              >
                Contact us <MdArrowRightAlt size={25} />
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Video Section***** */}
      <section className="layout-section">
        <VideoSection />
      </section>

      {/* Portfolio Section***** */}
      <section className="layout-section">
        <SectionHeading
          Heading1={" OUR WORK"}
          Heading2={"Creative Portfolio "}
          SPAN={"Designs"}
        />
        <div className="max-w-[1600px] mx-auto mt-20 md:px-0 px-4">
          <PortfolioSection />
        </div>
      </section>

      {/* Contact Section***** */}
      <section className="layout-section">
        <ContactSection />
      </section>

      {/* Testimonal Section******* */}
      <section className="layout-section">
        <SectionHeading
          Heading1={"TESTIMONIALS"}
          Heading2={"Happy Client "}
          SPAN={"Experiences"}
        />
        <div className="max-w-[1600px] mx-auto md:!mt-20 !mt-10 lg:px-0 px-4">
          <Testimonal />
        </div>
      </section>

      {/* Brands Section***** */}
      <section className="layout-section">
        <SectionHeading
          Heading1={"OUR SUCCESSFUL COLLABORATIONS"}
          Heading2={"Partners who"}
          SPAN={"trust us"}
        />
        <div className="max-w-[1600px] mx-auto md:mt-20 mt-10">
          <BrandSection />
        </div>
      </section>
    </main>
  );
};

export default Home;
