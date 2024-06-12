import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export default function FlightBookingCard({ data }: any) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const {
    airline,
    class: flightClass,
    journey,
    price,
    journeyCity,
    returnCity,
    roundWay,
    return: returnDate,
  } = data;

  return (
    <div
      className={`w-full flex justify-between ${
        darkMode ? "bg-slate-800" : "bg-gray-50"
      } px-4 py-5 mb-4 rounded-xl `}
    >
      <p className="w-[12%]">{airline}</p>
      <p className="w-[12%]">{flightClass}</p>
      <p className="w-[12%]">{journey}</p>
      <p className="w-[12%]">{returnDate}</p>
      <p className="w-[12%]">{roundWay ? "Round Way" : "One Way"}</p>
      <p className="w-[12%]">{price}$</p>
      <p className="w-[12%]">{journeyCity}</p>
      <p className="w-[12%]">{returnCity}</p>
    </div>
  );
}
