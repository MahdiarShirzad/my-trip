import { useState } from "react";
import FlightCities from "./FlightCities";
import FlightCalendar from "./FlightCalendar";
import FlightPassenger from "./FlightPassenger";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

function FlightSearch() {
  const [flightType, setFlightType] = useState<string>("One Way");

  function handleClassChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFlightType(event.target.title);
  }

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`px-10  -mt-7 ${
        darkTheme ? `bg-slate-700` : `bg-white`
      } rounded-3xl h-72 py-10 ${darkTheme ? `text-white` : `text-[#4f4b8b]`}`}
    >
      <form className=" flex gap-10">
        <div className=" flex items-center gap-1 font-interSemiBold ">
          <input
            className=" checked:accent-[#4f4b8b] w-4 h-4"
            type="radio"
            name=""
            title="One Way"
            id="OneWay"
            checked={flightType === "One Way"}
            onChange={handleClassChange}
          />
          <label className=" cursor-pointer" htmlFor="OneWay">
            One Way
          </label>
        </div>
        <div className=" flex items-center gap-1 font-interSemiBold">
          <input
            className=" checked:accent-[#4f4b8b] w-4 h-4"
            type="radio"
            name=""
            title="Round Way"
            id="RoundWay"
            checked={flightType === "Round Way"}
            onChange={handleClassChange}
          />
          <label className=" cursor-pointer" htmlFor="RoundWay">
            Round Way
          </label>
        </div>
      </form>
      <div
        className={` flex justify-between items-stretch gap-6 ${
          darkTheme ? `text-white` : `text-[#4f4b8b]`
        } `}
      >
        <FlightCities />
        <FlightCalendar type={flightType} />
        <FlightPassenger />
      </div>
    </div>
  );
}

export default FlightSearch;
