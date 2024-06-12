import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useUser } from "../Auth/useUser";
import FlightBookingCard from "../../components/FlightBookingCard/FlightBookingCard";

type Props = {};

export default function UserBookings({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const { user, isLoading } = useUser();

  const userBookingsFlights = user.user.user_metadata.bookingsFlight;
  const userBookingsHotels = user.user.user_metadata.bookingsHotel;

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-white"
      } rounded-lg font-inter px-10 py-4`}
    >
      <p className="text-2xl font-interSemiBold pb-3 border-b">My Bookings</p>
      <div className="mt-8 flex flex-col space-y-4">
        <div>
          {userBookingsFlights.map((flight) => (
            <FlightBookingCard data={flight} key={flight.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
