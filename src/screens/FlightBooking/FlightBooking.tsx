import React from "react";
import Layout from "../../components/common/layout/Layout";
import BookingPersonalInfo from "../../components/BookingPersonalInfo/BookingPersonalInfo";
import FlightBookingSummary from "./FlightBookingSummary";

type Props = {};

export default function FlightBooking({}: Props) {
  return (
    <Layout>
      <div className=" relative w-full h-[500x]">
        <div className="bg-[url('assets/img/breadcrumb/01.jpg')] bg-no-repeat h-[500px] bg-cover absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1] w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Flight Booking
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-8 my-20 max-w-[1320px] mx-auto">
        <BookingPersonalInfo />
        <FlightBookingSummary />
      </div>
    </Layout>
  );
}
