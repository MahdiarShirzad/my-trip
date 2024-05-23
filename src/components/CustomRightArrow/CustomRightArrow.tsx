import React from "react";
import { ArrowProps } from "react-multi-carousel/lib/types"; // Import the ArrowProps type

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
  // Use the ArrowProps type to define the props
  return (
    <button
      className=" p-3  z-30 absolute right-0 rounded-full bg-white shadow-md max-md:hidden"
      onClick={onClick}
    >
      {/* You can customize the arrow icon here */}
      <svg
        className=" w-[23px]"
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
            d="M15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289C13.9024 5.68342 13.9024 6.31658 14.2929 6.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L14.2929 17.2929C13.9024 17.6834 13.9024 18.3166 14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.7071 5.29289Z"
            fill="#7167FF"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default CustomRightArrow;
