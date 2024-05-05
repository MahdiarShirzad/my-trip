import React, { useState } from "react";

export default function HotelNameSearch() {
  const [hotelName, setHotelName] = useState<string>("");

  function handleHotelName(event: React.ChangeEvent<HTMLInputElement>) {
    setHotelName(event.target.value);
  }

  return (
    <div className=" w-1/3 bg-[#7167FF26] font-inter text-[#4f4b8b] rounded-2xl px-4 py-5  h-full">
      <div className="flex justify-between items-center">
        <p className=" font-interSemiBold text-lg">Destination</p>
        <svg
          className=" w-10"
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
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#7167ff"
              stroke-width="1.5"
            ></circle>{" "}
            <path
              d="M6 4.71053C6.78024 5.42105 8.38755 7.36316 8.57481 9.44737C8.74984 11.3955 10.0357 12.9786 12 13C12.7549 13.0082 13.5183 12.4629 13.5164 11.708C13.5158 11.4745 13.4773 11.2358 13.417 11.0163C13.3331 10.7108 13.3257 10.3595 13.5 10C14.1099 8.74254 15.3094 8.40477 16.2599 7.72186C16.6814 7.41898 17.0659 7.09947 17.2355 6.84211C17.7037 6.13158 18.1718 4.71053 17.9377 4"
              stroke="#7167ff"
              stroke-width="1.5"
            ></path>{" "}
            <path
              d="M22 13C21.6706 13.931 21.4375 16.375 17.7182 16.4138C17.7182 16.4138 14.4246 16.4138 13.4365 18.2759C12.646 19.7655 13.1071 21.3793 13.4365 22"
              stroke="#7167ff"
              stroke-width="1.5"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <input
        className=" font-interBold text-xl mt-3 block bg-transparent text-[#4F4B8B] focus:outline-none placeholder:text-[#4F4B8B] w-full focus:placeholder:opacity-0"
        placeholder={!hotelName ? "Hotel Name" : hotelName}
        value={hotelName}
        onChange={handleHotelName}
      />
      <p className=" mt-3">Comuna 1, Argentina</p>
    </div>
  );
}
