import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

type bookingType = {
  number: number;
  id: number;
  type: string;
  date: Date;
  price: number;
  status: string;
};

export default function UserBookings({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-10 py-4`}
    >
      <p className=" text-2xl font-interSemiBold pb-3 border-b">My Bookings</p>
      <div className=" mt-8 flex"></div>
    </div>
  );
}
