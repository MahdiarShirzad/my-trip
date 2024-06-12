import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export default function HotelBookingCard({ data }: any) {
  const { city, image, name, price } = data;

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-full flex justify-between ${
        darkMode ? "bg-slate-800" : "bg-gray-50"
      } mb-4 py-5 px-3 items-center rounded-xl gap-7 `}
    >
      <div className=" w-1/4">
        <img className=" w-full h-24 rounded-xl" src={image} alt="hotel" />
      </div>
      <div className=" w-1/4">{name}</div>
      <div className=" w-1/4">{city} </div>
      <div className=" w-1/4">{price}$</div>
    </div>
  );
}
