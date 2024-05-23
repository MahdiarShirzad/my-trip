import React from "react";
import { ArrowProps } from "react-multi-carousel/lib/types"; // Import the ArrowProps type

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
  // Use the ArrowProps type to define the props
  return (
    <button
      className=" p-3  z-30  absolute left- rounded-full bg-white shadow-md max-md:hidden"
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
            d="M9.70711 17.2929C10.0976 17.6834 10.0976 18.3166 9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711L5.41421 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L5.41422 13L9.70711 17.2929Z"
            fill="#7167FF"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default CustomRightArrow;
