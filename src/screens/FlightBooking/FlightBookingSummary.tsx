import React from "react";

import hotelImg from "../../assets/img/flight/04.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function FlightBookingSummary({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-2/5 px-10 py-6 rounded-xl ${
        darkMode ? "bg-slate-600 text-gray-200" : "text-slate-600 bg-white"
      }`}
    >
      <p className=" text-2xl my-4  font-interBold">Booking Summary</p>
      <img className=" rounded-xl" src={hotelImg} alt="" />
      <h3 className=" my-3 font-interBold  text-xl">New York - Los Angeles</h3>
      <div>
        <p className="text-lg font-interBold pb-2 border-b">Order Info</p>
        <div className=" flex justify-between items-center my-3 font-inter">
          <span className=" font-interBold">Take Off:</span>
          <span>New York</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Landing:</span>
          <span>Los Angeles</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Journey Date:</span>
          <span>20 Aug 2022 at 10:10 AM</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Airline:</span>
          <span>Delta</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Flight Type:</span>
          <span>One Way</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Flight Class:</span>
          <span>Economy</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Passengers:</span>
          <span>3</span>
        </div>
      </div>
      <div>
        <p className=" text-lg font-interBold pb-2 border-b mt-8">
          Booking Payment
        </p>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Sub Total:</span>
          <span>$50,540.00</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Discount:</span>
          <span>$600.00</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter t">
          <span className=" font-interBold">Taxes:</span>
          <span>$560.00</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">You Pay:</span>
          <span className="text-red-400 font-interBold">$51,543.00</span>
        </div>
      </div>
    </div>
  );
}
