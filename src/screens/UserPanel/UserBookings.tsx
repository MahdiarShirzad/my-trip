import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import FlightBookingCard from "../../components/FlightBookingCard/FlightBookingCard";
import HotelBookingCard from "../../components/HotelBookingCard/HotelBookingCard";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

type Props = {};

export default function UserBookings({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const userBookingsFlights = user?.user_metadata.bookingsFlight;
  const userBookingsHotels = user?.user_metadata.bookingsHotel;

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-10 py-4`}
    >
      <p className="text-2xl font-interSemiBold pb-3 border-b">My Bookings</p>
      <div className="mt-8 flex flex-col space-y-4">
        {userBookingsFlights && userBookingsFlights.length > 0 && (
          <div className=" flex items-center justify-between px-3 font-semibold mb-2 border-b pb-3 max-md:text-xs">
            <p className=" w-[12%]">Airline</p>
            <p className=" w-[12%]">Class</p>
            <p className=" w-[12%]">Way Type</p>
            <p className=" w-[12%]">Journey Date</p>
            <p className=" w-[12%]">Return Date</p>
            <p className=" w-[12%]">Price</p>
            <p className=" w-[12%]">Journey City</p>
            <p className=" w-[12%]">Return City</p>
          </div>
        )}
        <div>
          {userBookingsFlights && userBookingsFlights.length > 0
            ? userBookingsFlights.map((flight: any) => (
                <FlightBookingCard data={flight} key={flight.id} />
              ))
            : null}
        </div>
        <div>
          {userBookingsHotels && userBookingsHotels.length > 0 && (
            <div className="flex items-center justify-between px-3 font-semibold  border-b pb-3 mb-4">
              <p className=" w-1/4">Image</p>
              <p className=" w-1/4">Name</p>
              <p className=" w-1/4">City</p>
              <p className=" w-1/4">Price</p>
            </div>
          )}
          {userBookingsHotels && userBookingsHotels.length > 0
            ? userBookingsHotels.map((hotel: any) => (
                <HotelBookingCard data={hotel} key={hotel.id} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
