import React from "react";
import HotelFacilities from "./HotelFacilities";
import HotelStars from "./HotelStars";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function HotelFilter({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-slate-600 text-white" : "bg-white"
      } w-1/4 rounded-lg px-3 py-4`}
    >
      <HotelFacilities />
      <HotelStars />
    </div>
  );
}
