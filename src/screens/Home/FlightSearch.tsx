import { useState } from "react";
import FlightCities from "./FlightCities";
import FlightCalendar from "./FlightCalendar";
import FlightPassenger from "./FlightPassenger";

function FlightSearch() {
  const [flightType, setFlightType] = useState<string>("One Way");

  function handleClassChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFlightType(event.target.title);
  }

  return (
    <div className=" px-10 -mt-7 bg-white rounded-3xl h-72 py-10 ">
      <form className=" flex gap-10">
        <div className=" flex items-center gap-1 font-interSemiBold text-[#4f4b8b]">
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
        <div className=" flex items-center gap-1 font-interSemiBold text-[#4f4b8b]">
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
      <div className=" flex justify-between items-stretch gap-6 ">
        <FlightCities />
        <FlightCalendar type={flightType} />
        <FlightPassenger />
      </div>
    </div>
  );
}

export default FlightSearch;
