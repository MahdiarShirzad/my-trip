import img from "../../../assets/img/flight/01.jpg";

export default function FlightCard() {
  return (
    <div className=" w-[305px] relative py-3 px-4 bg-white rounded-xl text-[#4f4b8b]">
      <div>
        <img className=" rounded-2xl" src={img} alt="" />
      </div>
      <div className=" flex font-interBold gap-2 text-xl mt-3">
        <p>New York</p>
        <button>
          {" "}
          <svg
            className=" w-[25px]"
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
                d="M7.96967 12.5303C8.26256 12.8232 8.73744 12.8232 9.03033 12.5303C9.32322 12.2374 9.32322 11.7626 9.03033 11.4697L7.96967 12.5303ZM5.53033 7.96967C5.23744 7.67678 4.76256 7.67678 4.46967 7.96967C4.17678 8.26256 4.17678 8.73744 4.46967 9.03033L5.53033 7.96967ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM4.46967 7.96967C4.17678 8.26256 4.17678 8.73744 4.46967 9.03033C4.76256 9.32322 5.23744 9.32322 5.53033 9.03033L4.46967 7.96967ZM9.03033 5.53033C9.32322 5.23744 9.32322 4.76256 9.03033 4.46967C8.73744 4.17678 8.26256 4.17678 7.96967 4.46967L9.03033 5.53033ZM16.0303 11.4697C15.7374 11.1768 15.2626 11.1768 14.9697 11.4697C14.6768 11.7626 14.6768 12.2374 14.9697 12.5303L16.0303 11.4697ZM18.4697 16.0303C18.7626 16.3232 19.2374 16.3232 19.5303 16.0303C19.8232 15.7374 19.8232 15.2626 19.5303 14.9697L18.4697 16.0303ZM19 16.25C19.4142 16.25 19.75 15.9142 19.75 15.5C19.75 15.0858 19.4142 14.75 19 14.75V16.25ZM5 14.75C4.58579 14.75 4.25 15.0858 4.25 15.5C4.25 15.9142 4.58579 16.25 5 16.25V14.75ZM19.5303 16.0303C19.8232 15.7374 19.8232 15.2626 19.5303 14.9697C19.2374 14.6768 18.7626 14.6768 18.4697 14.9697L19.5303 16.0303ZM14.9697 18.4697C14.6768 18.7626 14.6768 19.2374 14.9697 19.5303C15.2626 19.8232 15.7374 19.8232 16.0303 19.5303L14.9697 18.4697ZM9.03033 11.4697L5.53033 7.96967L4.46967 9.03033L7.96967 12.5303L9.03033 11.4697ZM5 9.25H19V7.75H5V9.25ZM5.53033 9.03033L9.03033 5.53033L7.96967 4.46967L4.46967 7.96967L5.53033 9.03033ZM14.9697 12.5303L18.4697 16.0303L19.5303 14.9697L16.0303 11.4697L14.9697 12.5303ZM19 14.75H5V16.25H19V14.75ZM18.4697 14.9697L14.9697 18.4697L16.0303 19.5303L19.5303 16.0303L18.4697 14.9697Z"
                fill="#4f4b8b"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <p>Sari</p>
      </div>
      <div className=" flex font-interSemiBold gap-1 mt-2">
        <svg
          className=" w-[20px]"
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55229 1 7 1ZM16 6V5H8V6C8 6.55228 7.55229 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6ZM4 15V11H8V15H4ZM4 17V20C4 20.5523 4.44772 21 5 21H8V17H4ZM10 17V21H14V17H10ZM16 17V21H19C19.5523 21 20 20.5523 20 20V17H16ZM20 15H16V11H20V15ZM14 15H10V11H14V15Z"
              fill="#4f4b8b"
            ></path>{" "}
          </g>
        </svg>
        <div className=" flex items-center gap-1">
          <span> Aug 01, 2022</span>
          <span>-</span>
          <span>Aug 30, 2022</span>
        </div>
      </div>
      <div className=" flex items-center justify-between border-t mt-4 py-2">
        <div className=" flex gap-1 font-interSemiBold text-sm items-center">
          <p>From</p>
          <p className=" flex font-interBold text-lg items-center text-[#f96768]">
            <span>$</span>
            <p>560</p>
          </p>
        </div>
        <button className=" flex items-center gap-1 font-interSemiBold">
          <p>See Details</p>
          <svg
            className=" w-[13px] mt-1"
            fill="#4f4b8b"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 492.004 492.004"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
      <button className="absolute top-4 left-6 bg-[#7167FF] p-1  rounded-full">
        {""}
        <svg
          className=" w-[25px]"
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
              d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}
