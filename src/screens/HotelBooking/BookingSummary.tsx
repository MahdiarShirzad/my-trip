import { useSelector } from "react-redux";
import hotelImg from "../../assets/img/hotel/03.jpg";
import { RootState } from "../../features/store";
type Props = {
  adultsCapacity: number;
  childrenCapacity: number;
  city: string;
  created_at: string | Date;
  description: string;
  id: number;
  image: any;
  infantCapacity: number;
  name: string;
  price: string | number;
};

export default function BookingSummary({
  selectedHotel,
}: {
  selectedHotel: Props;
}) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-2/5 px-10 py-6 rounded-xl ${
        darkMode ? "bg-slate-600 text-gray-200" : "text-slate-600 bg-white"
      }`}
    >
      <p className=" text-2xl my-4  font-interBold">Booking Summary</p>
      <img className=" rounded-xl" src={hotelImg} alt="" />
      <h3 className=" my-3 font-interBold  text-xl">
        Western Grant Park Hotel
      </h3>
      <div>
        <p className="text-lg font-interBold  pb-2 border-b">Order Info</p>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Check In:</span>
          <span>20 Aug 2022 at 10:10 AM</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Check Out:</span>
          <span>20 Aug 2022 at 10:10 AM</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter">
          <span className=" font-interBold">Room Type:</span>
          <span>Superior Double</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Per Night Price:</span>
          <p className=" flex gap-1">
            <span>$</span>
            <span className=" font-interSemiBold">{selectedHotel.price}</span>
          </p>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Passengers:</span>
          <span>4</span>
        </div>
        <div className=" flex justify-between items-center my-3 font-inter ">
          <span className=" font-interBold">Stay:</span>
          <span>3 Nights</span>
        </div>
      </div>
      <div>
        <p className=" text-lg font-interBold  pb-2 border-b mt-8">
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
        <div className=" flex justify-between items-center my-3 font-inter ">
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
