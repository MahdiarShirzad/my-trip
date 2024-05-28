import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

const HotelNav = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By Default");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Sort By Default",
    "Sort By Low Price",
    "Sort By High Price",
  ];

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Event listener to close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center ${
        darkMode ? "bg-slate-600 text-white" : "bg-white"
      } px-10 py-4 rounded-lg shadow-md`}
    >
      <p className="font-bold text-lg">2,350 Results Found</p>
      <div className="relative" ref={dropdownRef}>
        <button
          className="border-2 border-gray-300 w-52 font-inter focus:outline-none text-left px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              stroke={!darkMode ? "#000" : "#fff"}
            >
              <path
                fill={!darkMode ? "#000" : "#fff"}
                d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.408 0.418-1.077 0.418-1.484 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z"
              />
            </svg>
          </div>
          {selectedOption}
        </button>
        {isOpen && (
          <ul
            className={`absolute mt-2 w-[110%] font-inter shadow text-  ${
              darkMode ? "bg-slate-600 text-white" : "bg-white"
            } rounded-lg z-10`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 transition-colors  duration-200 mx-3 my-1 rounded-lg cursor-pointer  ${
                  selectedOption === option
                    ? "bg-gray-100 font-interBold text-[#7167FF]"
                    : `hover:bg-gray-100 ${
                        !darkMode
                          ? "text-slate-800"
                          : "text-gray-200 hover:text-gray-600"
                      }`
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HotelNav;
