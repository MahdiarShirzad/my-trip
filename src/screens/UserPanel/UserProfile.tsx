import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function UserProfile({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-10 py-4`}
    >
      <p className=" text-2xl font-interSemiBold pb-3 border-b">Profile Info</p>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Full Name:</span>
        <span className=" w-1/2 capitalize">
          {user.user.user_metadata.fullName}
        </span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Email:</span>
        <span className=" w-1/2"> {user.user.user_metadata.email}</span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Phone::</span>
        <span className=" w-1/2">+98 938 449 4884</span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Address:</span>
        <span className=" w-1/2">Iran, Mazandaran, Sari</span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Join Date:</span>
        <span className=" w-1/2">{user.user.created_at}</span>
      </div>
    </div>
  );
}
