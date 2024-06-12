import * as yup from "yup";

import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { Field, Form, Formik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useUpdateUser } from "../../screens/UserPanel/useUpdateUser";

type Info = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

export default function BookingPersonalInfoHotel({ selectedHotel }: any) {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser();

  const initialValues: Info = {
    fullName: user?.user_metadata.fullName,
    email: user?.user_metadata.email,
    phone: user?.user_metadata.phone,
    address: user?.user_metadata.address,
  };

  const validation = yup.object().shape({});

  const onSubmit = async (values: any) => {
    const updates = {
      fullName: values.fullName,
      phone: values.phone,
      address: values.address,
      bookingsHotel: selectedHotel,
    };

    updateUser(updates);
  };

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
      <Formik
        onSubmit={onSubmit}
        validationSchema={validation}
        initialValues={initialValues}
      >
        <Form className=" flex justify-between flex-wrap" action="">
          <div className=" w-[48%] mt-5">
            <label
              className={`text-lg ${
                darkMode ? "text-gray-200" : "text-slate-800"
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
                className={`block w-full capitalize px-1 focus:outline-none font-inter ${
                  darkMode ? "text-gray-200" : "text-slate-800"
                } bg-transparent`}
                type="text"
                title="fullName"
                name="fullName"
                id="fullName"
                placeholder="Your First Name"
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
              <Field
                className={`block w-full  px-1 focus:outline-none font-inter ${
                  darkMode ? "text-gray-200" : "text-slate-800"
                } bg-transparent`}
                type="text"
                title="phone"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
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
              <Field
                className={`block w-full  px-1 focus:outline-none font-inter ${
                  darkMode ? "text-gray-200" : "text-slate-800"
                } bg-transparent`}
                type="text"
                title="address"
                name="address"
                id="address"
                placeholder="Your Address"
              />
            </div>
          </div>

          <button className=" bg-[#7167FF] flex font-inter  w-full mx-auto text-center justify-center items-center gap-1 py-2 rounded-lg text-white mt-8">
            {isUpdating ? (
              "Booking ...!"
            ) : (
              <>
                <p>Confirm Booking</p>
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
              </>
            )}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
