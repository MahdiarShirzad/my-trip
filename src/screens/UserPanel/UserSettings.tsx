import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { Field, Form, Formik } from "formik";
import { useUpdateUser } from "./useUpdateUser";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

type Value = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

export default function UserSettings() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const initialValues: Value = {
    fullName: user?.user_metadata.fullName,
    email: user?.user_metadata.email,
    phone: user?.user_metadata.phone || "",
    address: user?.user_metadata.address || "",
  };

  const handleSubmit = (values: Value) => {
    const updates = {
      fullName: values.fullName,
      phone: values.phone,
      address: values.address,
    };

    updateUser(updates);
  };

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-10 py-4`}
    >
      <p className="text-2xl font-interSemiBold pb-3 border-b">
        Update Profile Info
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="flex justify-between flex-wrap mt-5">
            <div className="w-[48%]">
              <label
                className={`text-lg ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="fullName"
              >
                Full Name
              </label>
              <div className="flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
                <Field
                  className={`block w-full px-1 focus:outline-none font-inter capitalize ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Your Full Name"
                />
              </div>
            </div>

            <div className="w-[48%]">
              <label
                className={`text-lg ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
                <Field
                  className={`block w-full px-1 focus:outline-none font-inter ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  disabled
                />
              </div>
            </div>

            <div className="w-[48%] mt-5">
              <label
                className={`text-lg ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
                <Field
                  className={`block w-full px-1 focus:outline-none font-inter ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>

            <div className="w-full mt-5">
              <label
                className={`text-lg ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                } font-inter`}
                htmlFor="address"
              >
                Address
              </label>
              <div className="flex items-center gap-3 border-2 rounded-lg px-4 py-3 mt-2 mx-1">
                <Field
                  className={`block w-full px-1 focus:outline-none font-inter ${
                    darkMode ? "text-gray-200" : "text-slate-800"
                  } bg-transparent`}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#7167FF] flex font-inter w-44 px-2 text-center justify-center items-center gap-1 py-3 rounded-lg text-white mt-8"
              disabled={isSubmitting || isUpdating}
            >
              {isSubmitting || isUpdating
                ? "Updating..."
                : !isSubmitting || !isUpdating
                ? "Update Profile Info"
                : ""}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
