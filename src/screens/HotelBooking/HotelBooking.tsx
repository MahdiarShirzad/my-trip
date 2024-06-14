import Layout from "../../components/common/layout/Layout";

import BookingSummary from "./BookingSummary";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../services/apiHotels";
import { useParams } from "react-router-dom";
import BookingPersonalInfoHotel from "../../components/BookingPersonalInfoHotel/BookingPersonalInfoHotel";

type Props = {};

export default function HotelBooking({}: Props) {
  const { data: hotels } = useQuery({
    queryKey: ["hotel"],
    queryFn: getHotels,
  });

  const { id } = useParams();
  const selectedHotel = hotels?.find((hotel) => hotel.id == id);

  return (
    <Layout>
      <div className=" relative w-full h-[500x]">
        <div className="bg-[url('assets/img/breadcrumb/05.jpg')] bg-no-repeat h-[500px] bg-cover absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1] w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Hotel Booking
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-8 my-20 max-lg:flex-wrap max-w-[1320px] mx-auto">
        <BookingSummary selectedHotel={selectedHotel} />
        <BookingPersonalInfoHotel selectedHotel={selectedHotel} />
      </div>
    </Layout>
  );
}
