import React from "react";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLocationDot, FaMessage } from "react-icons/fa6";

import { MdArrowRightAlt } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="max-width">
      <div className="flex lg:flex-row flex-col gap-12">
        {/* detials section**** */}
        <div className="lg:w-[40%]">
          <div>
            <h2 className="heading-h2">LOREM IPSUM</h2>
            <h3 className="heading-h3">Emblem of Excellence</h3>
            <div className="flex flex-col gap-4 mt-10">
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
          <form className="border border-[#473C30] p-8">
            <h2 className="heading-h2 !text-white ">Lorem Ipsum</h2>
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
              <button className="common-btn flex items-center gap-5 md:w-auto w-full">
                GET AN ONSITE INSPECTION <MdArrowRightAlt size={25} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
