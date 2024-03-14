import React from "react";
import Logo from "../../assets/logo 2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] layout-section !pb-5">
      <div className="max-width">
        <div className="max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-20 max-md:flex-col max-md:gap-0 ">
            <div className="flex flex-col w-[18%]  items-center  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-6 max-md:mt-10 ">
                <img
                  loading="lazy"
                  src={Logo}
                  className="self-center aspect-[1.33] w-[190px]"
                />
                <div className="mt-4">
                  <p className="text-[1.5rem]">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col  w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-1.5 text-base leading-6 text-opacity-60 max-md:mt-10">
                <div className="md:text-[24px] text-[1.8rem] font-[700] leading-[28px] max-md:mr-0.5 text-[#8E7861]">
                  <h3>Contact</h3>
                </div>
                <div className="flex flex-col gap-4 text-[#C2C2C299] mt-5">
                  <div className="flex gap-3 mt-5 leading-6 max-md:mr-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b456b3a51b9cb4e604619b10bb48f103b7222d5fe069364a7375e3eae92b0933?"
                      className="shrink-0 my-auto w-7 aspect-square"
                    />
                    <div>
                      <p className="text-[1.5rem]">
                        219 Gardenbrooke Trail, Brampton, Ontario, L6P3C9
                      </p>{" "}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4771227803dd65304795c954315039c2381e870bbc3e37cdba5701adf3ee9bbe?"
                      className="shrink-0 w-7 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                      <p className="text-[1.5rem]">416-407-7755</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d3315590916f2691ddf1861195c18d5941376f02f7d0d06e6a9ec84a791bb18?"
                      className="shrink-0 w-7 aspect-square"
                    />
                    <div className="grow my-auto">
                      <p className="text-[1.5rem]">
                        lagancontractor@gmail.com{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[20%] ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col py-0.5 text-base leading-6 whitespace-nowrap max-md:mt-10">
                <div className="md:text-[24px] text-[1.8rem] font-[700] leading-[28px] text-[#8E7861]">
                  <h3>Navigation</h3>
                </div>
                <div className="flex flex-col gap-4 mt-5">
                  <Link to="/" className="mt-4 text-[1.5rem]">
                    <p className=" hover:text-[#8E7861] transition-colors duration-300">
                      Home
                    </p>
                  </Link>
                  <Link to="/About" className="mt-3 text-[1.5rem]  ">
                    <p className="hover:text-[#8E7861] transition-colors duration-300">
                      About
                    </p>
                  </Link>
                  <Link to="/Work" className="mt-3 text-[1.5rem] ">
                    <p className=" hover:text-[#8E7861] transition-colors duration-300">
                      Work
                    </p>
                  </Link>
                  {/* <Link className="mt-3 text-[1.5rem] ">
                    <p className=" hover:text-[#8E7861] transition-colors duration-300">
                      Blog
                    </p>
                  </Link> */}
                  <Link to="/Contact" className="mt-3 text-[1.5rem] ">
                    <p className=" hover:text-[#8E7861] transition-colors duration-300">
                      Contact
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[32%] justify-start max-md:ml-0 max-md:w-full">
              <div className="flex flex-col gap-3 grow max-md:mt-10">
                <div className="md:text-[24px] text-[1.8rem] font-[700] leading-[28px] text-[#8E7861]">
                  <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="flex gap-5 justify-between pl-3 text-base leading-6 text-justify border border-solid border-stone-700 text-neutral-400 max-md:pl-5 mt-6">
                  <div className="flex-auto my-auto">
                    <input
                      type="text"
                      placeholder="Your Email Address*"
                      className="text-[1.5rem] w-full outline-none bg-transparent"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79a813472fc45d4ac136fc45a2c3cf7c99888cab40162d161e368ffd7574686?"
                    className="shrink-0 w-12 aspect-[1.04]"
                  />
                </div>
                <div className="mt-8 md:text-[24px] text-[1.8rem] font-[700] leading-[28px] max-md:mr-0 text-[#8E7861]">
                  <h3>Follow US</h3>
                </div>
                <div className="flex gap-2 pr-20 mt-5 text-xs leading-3 text-center text-white uppercase whitespace-nowrap max-md:pr-5">
                  <div className="justify-center p-4 rounded-[50%] border border-solid border-white border-opacity-10 hover:bg-[#8E7861] transition-colors duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97031 6.75H5.2125V12H2.86875V6.75H0.946875V4.59375H2.86875V2.92969C2.86875 1.05469 3.99375 0 5.70469 0C6.525 0 7.39219 0.164062 7.39219 0.164062V2.01562H6.43125C5.49375 2.01562 5.2125 2.57812 5.2125 3.1875V4.59375H7.29844L6.97031 6.75Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="justify-center p-4 rounded-[50%] border border-solid border-white border-opacity-10  hover:bg-[#8E7861] transition-colors duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.86562 4.57812C6.87344 4.85938 7.36562 5.63281 7.36562 6.66406C7.36562 8.35156 5.95937 9.07812 4.43594 9.07812H0.428125V0.78125H4.34219C5.74844 0.78125 6.99062 1.17969 6.99062 2.84375C6.99062 3.66406 6.59219 4.20312 5.86562 4.57812ZM2.23281 2.1875V4.13281H4.08437C4.74062 4.13281 5.20937 3.85156 5.20937 3.14844C5.20937 2.375 4.62344 2.1875 3.96719 2.1875H2.23281ZM4.20156 7.67188C4.92812 7.67188 5.5375 7.41406 5.5375 6.57031C5.5375 5.72656 5.04531 5.375 4.225 5.375H2.23281V7.67188H4.20156ZM12.5922 2.02344H9.24062V1.20312H12.5922V2.02344ZM13.9281 6.17188C13.9281 6.26562 13.9047 6.38281 13.9047 6.47656H9.56875C9.56875 7.4375 10.0844 8 11.0453 8C11.5375 8 12.1937 7.74219 12.3578 7.22656H13.8109C13.3656 8.58594 12.4281 9.24219 10.9984 9.24219C9.1 9.24219 7.90469 7.95312 7.90469 6.07812C7.90469 4.27344 9.14687 2.89062 10.9984 2.89062C12.8734 2.89062 13.9281 4.39062 13.9281 6.17188ZM9.56875 5.42188H12.2641C12.1937 4.625 11.7719 4.15625 10.9281 4.15625C10.1547 4.15625 9.61562 4.64844 9.56875 5.42188Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="justify-center p-4 rounded-[50%] border border-solid border-white border-opacity-10  hover:bg-[#8E7861] transition-colors duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.15937 3.30469C7.63594 3.30469 8.85469 4.52344 8.85469 6C8.85469 7.5 7.63594 8.69531 6.15937 8.69531C4.65937 8.69531 3.46406 7.5 3.46406 6C3.46406 4.52344 4.65937 3.30469 6.15937 3.30469ZM6.15937 7.75781C7.12031 7.75781 7.89375 6.98438 7.89375 6C7.89375 5.03906 7.12031 4.26562 6.15937 4.26562C5.175 4.26562 4.40156 5.03906 4.40156 6C4.40156 6.98438 5.19844 7.75781 6.15937 7.75781ZM9.58125 3.21094C9.58125 3.5625 9.3 3.84375 8.94844 3.84375C8.59687 3.84375 8.31562 3.5625 8.31562 3.21094C8.31562 2.85938 8.59687 2.57812 8.94844 2.57812C9.3 2.57812 9.58125 2.85938 9.58125 3.21094ZM11.3625 3.84375C11.4094 4.71094 11.4094 7.3125 11.3625 8.17969C11.3156 9.02344 11.1281 9.75 10.5187 10.3828C9.90937 10.9922 9.15937 11.1797 8.31562 11.2266C7.44844 11.2734 4.84687 11.2734 3.97969 11.2266C3.13594 11.1797 2.40937 10.9922 1.77656 10.3828C1.16719 9.75 0.979687 9.02344 0.932812 8.17969C0.885937 7.3125 0.885937 4.71094 0.932812 3.84375C0.979687 3 1.16719 2.25 1.77656 1.64062C2.40937 1.03125 3.13594 0.84375 3.97969 0.796875C4.84687 0.75 7.44844 0.75 8.31562 0.796875C9.15937 0.84375 9.90937 1.03125 10.5187 1.64062C11.1281 2.25 11.3156 3 11.3625 3.84375ZM10.2375 9.09375C10.5187 8.41406 10.4484 6.77344 10.4484 6C10.4484 5.25 10.5187 3.60938 10.2375 2.90625C10.05 2.46094 9.69844 2.08594 9.25312 1.92188C8.55 1.64062 6.90937 1.71094 6.15937 1.71094C5.38594 1.71094 3.74531 1.64062 3.06562 1.92188C2.59687 2.10938 2.24531 2.46094 2.05781 2.90625C1.77656 3.60938 1.84687 5.25 1.84687 6C1.84687 6.77344 1.77656 8.41406 2.05781 9.09375C2.24531 9.5625 2.59687 9.91406 3.06562 10.1016C3.74531 10.3828 5.38594 10.3125 6.15937 10.3125C6.90937 10.3125 8.55 10.3828 9.25312 10.1016C9.69844 9.91406 10.0734 9.5625 10.2375 9.09375Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="justify-center p-4 rounded-[50%] border border-solid border-white border-opacity-10  hover:bg-[#8E7861] transition-colors duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9266 2.5625C10.9266 2.67969 10.9266 2.77344 10.9266 2.89062C10.9266 6.14844 8.46562 9.875 3.94219 9.875C2.53594 9.875 1.24687 9.47656 0.16875 8.77344C0.35625 8.79688 0.54375 8.82031 0.754687 8.82031C1.90312 8.82031 2.95781 8.42188 3.80156 7.76562C2.72344 7.74219 1.80937 7.03906 1.50469 6.05469C1.66875 6.07812 1.80937 6.10156 1.97344 6.10156C2.18437 6.10156 2.41875 6.05469 2.60625 6.00781C1.48125 5.77344 0.6375 4.78906 0.6375 3.59375V3.57031C0.965625 3.75781 1.36406 3.85156 1.7625 3.875C1.08281 3.42969 0.660937 2.67969 0.660937 1.83594C0.660937 1.36719 0.778125 0.945312 0.989062 0.59375C2.20781 2.07031 4.03594 3.05469 6.075 3.17188C6.02812 2.98438 6.00469 2.79688 6.00469 2.60938C6.00469 1.25 7.10625 0.148438 8.46562 0.148438C9.16875 0.148438 9.80156 0.429688 10.2703 0.921875C10.8094 0.804688 11.3484 0.59375 11.8172 0.3125C11.6297 0.898438 11.2547 1.36719 10.7391 1.67188C11.2312 1.625 11.7234 1.48438 12.1453 1.29688C11.8172 1.78906 11.3953 2.21094 10.9266 2.5625Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16" />
        <div className="flex gap-5 justify-between mt-10 text-xs leading-5 max-md:flex-wrap max-md:mt-10  max-md:mr-2.5 max-md:max-w-full ">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d39c014e943070322622bcd86f28622feddbd44fe8f90d727c57aedd727d36?"
              className="shrink-0 my-auto w-3 aspect-square"
            />
            <div className="flex-auto md:text-[1.5rem] text-[1.3rem]">
              <p>
                Design & Developed by{" "}
                <Link to="https://eazotel.com/" target="_blank">
                  Eazotel
                </Link>
              </p>
            </div>
            <div className="md:text-[1.5rem] text-[1.3rem]">
              <p>All Rights Reserved</p>
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <div>
              <Link to="/Privacy" className="text-[1.5rem]">
                Privacy Policy
              </Link>
            </div>
            <div className="flex-auto">
              <Link to="Terms" className="text-[1.5rem]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
