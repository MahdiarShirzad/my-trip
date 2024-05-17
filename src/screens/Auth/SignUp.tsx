import React from "react";
import Layout from "../../components/common/layout/Layout";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo-dark.png";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function SignUp({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Layout>
      <div className=" relative w-full h-[500x] max-lg:hidden">
        <div className="bg-[url('assets/img/breadcrumb/02.jpg')] contact-hero bg-no-repeat h-[500px]  absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1]  w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Sign up
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1320px] mx-auto my-20 max-lg:py-20">
        <div
          className={`max-w-[610px] ${
            darkMode ? "bg-slate-500" : "bg-white"
          } mx-auto py-5 rounded-xl`}
        >
          <img className=" w-[240px] mx-auto" src={logo} alt="" />
          <p
            className={`text-center mt-3 text-xl font-inter ${
              darkMode ? "text-gray-200" : "text-gray-600"
            }`}
          >
            Create your MyTrip account
          </p>
          <form className=" px-20 mt-8" action="">
            <label
              className={`text-lg ${
                darkMode ? "text-slate-800" : "text-slate-600"
              } font-inter`}
              htmlFor="name"
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
                type="email"
                title="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <label
              className={`text-lg ${
                darkMode ? "text-slate-800" : "text-slate-600"
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
            <label
              className={`text-lg ${
                darkMode ? "text-slate-800" : "text-slate-600"
              } font-inter`}
              htmlFor="email"
            >
              Password
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
                    d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
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
                type="password"
                title="Password"
                id="Password"
                placeholder="Your Password"
              />
            </div>
            <div className="flex items-center justify-between font-inter mt-4">
              <div className=" flex items-center gap-1 justify-between ">
                <input
                  className=" block text-lg w-4 h-4 cursor-pointer checked:accent-violet-500"
                  type="checkbox"
                  name="service"
                  id="service"
                  title="service"
                />
                <label
                  className={`block cursor-pointer ${
                    darkMode ? "text-gray-200" : "text-gray-600"
                  }`}
                  htmlFor="service"
                >
                  I agree with the Terms Of Service.
                </label>
              </div>
              <Link
                className={darkMode ? "text-violet-300" : "text-violet-500"}
                to="/login"
              >
                Already Sign in?
              </Link>
            </div>
            <button className=" flex items-center justify-center gap-1 bg-violet-500 text-white w-full mt-5 py-2 rounded-xl font-interSemiBold">
              <svg
                className=" w-[20px]"
                fill="#fff"
                viewBox="0 0 24 24"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"></path>
                </g>
              </svg>
              <p>Sign Up</p>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
