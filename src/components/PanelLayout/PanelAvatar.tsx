import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { Formik, Field, Form } from "formik";
import { useUpdateUser } from "../../screens/UserPanel/useUpdateUser.js";
import { useState, useEffect } from "react";
import supabase, { supabaseUrl } from "../../services/supabase";
import spinner from "../../assets/img/spinner.gif";
import toast from "react-hot-toast";

type Props = {};

export default function PanelAvatar({}: Props) {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const [avatar, setAvatar] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { mutate: updateUser } = useUpdateUser();

  useEffect(() => {
    if (user) {
      const storedAvatar = localStorage.getItem(`avatarUrl-${user.id}`);
      if (storedAvatar) {
        setAvatar(storedAvatar);
      } else if (user.user_metadata.avatar) {
        setAvatar(user.user_metadata.avatar);
      }
    }
  }, [user]);

  const handleFileUpload = async (file: File) => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    setIsUploading(true);

    const fileName = `avatar-${user?.id}-${Math.random()}`;
    const { error } = await supabase.storage
      .from("avatars")
      .upload(`images/${fileName}`, file);

    if (error) {
      console.log("Error uploading file: ", error.message);
      setIsUploading(false);
      return;
    }

    const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/images/${fileName}`;

    const updates: any = {
      avatar: avatarUrl,
    };

    updateUser(updates);
    setAvatar(avatarUrl);
    localStorage.setItem(`avatarUrl-${user?.id}`, avatarUrl);
    setIsUploading(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <div className="relative w-28 h-28 max-xl:w-16 max-xl:h-16 mx-auto mt-2">
        <div className="relative w-full">
          {isUploading ? (
            <img
              className="absolute w-12 h-12 top-8 right-8"
              src={spinner}
              alt="Uploading..."
            />
          ) : avatar ? (
            <img className="w-full rounded-full" src={avatar} alt="Avatar" />
          ) : (
            <svg
              className="w-30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx="12"
                  cy="9"
                  r="3"
                  stroke="#ddd"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                  stroke="#ddd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="#ddd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
          )}
        </div>
        <Formik onSubmit={() => {}} initialValues={{ avatar: null }}>
          <Form>
            <label
              htmlFor="avatar"
              className="absolute bg-[#7167FF] p-1 rounded-full right-1 cursor-pointer -bottom-3"
            >
              <svg
                className="w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </label>
            <Field
              id="avatar"
              name="avatar"
              type="file"
              className="hidden"
              onChange={(event: any) => {
                const file = event.currentTarget.files[0];
                handleFileUpload(file);
              }}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
