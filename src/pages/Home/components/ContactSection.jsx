import React, { useState } from "react";
import axios from "axios";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationDot, FaMessage } from "react-icons/fa6";

import { MdArrowRightAlt } from "react-icons/md";

const ContactSection = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
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
          // Subject: userAddress,
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

  return (
    <div className="max-width">
      <div className="flex lg:flex-row flex-col gap-12">
        {/* detials section**** */}
        <div className="lg:w-[40%]">
          <div>
            <h2 className="heading-h2">Get a Quote</h2>
            <h3 className="heading-h3">
              Emblem of <span className="text-[#8e7861]">Excellence</span>
            </h3>
            <div className="flex flex-col gap-4 md:mt-10 mt-3">
              <p className="para">
                With a specialized focus on crafting spaces for restaurants,
                cafes, salons, and other retail establishments, we've learned
                that every space has a story to tell, and it's our privilege to
                be the authors.
              </p>
              <p className="para">
                We're among the best because we know that renovation isn't just
                about building stuff. Each renovation project is a canvas where
                your vision takes flight, where every detail is an integral part
                of the masterpiece.
              </p>
            </div>
          </div>
        </div>

        {/* form section**** */}
        <div className="lg:w-[60%]">
          <form onSubmit={handleSubmit} className="border border-[#473C30] p-8">
            <h2 className="heading-h2 !text-white ">
              Lorem <span className="text-[#8e7861]">Ipsum</span>
            </h2>
            <div className="mt-5 flex flex-col gap-5">
              {/* Name And Phone*** */}
              <div className="grid sm:grid-cols-2 gap-5 w-full">
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
              <div className="grid sm:grid-cols-2 gap-5 w-full">
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
                <div className="bg-[#1B1B1B] py-6 px-3">
                  <div className="flex gap-4 items-center">
                    <div>
                      <FaLocationDot className="text-[1.6rem] text-[#8E7861]" />
                    </div>
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                      placeholder="Address*"
                      value={userAddress}
                      onChange={(e) => {
                        setUserAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
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
                      rows={4}
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
                <button className="common-btn flex items-center gap-5 md:w-auto w-full">
                  Loading.... <MdArrowRightAlt size={25} />
                </button>
              ) : (
                <button className="common-btn flex items-center gap-5 md:w-auto w-full">
                  GET AN ONSITE INSPECTION <MdArrowRightAlt size={25} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
