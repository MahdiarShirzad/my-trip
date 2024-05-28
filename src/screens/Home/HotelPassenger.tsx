import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export default function HotelPassenger() {
  const [tabIsOpen, setTabIsOpen] = useState<boolean>(false);
  const [passengers, setPassengers] = useState<number>(0);
  const [roomType, setRoomType] = useState<string>("Double Room");

  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [roomNumber, setRoomNumber] = useState<number>(1);

  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTabIsOpen(false);
      }
    };

    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const darkMode: boolean = useSelector(
    (state: RootState) => state.theme.darkMode
  );

  function tabHandler() {
    setTabIsOpen(!tabIsOpen);
  }

  function handlePassengerChange(category: string, value: number) {
    switch (category) {
      case "adults":
        setAdults(Math.max(adults + value, 0));
        break;
      case "children":
        setChildren(Math.max(children + value, 0));
        break;
      case "infants":
        setInfants(Math.max(infants + value, 0));
        break;
      default:
        break;
    }
  }

  function handleRoomChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRoomType(event.target.title);
  }

  function handleRoomNumber(category: string, value: number) {
    switch (category) {
      case "-":
        setRoomNumber(Math.max(roomNumber - value, 1));
        break;
      case "+":
        setRoomNumber(Math.max(roomNumber + value, 1));
    }
  }

  return (
    <div
      className=" w-1/3 max-lg:w-full bg-[#7167FF26] font-inter  rounded-2xl px-4 py-5  h-full relative  "
      ref={dropdownRef}
    >
      <div className="flex justify-between items-start w-full">
        <div
          onClick={tabHandler}
          className=" flex flex-col gap-3 cursor-pointer"
        >
          <p className=" text-lg font-interSemiBold">Rooms, Guests</p>
          <p className=" text-2xl font-interBold">
            {roomNumber} Rooms, {adults + children + infants} Guest
            {adults + children + infants > 1 ? "s" : ""}
          </p>
          <p className=" text- font-inter">{roomType}</p>
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
      {tabIsOpen && (
        <div
          className={` absolute z-50 max-lg:w-3/5 ${
            darkMode ? "bg-slate-600" : "bg-white"
          } shadow-sm w-full mt-5 px-3 py-3 rounded-lg   `}
        >
          <div className=" flex flex-col gap-6 ">
            <div className=" flex justify-between border-b pb-1">
              <div className=" w-1/2">
                <p className=" font-interSemiBold ">Adults</p>
                <p className=" font-inter">12+ Years</p>
              </div>
              <div className=" flex items-center gap-2 w-1/2">
                <button
                  onClick={() => handlePassengerChange("adults", -1)}
                  className=" bg-[#EAE8FF] p-3 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[24px] rounded-full "
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
                        d="M6 12L18 12"
                        stroke="#7167FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <p className=" text-xl font-interSemiBold">{adults}</p>
                <button
                  onClick={() => handlePassengerChange("adults", 1)}
                  className=" bg-[#EAE8FF] p-4 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[14px] rounded-full "
                    fill="#7167FF"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.402 45.402"
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
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" flex justify-between border-b pb-1">
              <div className=" w-1/2">
                <p className=" font-interSemiBold ">Children</p>
                <p className=" font-inter">2-12 Years</p>
              </div>
              <div className=" flex items-center gap-2 w-1/2">
                <button
                  onClick={() => handlePassengerChange("children", -1)}
                  className=" bg-[#EAE8FF] p-3 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[24px] rounded-full "
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
                        d="M6 12L18 12"
                        stroke="#7167FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <p className=" text-xl font-interSemiBold">{children}</p>
                <button
                  onClick={() => handlePassengerChange("children", 1)}
                  className=" bg-[#EAE8FF] p-4 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[14px] rounded-full "
                    fill="#7167FF"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.402 45.402"
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
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" flex justify-between border-b pb-1">
              <div className=" w-1/2">
                <p className=" font-interSemiBold ">Infant</p>
                <p className=" font-inter">Below 2 Years</p>
              </div>
              <div className=" flex items-center gap-2 w-1/2">
                <button
                  onClick={() => handlePassengerChange("infants", -1)}
                  className=" bg-[#EAE8FF] p-3 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[24px] rounded-full "
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
                        d="M6 12L18 12"
                        stroke="#7167FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <p className=" text-xl font-interSemiBold">{infants}</p>
                <button
                  onClick={() => handlePassengerChange("infants", 1)}
                  className=" bg-[#EAE8FF] p-4 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[14px] rounded-full "
                    fill="#7167FF"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.402 45.402"
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
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>{" "}
            <div className=" flex justify-between border-b pb-1">
              <div className=" w-1/2">
                <p className=" font-interSemiBold ">Rooms</p>
              </div>
              <div className=" flex items-center gap-2 w-1/2">
                <button
                  onClick={() => handleRoomNumber("-", 1)}
                  className=" bg-[#EAE8FF] p-3 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[24px] rounded-full "
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
                        d="M6 12L18 12"
                        stroke="#7167FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
                <p className=" text-xl font-interSemiBold">{roomNumber}</p>
                <button
                  onClick={() => handleRoomNumber("+", 1)}
                  className=" bg-[#EAE8FF] p-4 rounded-full"
                >
                  {""}
                  <svg
                    className=" w-[14px] rounded-full "
                    fill="#7167FF"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.402 45.402"
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
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="font-inter">
            <p className=" font-interSemiBold">Room Type</p>
            <form className="mt-2 px-1 flex flex-col gap-1">
              <div className="flex gap-1">
                <input
                  className="checked:accent-[#7167FF]"
                  type="radio"
                  name="class"
                  id="firstClass"
                  value="First Class"
                  checked={roomType === "Single Room"}
                  onChange={handleRoomChange}
                  title="Single Room"
                />
                <label className=" cursor-pointer" htmlFor="firstClass">
                  Single Room
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  className="checked:accent-[#7167FF]"
                  type="radio"
                  name="class"
                  id="business"
                  value="Business"
                  checked={roomType === "Double Room"}
                  onChange={handleRoomChange}
                  title="Double Room"
                />
                <label className=" cursor-pointer" htmlFor="business">
                  Double Room
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  className="checked:accent-[#7167FF]"
                  type="radio"
                  name="class"
                  id="economy"
                  value="Economy"
                  checked={roomType === "Deluxe Room"}
                  onChange={handleRoomChange}
                  title="Deluxe Room"
                />
                <label className=" cursor-pointer" htmlFor="economy">
                  Deluxe Room
                </label>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
