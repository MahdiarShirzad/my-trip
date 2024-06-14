import Layout from "../../components/common/layout/Layout";
// import BookingPersonalInfo from "../../components/BookingPersonalInfoHotel/BookingPersonalInfo";
import FlightBookingSummary from "./FlightBookingSummary";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFlights } from "../../services/apiFlights";
import BookingPersonalInfoFlight from "../../components/BookingPersonalInfoFlight/BookingPersonalInfoFlight";

type Props = {};

export default function FlightBooking({}: Props) {
  const { data: flights } = useQuery({
    queryKey: ["flight"],
    queryFn: getFlights,
  });

  const { id } = useParams();
  const selectedFlight = flights?.find((flight) => flight.id == id);

  console.log(selectedFlight);

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
      <div className="flex items-start gap-8 my-20 max-lg:flex-wrap-reverse max-w-[1320px] mx-auto">
        <BookingPersonalInfoFlight selectedFlight={selectedFlight} />
        <FlightBookingSummary selectedFlight={selectedFlight} />
      </div>
    </Layout>
  );
}
