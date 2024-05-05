import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HotelCalendar() {
  const curDate: Date = new Date();
  const [journeyDate, setJourneyDate] = useState<Date>(curDate);
  const [returnDate, setReturnDate] = useState<Date>(new Date());

  const formattedDate = `${
    journeyDate.getMonth() + 1
  }/${journeyDate.getDate()}/${journeyDate.getFullYear()}`;

  // const returnDate = new Date(journeyDate);
  returnDate.setMonth(returnDate.getMonth() + 1);

  const formattedReturnDate = `${returnDate.getMonth()}/${
    returnDate.getDate() + 1
  }/${returnDate.getFullYear()}`;

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const journeyDayIndex = journeyDate.getDay();
  const returnDayIndex = returnDate.getDay();

  return (
    <div className=" w-1/3 bg-[#7167FF26] font-inter text-[#4f4b8b] rounded-2xl px-4 py-5  h-full">
      <div className="flex justify-between items-start">
        <div>
          <p className=" text-lg font-interSemiBold">Check In</p>
          <DatePicker
            className="custom-datepicker-journey mt-6 font-interBold text-xl"
            selected={journeyDate}
            onChange={(date: Date) => setJourneyDate(date)}
          />
          <p className=" mt-4">{weekDays[journeyDayIndex]}</p>
        </div>
        <div>
          <p className=" text-lg font-interSemiBold">Check Out</p>
          <DatePicker
            className="custom-datepicker-return mt-6 font-interBold text-xl"
            selected={returnDate}
            onChange={(date: Date) => setReturnDate(date)}
          />
          <p className=" mt-4">{weekDays[returnDayIndex]}</p>
        </div>
        <svg
          className=" w-[35px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#7167ff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
