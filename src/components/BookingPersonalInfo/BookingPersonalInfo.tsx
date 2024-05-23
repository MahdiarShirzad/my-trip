import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function BookingPersonalInfo({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-3/5  px-10 py-6 rounded-xl ${
        darkMode ? "bg-slate-600" : "bg-white"
      }`}
    >
      <p
        className={`text-2xl my-4 ${
          darkMode ? "text-gray-200" : "text-slate-600"
        } font-interBold`}
      >
        Booking Personal Info
      </p>
      <form className=" flex justify-between flex-wrap" action="">
        <div className=" w-[48%]">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-800"
            } font-inter`}
            htmlFor="fname"
          >
            Full Name
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className=" w-[24px]"
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
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="text"
              title="fname"
              id="fname"
              placeholder="Your First Name"
            />
          </div>
        </div>
        <div className=" w-[48%]">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-600"
            } font-inter`}
            htmlFor="lname"
          >
            Email Address
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className=" w-[22px]"
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
                  fill="#aaa"
                ></path>{" "}
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="lname"
              title="lname"
              id="lname"
              placeholder="Your Last Name"
            />
          </div>
        </div>
        <div className="w-[48%] mt-5">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-600"
            } font-inter`}
            htmlFor="email"
          >
            Email Address
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className=" w-[22px]"
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
                  fill="#aaa"
                ></path>{" "}
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="email"
              title="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="w-[48%] mt-5">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-600"
            } font-inter`}
            htmlFor="phone"
          >
            Phone
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className=" w-[23px]"
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
                  d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                  stroke="#aaa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="text"
              title="phone"
              id="phone"
              placeholder="Your Phone Number"
            />
          </div>
        </div>
        <div className="w-[48%] mt-5">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-600"
            } font-inter`}
            htmlFor="Country"
          >
            Country
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className="w-[23px]"
              viewBox="0 0 25 25"
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
                  d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z"
                  stroke="#aaa"
                  stroke-width="1.2"
                ></path>{" "}
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="text"
              title="Country"
              id="Country"
              placeholder="Your Country"
            />
          </div>
        </div>
        <div className="w-[48%] mt-5">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-600"
            } font-inter`}
            htmlFor="city"
          >
            Country
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className=" w-[23px]"
              fill="#aaa"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M10 4L10 20L2.9941406 20L3.1464844 46L17.046875 46L19.046875 46L33 46L47 46L47 8L31 8L31 9L31 28L25.996094 28L25.996094 4.0078125L10 4 z M 12 6L23.996094 6.0078125L23.996094 28L19.013672 28L18.998047 20L18 20L12 20L12 6 z M 15 8L15 10L17 10L17 8L15 8 z M 19.039062 8L19.039062 10L21 10L21 8L19.039062 8 z M 33 10L45 10L45 44L39.960938 44L39.960938 40L38 40L38 44L33 44L33 28L33 10 z M 15 12L15 14L17 14L17 12L15 12 z M 19 12L19 14L21 14L21 12L19 12 z M 36 12.003906L36 14L38 14L38 12.003906L36 12.003906 z M 40.019531 12.007812L40.019531 14.021484L41.980469 14.021484L41.980469 12.007812L40.019531 12.007812 z M 36 16.015625L36 18L38 18L38 16.015625L36 16.015625 z M 40.019531 16.015625L40.019531 18L41.980469 18L41.980469 16.015625L40.019531 16.015625 z M 36 20L36 22L38 22L38 20L36 20 z M 40 20L40 22L41.980469 22L41.980469 20L40 20 z M 5.0058594 22L17.001953 22L17.013672 28L16.998047 28L17.041016 44L11.980469 44L11.980469 40L10.019531 40L10.019531 44L5.1347656 44L5.0058594 22 z M 8 24L8 26.015625L10.039062 26.015625L10.039062 24L8 24 z M 12.039062 24L12.039062 26.015625L14 26.015625L14 24L12.039062 24 z M 36 24.007812L36 25.998047L38 25.998047L38 24.007812L36 24.007812 z M 40 24.007812L40 25.998047L41.980469 25.998047L41.980469 24.007812L40 24.007812 z M 8 27.984375L8 30L10.039062 30L10.039062 27.984375L8 27.984375 z M 12.039062 27.984375L12.039062 30L14 30L14 27.984375L12.039062 27.984375 z M 36 27.992188L36 30.007812L38 30.007812L38 27.992188L36 27.992188 z M 40.019531 27.992188L40.019531 30.007812L41.980469 30.007812L41.980469 27.992188L40.019531 27.992188 z M 19.017578 30L31 30L31 44L26 44L26 40L24 40L24 44L19.042969 44L19.017578 30 z M 8 32L8 34.015625L10.039062 34.015625L10.039062 32L8 32 z M 12.039062 32L12.039062 34.015625L14 34.015625L14 32L12.039062 32 z M 22 32L22 34.015625L24 34.015625L24 32L22 32 z M 26 32L26 34.015625L28 34.015625L28 32L26 32 z M 36 32L36 34.015625L38 34.015625L38 32L36 32 z M 40.019531 32L40.019531 34.015625L41.980469 34.015625L41.980469 32L40.019531 32 z M 22 35.984375L22 38L24 38L24 35.984375L22 35.984375 z M 26 35.984375L26 38L28 38L28 35.984375L26 35.984375 z M 36 35.984375L36 38L38 38L38 35.984375L36 35.984375 z M 40.019531 35.984375L40.019531 38L41.980469 38L41.980469 35.984375L40.019531 35.984375 z"></path>
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="text"
              title="city"
              id="city"
              placeholder="Your City"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <label
            className={`text-lg ${
              darkMode ? "text-gray-200" : "text-slate-600"
            } font-inter`}
            htmlFor="address"
          >
            Address
          </label>
          <div className=" flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
            <svg
              className=" w-[23px]"
              fill="#aaa"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335zM8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5z"></path>
              </g>
            </svg>
            <input
              className={`block w-full  px-1 focus:outline-none font-inter ${
                darkMode ? "text-gray-200" : "text-slate-800"
              } bg-transparent`}
              type="text"
              title="address"
              id="address"
              placeholder="Your Address"
            />
          </div>
        </div>

        <button className=" bg-[#7167FF] flex font-inter  w-full mx-auto text-center justify-center items-center gap-1 py-2 rounded-lg text-white mt-8">
          Confirm Booking
          <svg
            className=" w-[19px]"
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
                d="M15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289C13.9024 5.68342 13.9024 6.31658 14.2929 6.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L14.2929 17.2929C13.9024 17.6834 13.9024 18.3166 14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.7071 5.29289Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
