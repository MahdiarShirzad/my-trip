import * as yup from "yup";

import Layout from "../../components/common/layout/Layout";
import logo from "../../assets/img/logo/logo-dark.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useLogin } from "./useLogin";

type Values = {
  email: string;
  password: string;
};

export default function Login() {
  const { login, isPending } = useLogin();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const initialValues: Values = {
    email: "",
    password: "mahdiar0987",
  };

  const validation = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Email format is not correct"),
    password: yup
      .string()
      .min(8, "Password should at 8 characters")
      .required("Please enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "Password should contain number and letter"
      ),
  });

  const handleSubmit = (values: Values) => {
    const { email, password } = values;

    if (!email || !password) {
      return;
    }

    login({ email, password });
  };

  return (
    <Layout>
      <div className=" relative w-full h-[500x] max-lg:hidden">
        <div className="bg-[url('assets/img/breadcrumb/02.jpg')] contact-hero bg-no-repeat h-[500px]  absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1]  w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Login
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1320px] mx-auto my-20 max-lg:py-20">
        <div
          className={`max-w-[610px] ${
            darkMode ? "bg-slate-800" : "bg-white"
          } mx-auto py-5 rounded-xl`}
        >
          <img className=" w-[240px] mx-auto" src={logo} alt="" />
          <p
            className={`text-center mt-3 text-xl font-inter ${
              darkMode ? "text-gray-200" : "text-gray-600"
            }`}
          >
            Login with your MyTrip account
          </p>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={validation}
            initialValues={initialValues}
            className=" px-20 mt-8"
          >
            <Form className=" px-20 mt-8" action="">
              <label
                className={`text-lg ${
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
                  className={`block w-full  px-1 focus:outline-none font-inter bg-transparent ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type="email"
                  name="email"
                  title="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1 "
              />
              <label
                className={`text-lg block mt-4 ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="password"
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
                <div className=" flex items-center gap-1 justify-between ">
                  <input
                    className=" block text-lg w-4 h-4 cursor-pointer checked:accent-violet-500 bg-transparent"
                    type="checkbox"
                    name="remember"
                    id="remember"
                    title="remember"
                  />
                  <label
                    className={`block cursor-pointer ${
                      darkMode ? "text-gray-200" : "text-gray-600"
                    }`}
                    htmlFor="remember"
                  >
                    Remember Me
                  </label>
                </div>

                <Link
                  className={darkMode ? "text-violet-300" : "text-violet-500"}
                  to="/forgotpass"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className=" flex items-center justify-center gap-1 bg-violet-500 text-white w-full mt-5 py-2 rounded-xl font-interSemiBold"
              >
                {isPending ? (
                  <p>Loading ...</p>
                ) : (
                  <>
                    <svg
                      className=" w-[20px]"
                      viewBox="0 0 15 15"
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
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                    <p>Login</p>
                  </>
                )}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
