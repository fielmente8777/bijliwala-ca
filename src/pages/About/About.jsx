import React, { useEffect } from "react";
import AboutImg from "../../assets/Images/ContactImage.png";
import Banner from "../../components/PageBanner/Banner";
import HeroSection from "../../components/HeroSections/HeroSection";
import HeroImage from "../../assets/Images/HeroImage.png";
import { Card1 } from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Testimonal from "../../components/Testimonal/Testimonal";
import BrandSection from "../Home/components/BrandSection";

import listen from "../../assets/svg/listen.svg";
import plan from "../../assets/svg/plan.svg";
import build from "../../assets/svg/build.svg";
import execute from "../../assets/svg/execute.svg";

import Img from "../../assets/Images/TeamImg1.png";
import Img2 from "../../assets/Images/Teamimg2.png";
import Img3 from "../../assets/Images/Teamimg3.png";
import Img4 from "../../assets/Images/Teamimg4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import arrowLeft from "../../assets/svg/arrowleft.svg";
import arrowRight from "../../assets/svg/arrowright.svg";

import { MdArrowRightAlt } from "react-icons/md";
import useScrollTop from "../../components/useTopScroll";

const Details = [
  {
    Icon: listen,
    Heading: "Listen Better",
    Para: "We take the time to understand your dreams, ensuring a personalized touch in every corner of your space.",
  },
  {
    Icon: plan,
    Heading: "Plan Together",
    Para: "Together, we transform your visions into tangible blueprints. We create a true reflection of your style and aspirations in every detail.",
  },
  {
    Icon: build,
    Heading: "Build Stronger",
    Para: "Beyond aesthetics, we construct interiors fortified with strength, where every element stands resilient and enduring.",
  },
  {
    Icon: execute,
    Heading: "Execute Better",
    Para: "Our commitment goes beyond blueprints; we flawlessly bring your vision to life, ensuring your space is built and executed perfectly.",
  },
];

const Details2 = [
  {
    Image: Img,
    Heading: "Ira Mulanax",
    Para: "founder",
  },
  {
    Image: Img2,
    Heading: "Black Hamilton",
    Para: "Project Manager",
  },
  {
    Image: Img3,
    Heading: "Ahmed Shawky",
    Para: "web designer",
  },
  {
    Image: Img4,
    Heading: "John Doe",
    Para: "Engineer",
  },
];

const About = () => {
  useScrollTop();
  return (
    <>
      {/* Banner Section****** */}
      {/* <Banner
        Details={{
          Heading: "About Us",
          Image: AboutImg,
        }}
      /> */}
      {/* Connect Section***** */}
      <section className="layout-section">
        <HeroSection
          Details={{
            Heading1: "TURNING SPACES FOR BETTER LIVING",
            Heading2: "Experience the Art of Exellent Transformation in",
            Span: " Renovation.",
            Para: "Welcome to a world where innovation meets your goals, where we transform your dreams into remarkable, market-ready spaces. Bijliwala Contractors Canada is a company that began its journey in 2000 with a simple vision-to transform ordinary spaces into extra ordinary living. From cafe transformations to restaurant upgrades, our impact is felt all over.",
            // Icon: HeroIcon,
            Image: HeroImage,
            Button: {
              Name: "contact us",
              Src: "/Contact",
            },
          }}
        />
      </section>

      {/* Services Section******* */}
      <section className="layout-section">
        <div className="max-width">
          <h2 className="heading-h2 md:text-start text-center">OUR SERVICES</h2>
          <h3 className="heading-h3 md:text-start text-center">
            Winning <span className="text-[#8E7861]">Strategy</span>
          </h3>
          {/* slider for mobile****** */}
          <div className="md:hidden md:mt-20 mt-10">
            <Swiper
              loop={true}
              autoplay={{
                delay: 4000,
              }}
              pagination={{
                el: "#bullets-Services",
              }}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              modules={[Pagination, Autoplay, Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {Details.map((details) => {
                return (
                  <SwiperSlide>
                    <Card1 Details={details} Position="Center" />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* swiper button and pagination customization***** */}
            <div className="md:mt-16 mt-5 flex items-center gap-5 justify-center">
              {/* left arrow*** */}
              <div className="md:w-[35px] w-[22px] cursor-pointer prev-btn">
                <img
                  src={arrowLeft}
                  alt="arrow-left-vecotr"
                  className="w-full h-full"
                />
              </div>
              {/* indicators***** */}
              <span id="bullets-Services"></span>

              {/* right arrows***** */}
              <div className="md:w-[35px] w-[22px] cursor-pointer next-btn">
                <img
                  src={arrowRight}
                  alt="arrow-right-vecotr"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* grid view for desktop**** */}
          <div className="md:grid lg:grid-cols-4 md:grid-cols-3 hidden gap-5 md:mt-20 mt-10">
            {Details.map((details) => {
              return <Card1 Details={details} Position="Center" />;
            })}
          </div>
        </div>
      </section>

      {/* Team Section******* */}
      <section className="layout-section">
        <div className="max-width">
          <h2 className="heading-h2 md:text-start text-center">OUR TEAM</h2>
          <h3 className="heading-h3 md:text-start text-center">
            Meet the <span className="text-[#8E7861]">Experts</span>
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 md:mt-20 mt-10">
            {Details2.map((details) => {
              return <Card2 Details={details} />;
            })}
          </div>

          <div className="flex justify-center md:mt-20 mt-10">
            <button className="common-btn flex items-center justify-center">
              GET AN ONSITE INSPECTION <MdArrowRightAlt size={25} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonal Section******* */}
      {/* <section className="layout-section">
        <SectionHeading
          Heading1={"TESTIMONIALS"}
          Heading2={"Happy Client Experiences"}
        />
        <div className=" md:!mt-20 !mt-10 lg:px-0 px-4">
          <Testimonal />
        </div>
      </section> */}

      {/* Brands Section***** */}
      {/* <section className="layout-section">
        <SectionHeading
          Heading1={"TRUSTED PARTNERS"}
          Heading2={"Collaborations for Shared Success"}
        />
        <div className="md:mt-20 mt-10">
          <BrandSection />
        </div>
      </section> */}
    </>
  );
};

export default About;
