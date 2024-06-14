import HotelNameSearch from "./HotelNameSearch";
import HotelCalendar from "./HotelCalendar";
import HotelPassenger from "./HotelPassenger";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

function HotelSearch() {
  const darkTheme: boolean = useSelector(
    (state: RootState) => state.theme.darkMode
  );

  return (
    <div
      className={`px-10 py-8  h-64 pb-14 max-lg:h-[600px] justify-between gap-8  flex max-lg:flex-col max-lg:mx-20 -mt-7 ${
        darkTheme ? `bg-slate-700` : `bg-white`
      }  rounded-3xl ${darkTheme ? "text-white" : "text-[#4f4b8b]"}`}
    >
      <HotelNameSearch />
      <HotelCalendar />
      <HotelPassenger />
    </div>
  );
}

export default HotelSearch;
