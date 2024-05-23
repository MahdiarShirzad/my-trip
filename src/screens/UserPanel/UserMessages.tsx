import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function UserMessages({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-10 py-4 h-96`}
    >
      <p className=" text-2xl font-interSemiBold pb-3 border-b">Messages</p>
      <div className=" mt-8 flex"></div>
    </div>
  );
}
