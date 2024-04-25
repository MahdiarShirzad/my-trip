import React from "react";

function HotelSearch() {
  return (
    <div className="  px-10 py-10  h-72 justify-between gap-8 flex -mt-7 bg-white rounded-3xl">
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
        <p className=" font-interBold mt-2 text-2xl">Reserva Ecologica</p>
        <p className=" mt-3">Comuna 1, Argentina</p>
      </div>
      <div className=" w-1/3 bg-[#7167FF26] font-inter text-[#4f4b8b] rounded-2xl px-4 py-5  h-full">
        <div className="flex justify-between items-start">
          <div>
            <p className=" text-lg font-interSemiBold">Check In</p>
            <p className=" text-2xl font-interBold mt-3">10/3/2022</p>
            <p className=" mt-4">Tuesday</p>
          </div>
          <div>
            <p className=" text-lg font-interSemiBold">Check Out</p>
            <p className=" text-2xl font-interBold mt-3">3/4/2024</p>
            <p className=" mt-4">Wednesday</p>
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
      <div className=" w-1/3 bg-[#7167FF26] font-inter text-[#4f4b8b] rounded-2xl px-4 py-5  h-full">
        <div className="flex justify-between items-start w-full">
          <div className=" flex flex-col gap-3">
            <p className=" text-lg font-interSemiBold">Rooms, Guests</p>
            <p className=" text-2xl font-interBold">2 Rooms, 2 Guests</p>
            <p className=" text- font-inter">Double Room</p>
          </div>
          <svg
            className=" w-[30px]"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="add-user-6" transform="translate(-2 -2)">
                {" "}
                <path
                  id="secondary"
                  fill="none"
                  d="M10,13h2a7,7,0,0,1,7,7h0a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1H3a7,7,0,0,1,7-7Z"
                ></path>{" "}
                <path
                  id="primary"
                  d="M15.59,10A5,5,0,1,1,11,3a5.11,5.11,0,0,1,2,.41"
                  fill="none"
                  stroke="#7167ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M21,5H17m2-2V7m-7,6H10a7,7,0,0,0-7,7H3a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1h0a7,7,0,0,0-7-7Z"
                  fill="none"
                  stroke="#7167ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
