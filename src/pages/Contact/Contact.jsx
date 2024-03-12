import React from "react";
import Banner from "../../components/PageBanner/Banner";
import ContactImg from "../../assets/Images/ContactImage.png";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationDot, FaMessage, aMessage } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div>
      <Banner
        Details={{
          Heading: "Contact Us",
          Image: ContactImg,
        }}
      />

      <section className="layout-section">
        <div className="max-width">
          <div className="flex md:flex-row flex-col gap-12">
            {/* detials section**** */}
            <div className="lg:w-[65%] md:w-[50%]">
              <div>
                <h2 className="heading-h3">Starting a New Project?</h2>
                <div className="flex flex-col gap-4 mt-10">
                  <p className="para">
                    Come by our place at Bijliwala Contractors Canada! We're
                    here to help turn your ideas into reality. Visit us at our
                    studio, where we mix creativity with skill. Let's chat about
                    how we can bring your vision to life.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <h2 className="heading-h3">Contact us</h2>
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex items-center gap-4">
                    <FaLocationDot className="text-[2rem]" />
                    <p className="para">778 NE 84th Canada</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[2rem]" />
                    <p className="para">416-407-7755</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoMailOpen className="text-[2rem]" />
                    <p className="para">Lagancontractor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* form section**** */}
            <div className="lg:w-[35%] md:w-[50%]">
              <form className="border border-[#8E7861] p-8">
                <h2 className="heading-h2 !text-white ">Lorem Ipsum</h2>
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
                          required
                          className="w-full h-full bg-transparent outline-none text-[1.5rem] font-semibold"
                          placeholder="Address*"
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="common-btn">
                    GET AN ONSITE INSPECTION
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-section">
        <div className="max-width">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9581118058!2d76.76289349687472!3d28.644285696143115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1710156128727!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
