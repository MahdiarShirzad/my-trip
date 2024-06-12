import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

type Props = {};

export default function UserProfile({}: Props) {
  const { data: userQuery } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  console.log(userQuery);

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  function formatISODate(isoDate: string): string {
    const date = new Date(isoDate);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    return date.toLocaleString("en-US", options);
  }

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
          {userQuery?.user_metadata.fullName}
        </span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Email:</span>
        <span className=" w-1/2"> {userQuery?.user_metadata.email}</span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Phone:</span>
        <span className=" w-1/2">
          {userQuery?.user_metadata.phone === ""
            ? "no phone number right now"
            : userQuery?.user_metadata.phone}
        </span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Address:</span>
        <span className=" w-1/2">{userQuery?.user_metadata.address}</span>
      </div>
      <div className="flex  w-full justify-between items-center mt-5">
        <span className=" w-1/2 font-interSemiBold">Join Date:</span>
        <span className=" w-1/2">{formatISODate(userQuery.created_at)}</span>
      </div>
    </div>
  );
}
