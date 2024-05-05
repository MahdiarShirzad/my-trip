import React from "react";
import HotelNameSearch from "./HotelNameSearch";
import HotelCalendar from "./HotelCalendar";
import HotelPassenger from "./HotelPassenger";

function HotelSearch() {
  return (
    <div className="  px-10 py-10  h-72 justify-between gap-8 flex -mt-7 bg-white rounded-3xl">
      <HotelNameSearch />
      <HotelCalendar />
      <HotelPassenger />
    </div>
  );
}

export default HotelSearch;
