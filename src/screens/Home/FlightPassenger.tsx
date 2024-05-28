import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export default function FlightPassenger() {
  const [tabIsOpen, setTabIsOpen] = useState<boolean>(false);
  const [passengers, setPassengers] = useState<number>(0);
  const [classType, setClassType] = useState<string>("First Class");

  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

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

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

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

  function handleClassChange(event: React.ChangeEvent<HTMLInputElement>) {
    setClassType(event.target.value);
  }

  return (
    <div className="mt-2 relative" ref={dropdownRef}>
      <div className="bg-[#7167FF26] font-inter  rounded-2xl px-4 py-5 w-72 h-full max-lg:w-full">
        <div className=" flex items-center justify-between">
          <p className=" font-interSemiBold">Passenger, Class</p>
          <svg
            className=" w-[35px]"
            fill={darkTheme ? `#fff` : `#4f4b8b`}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 328.5 328.5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <polygon points="96.333,150.918 96.333,135.918 55.667,135.918 55.667,95.251 40.667,95.251 40.667,135.918 0,135.918 0,150.918 40.667,150.918 40.667,191.583 55.667,191.583 55.667,150.918 "></polygon>{" "}
                  <path d="M259.383,185.941H145.858c-38.111,0-69.117,31.006-69.117,69.117v39.928H328.5v-39.928 C328.5,216.948,297.494,185.941,259.383,185.941z M313.5,279.987H91.741v-24.928c0-29.84,24.276-54.117,54.117-54.117h113.524 c29.84,0,54.117,24.277,54.117,54.117L313.5,279.987L313.5,279.987z"></path>{" "}
                  <path d="M202.621,178.84c40.066,0,72.662-32.597,72.662-72.663s-32.596-72.663-72.662-72.663s-72.663,32.596-72.663,72.663 S162.555,178.84,202.621,178.84z M202.621,48.515c31.795,0,57.662,25.867,57.662,57.663s-25.867,57.663-57.662,57.663 c-31.796,0-57.663-25.868-57.663-57.663S170.825,48.515,202.621,48.515z"></path>{" "}
                </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div onClick={tabHandler} className=" cursor-pointer">
          <p className=" font-interBold text-xl mt-3">
            {adults + children + infants} Passenger
            {passengers ? `s` : ``}
          </p>
          <p className=" font-interSemiBold mt-3 text-sm">{classType}</p>
        </div>
      </div>
      {tabIsOpen && (
        <div
          className={` absolute z-30 ${
            darkTheme ? "bg-slate-600" : "bg-white"
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
            </div>
          </div>
          <div className="font-inter">
            <p className=" font-interSemiBold">Cabin Class</p>
            <form className="mt-2 px-1 flex flex-col gap-1">
              <div className="flex gap-1">
                <input
                  className="checked:accent-[#7167FF]"
                  type="radio"
                  name="class"
                  id="firstClass"
                  value="First Class"
                  checked={classType === "First Class"}
                  onChange={handleClassChange}
                />
                <label className=" cursor-pointer" htmlFor="firstClass">
                  First Class
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  className="checked:accent-[#7167FF]"
                  type="radio"
                  name="class"
                  id="business"
                  value="Business"
                  checked={classType === "Business"}
                  onChange={handleClassChange}
                />
                <label className=" cursor-pointer" htmlFor="business">
                  Business
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  className="checked:accent-[#7167FF]"
                  type="radio"
                  name="class"
                  id="economy"
                  value="Economy"
                  checked={classType === "Economy"}
                  onChange={handleClassChange}
                />
                <label className=" cursor-pointer" htmlFor="economy">
                  Economy
                </label>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
