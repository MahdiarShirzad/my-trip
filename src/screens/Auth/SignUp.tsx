import * as yup from "yup";

import Layout from "../../components/common/layout/Layout";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo-dark.png";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSignUp } from "./useSignUp";
import { useState } from "react";

type Values = {
  email: string;
  fullName: string;
  password: string;
};

export default function SignUp() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const { signUp, isPending } = useSignUp();

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const initialValues: Values = {
    email: "",
    fullName: "",
    password: "",
  };

  const validation = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Email format is not correct"),
    fullName: yup.string().required("Please enter your full name"),
    password: yup
      .string()
      .min(8, "Password should at least be 8 characters")
      .required("Please enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "Password should contain number and letter"
      ),
  });

  const handleSubmit = (values: Values) => {
    const { email, password, fullName } = values;

    if (!email || !password || !fullName) {
      return;
    }

    signUp({ email, password, fullName });
  };

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
      <div className=" max-w-[1320px] mx-auto my-20 max-lg:py-40 max-lg:mt-0">
        <div
          className={`max-w-[610px] px-20 ${
            darkMode ? "bg-slate-800" : "bg-white"
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
          <Formik
            initialValues={initialValues}
            className=" px-20 mt-8"
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            <Form>
              <label
                className={`text-lg block mt-4 ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="fullName"
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
                <Field
                  className={`block w-full  px-1 focus:outline-none font-inter bg-transparent ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  // type=""
                  title="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your Name"
                />
              </div>
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm mt-1 "
              />
              <label
                className={`text-lg mt-4 block ${
                  darkMode ? "text-slate-200" : "text-slate-600"
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
                <Field
                  className={`block w-full  px-1 focus:outline-none font-inter ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type="email"
                  title="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <label
                className={`text-lg mt-4 block ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="email"
              >
                Password
              </label>
              <div className=" flex items-center relative gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
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
                <Field
                  className={`block w-full  px-1 focus:outline-none font-inter ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type={passwordIsVisible ? "text" : "password"}
                  title="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  disabled={isPending}
                />
                <div
                  onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                  className="absolute right-3 cursor-pointer"
                >
                  {passwordIsVisible ? (
                    <svg
                      className=" w-6"
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
                          d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                          stroke="#aaa"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                          stroke="#aaa"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className=" w-6"
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
                          d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                          stroke="#aaa"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  )}
                </div>
              </div>
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-500 text-sm mt-1"
              />
              <div className="flex items-center justify-between font-inter mt-4">
                <Link
                  className={darkMode ? "text-violet-300" : "text-violet-500"}
                  to="/login"
                >
                  Already Sign in?
                </Link>
              </div>
              <button
                type="submit"
                className=" flex items-center justify-center gap-1 bg-violet-500 text-white w-full mt-5 py-2 rounded-xl font-interSemiBold"
              >
                {!isPending && (
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
                )}
                <p>{isPending ? "Please Wait ...!" : "Sign Up"}</p>
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
