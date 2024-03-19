import { ReactElement } from "react";
import FlightSearch from "./FlightSearch";
import HotelSearch from "./HotelSearch";

function ProductBox() {
  const tabItems: { title: string; icon: ReactElement; id: number }[] = [
    {
      id: 1,
      title: "Flight",
      icon: (
        <svg
          fill="#7167ff"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M 25.71875 4.78125 C 25.332031 4.816406 24.957031 4.929688 24.59375 5.125 L 19.875 7.625 L 13.5 6.0625 L 13.125 5.96875 L 12.75 6.15625 L 10.59375 7.40625 L 9.3125 8.15625 L 10.5 9.0625 L 13.21875 11.125 L 9.8125 12.9375 L 6.15625 11.28125 L 5.71875 11.09375 L 5.28125 11.3125 L 3.53125 12.25 L 2.375 12.875 L 3.25 13.8125 L 8.65625 19.625 L 9.15625 20.21875 L 9.84375 19.84375 L 15 17.09375 L 13.96875 22.78125 L 13.625 24.59375 L 15.34375 23.875 L 17.90625 22.78125 L 18.28125 22.625 L 18.4375 22.25 L 22.15625 13.21875 L 27.40625 10.40625 C 28.851563 9.628906 29.433594 7.789063 28.65625 6.34375 C 28.269531 5.621094 27.609375 5.128906 26.875 4.90625 C 26.507813 4.796875 26.105469 4.746094 25.71875 4.78125 Z M 25.90625 6.78125 C 26.03125 6.773438 26.160156 6.777344 26.28125 6.8125 C 26.523438 6.886719 26.742188 7.035156 26.875 7.28125 C 27.140625 7.777344 26.964844 8.359375 26.46875 8.625 L 20.875 11.65625 L 20.5625 11.8125 L 20.4375 12.15625 L 16.71875 21.09375 L 16.28125 21.28125 L 17.34375 15.375 L 17.71875 13.34375 L 15.90625 14.3125 L 9.59375 17.71875 L 5.625 13.40625 L 5.78125 13.3125 L 9.4375 14.9375 L 9.90625 15.15625 L 10.3125 14.90625 L 25.53125 6.875 C 25.65625 6.808594 25.78125 6.789063 25.90625 6.78125 Z M 13.375 8.09375 L 17.21875 9.03125 L 15.15625 10.09375 L 12.90625 8.375 Z M 3 26 L 3 28 L 29 28 L 29 26 Z"></path>
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Hotels",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15"
              stroke="#7167ff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Tours",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      ),
    },
  ];

  return (
    <div className=" max-w-[1290px] relative mx-auto h-64 ">
      <div className=" bg-white h-full w-full z-[100]  absolute -top-10 rounded-3xl ">
        <div className="relative">
          <div className=" flex items-center justify-center gap-4 -mt-7 bg-white mx-20  rounded-full pt-3 text-[#4f4b8b] font-interBold ">
            {tabItems.map(
              (item: { title: string; icon: ReactElement; id: number }) => (
                <div
                  className="bg-[#7167FF26] px-4 py-2 rounded-full flex items-center gap-2  "
                  key={item.id}
                >
                  <div className=" w-6">{item.icon}</div>
                  {item.title}
                </div>
              )
            )}
          </div>
        </div>
        {/* <FlightSearch /> */}
        <HotelSearch />
      </div>
    </div>
  );
}

export default ProductBox;
