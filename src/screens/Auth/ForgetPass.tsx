import Layout from "../../components/common/layout/Layout";
import logo from "../../assets/img/logo/logo-dark.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function ForgetPass({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Layout>
      <div className=" relative w-full h-[500x] max-lg:hidden">
        <div className="bg-[url('assets/img/breadcrumb/02.jpg')] contact-hero bg-no-repeat h-[500px]  absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1]  w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Forgot Password
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
            Login with your MyTrip account
          </p>
          <form className=" px-20 mt-8" action="">
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
                className={`block w-full  px-1 focus:outline-none font-inter bg-transparent ${
                  darkMode ? "text-gray-200" : "text-slate-800"
                } bg-transparent`}
                type="email"
                title="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <button className=" flex items-center justify-center gap-1 bg-violet-500 text-white w-full mt-5 py-2 rounded-xl font-interSemiBold">
              <svg
                className=" w-5"
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
                    d="M21.0667 5C21.6586 5.95805 22 7.08604 22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.272 15.465 11.8598 15.465 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876C6.22633 20.6364 5.952 20.9096 5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C16.4995 2 17.282 2.15509 18 2.43738"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M17.8851 8.29353C17.8851 9.50601 16.8982 10.4889 15.6807 10.4889C14.4633 10.4889 13.4763 9.50601 13.4763 8.29353C13.4763 7.08105 14.4633 6.09814 15.6807 6.09814C16.8982 6.09814 17.8851 7.08105 17.8851 8.29353Z"
                    stroke="#fff"
                    stroke-width="1.5"
                  ></path>{" "}
                </g>
              </svg>
              <p>Send reset Link</p>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
