import { RootState } from "../../features/store";
import { useSelector } from "react-redux";

type Props = {};

export default function UserWishList({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-7 py-4`}
    >
      <p className=" text-2xl font-interSemiBold pb-3 border-b">My Wish ist</p>
      <div className=" mt-8 flex flex-wrap justify-between "></div>
    </div>
  );
}
