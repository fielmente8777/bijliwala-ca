import React, { useState } from "react";
import Banner from "../../components/PageBanner/Banner";
import ContactImg from "../../assets/Images/ContactImage.png";
import axios from "axios";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationDot, FaMessage, aMessage } from "react-icons/fa6";

import { MdArrowRightAlt } from "react-icons/md";
import useScrollTop from "../../components/useTopScroll";

export const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormRes(true);
    try {
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        {
          Domain: "bijliwala", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          // Subject: userMessage,
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setFormRes(false);
        alert("message sended");
      } else {
        setFormRes(false);
        alert("somethin wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useScrollTop();
  return (
    <div>
      {/* <Banner
        Details={{
          Heading: "Contact Us",
          Image: ContactImg,
        }}
      /> */}

      <section className="layout-section">
        <div className="max-width">
          <div className="flex md:flex-row flex-col gap-12">
            {/* detials section**** */}
            <div className="lg:w-[65%] md:w-[50%]">
              <div>
                <h2 className="heading-h3">
                  Starting a New{" "}
                  <span className="text-[#8e7861]">Project?</span>
                </h2>
                <div className="flex flex-col gap-4 md:mt-10 mt-4">
                  <p className="para">
                    Come by our place at Bijliwala Contractors Canada! We're
                    here to help turn your ideas into reality. Visit us at our
                    studio, where we mix creativity with skill. Let's chat about
                    how we can bring your vision to life.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <h2 className="heading-h3 capitalize">
                  Contact <span className="text-[#8e7861]">us</span>
                </h2>
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex items-center gap-4">
                    <FaLocationDot className="text-[2rem] text-[#8e7861]" />
                    <p className="para">219 Gardenbrooke Trail, Brampton, Ontario, L6P3C9</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[2rem] text-[#8e7861]" />
                    <p className="para">416-407-7755</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoMailOpen className="text-[2rem] text-[#8e7861]" />
                    <p className="para">Lagancontractor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* form section**** */}
            <div className="lg:w-[35%] md:w-[50%]">
              <form
                onSubmit={handleSubmit}
                className="border border-[#8E7861] p-12"
              >
                <h2 className="heading-h2 !text-white !capitalize ">
                  Get in <span className="text-[#8E7861]">Touch</span>
                </h2>
                <div className="mt-5 flex flex-col gap-5">
                  {/* Name And Phone*** */}
                  <div className="grid sm:grid-cols-1 gap-5 w-full">
                    <div className="bg-[#1B1B1B] py-6 px-3">
                      <div className="flex gap-4 items-center">
                        <div>
                          <FaUser className="text-[1.6rem] text-[#8E7861]" />
                        </div>
                        <input
                          type="text"
                          required
                          className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                          placeholder="Your Name*"
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-[#1B1B1B] py-6 px-3">
                      <div className="flex gap-4 items-center">
                        <div>
                          <FaPhoneAlt className="text-[1.6rem] text-[#8E7861]" />
                        </div>
                        <input
                          type="number"
                          required
                          className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                          placeholder="Your Phone Number*"
                          value={userPhone}
                          onChange={(e) => {
                            setUserPhone(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mail and Addres** */}
                  <div className="grid sm:grid-cols-1 gap-5 w-full">
                    <div className="bg-[#1B1B1B] py-6 px-3">
                      <div className="flex gap-4 items-center">
                        <div>
                          <IoMailOpen className="text-[1.6rem] text-[#8E7861]" />
                        </div>
                        <input
                          type="email"
                          required
                          className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                          placeholder="Your Email*"
                          value={userEmail}
                          onChange={(e) => {
                            setUserEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    {/* <div className="bg-[#1B1B1B] py-6 px-3">
                      <div className="flex gap-4 items-center">
                        <div>
                          <FaLocationDot className="text-[1.6rem] text-[#8E7861]" />
                        </div>
                        <input
                          type="text"
                          required
                          className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                          placeholder="Address*"
                        />
                      </div>
                    </div> */}
                  </div>

                  {/* Message**** */}
                  <div className="w-full">
                    <div className="bg-[#1B1B1B] py-6 px-3">
                      <div className="flex gap-4">
                        <div>
                          <FaMessage className="text-[1.6rem] text-[#8E7861] mt-1" />
                        </div>
                        <textarea
                          type="text"
                          required
                          rows={8}
                          className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                          placeholder="Message*"
                          value={userMessage}
                          onChange={(e) => {
                            setUserMessage(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  {formRes ? (
                    <button className="common-btn flex items-center gap-3">
                      Loading..... <MdArrowRightAlt size={25} />
                    </button>
                  ) : (
                    <button className="common-btn flex items-center gap-3">
                      SUBMIT <MdArrowRightAlt size={25} />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section">
        <div className="max-width">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191307.21536761077!2d-79.74097138364637!3d43.84187455426463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b233b75b02939%3A0x4b34e9570f59b0a!2s219%20Gardenbrooke%20Trail%2C%20Brampton%2C%20ON%20L6P%203C9%2C%20Canada!5e0!3m2!1sen!2sin!4v1710394380717!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};
