import React from "react";
import Layout from "../../components/common/layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import Map from "./Map";

type Props = {};

export default function Contact({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Layout>
      <div className=" relative w-full h-[500x]">
        <div className="bg-[url('assets/img/breadcrumb/02.jpg')] contact-hero bg-no-repeat h-[500px]  absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1]  w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Contact Us
            </p>
            <p className=" text-white text-center font-inter text-xl mt-4">
              Call us 24/7
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1290px]  mx-auto flex max-lg:flex-wrap items-start justify-between gap-14 my-20">
        <div
          className={`${
            darkMode ? "bg-slate-700" : "bg-white"
          } w-1/3 max-lg:w-3/4 max-lg:mx-auto py-4 rounded-xl`}
        >
          <div
            className={`w-full px-5 border-l-2 border-violet-500 ${
              darkMode ? "text-gray-200" : "text-slate-800"
            }`}
          >
            <div className=" flex justify- gap-3">
              <div className=" p-2 bg-violet-500 rounded-full">
                <svg
                  className=" w-[35px] "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="  font-inter">
                <p className=" font-interSemiBold text-lg">Office Address</p>
                <p>Mazandaran , Sari</p>
              </div>
            </div>
            <div className=" flex justify- gap-3 mt-8">
              <div className=" p-2 bg-violet-500 rounded-full">
                <svg
                  className=" w-[35px] "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
              <div className="  font-inter">
                <p className=" font-interSemiBold text-lg">Call Us</p>
                <p>+98 938 449 4884</p>
              </div>
            </div>
            <div className=" flex justify- gap-3 mt-8">
              <div className=" p-3 bg-violet-600 rounded-full">
                <svg
                  className=" w-[27px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="  font-inter">
                <p className=" font-interSemiBold text-lg">Email Us</p>
                <p>mahdiar55582@gmail.com</p>
              </div>
            </div>
            <div className=" flex justify- gap-3 mt-8">
              <div className=" p-3 bg-violet-600 rounded-full">
                <svg
                  className=" w-[27px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 7V12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="  font-inter">
                <p className=" font-interSemiBold text-lg">Open Time</p>
                <p>Mon - Sat (10.00AM - 05.30PM)</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-slate-700" : "bg-white"
          } w-2/3 max-lg:mx-auto max-lg:w-3/4 font-inter px-7 py-10 rounded-xl`}
        >
          <p
            className={`text-2xl font-interBold ${
              darkMode ? "text-gray-200" : "text-slate-600"
            }`}
          >
            Get In Touch
          </p>
          <p className={`mt-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page randomized words which don't look
            even slightly when looking at its layout.
          </p>
          <form className=" flex flex-wrap justify-between mt-6" action="">
            <input
              className={`block focus:outline-none px-3 py-3 border-slate-200 border-2 rounded-xl w-[48%] max-lg:w-full ${
                darkMode && "text-gray-200 bg-slate-800"
              } `}
              title="name"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
            <input
              className={`block focus:outline-none px-3 py-3 border-slate-200 border-2 rounded-xl w-[48%] max-lg:w-full max-lg:mt-6 ${
                darkMode && "text-gray-200 bg-slate-800"
              } `}
              title="email"
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            />
            <input
              className={`block focus:outline-none px-3 py-3 border-slate-200 border-2 rounded-xl w-full mt-6 ${
                darkMode && "text-gray-200 bg-slate-800"
              } `}
              title="subject"
              type="text"
              name=""
              id=""
              placeholder="Your Subject"
            />
            <textarea
              className={`block focus:outline-none px-3 py-3 border-slate-200 border-2 rounded-xl w-full mt-6 h-40 ${
                darkMode && "text-gray-200 bg-slate-800"
              } `}
              title="message"
              name=""
              id=""
              placeholder="Write Your Message"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-600 mt-10 text-white font-interBold text-sm px-5 py-4 rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Map />
    </Layout>
  );
}
