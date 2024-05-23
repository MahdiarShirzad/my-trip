import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { NavLink } from "react-router-dom";

type Props = {};

type Link = {
  id: number;
  label: string;
  path: string;
  icon: JSX.Element;
};

export default function UserBtn({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const userLinks: Link[] = [
    {
      id: 1,
      label: "My Profile",
      path: "/user-panel/profile",
      icon: (
        <svg
          className=" w-4"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-380.000000, -2199.000000)"
                fill={darkMode ? "#fff" : "#000"}
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M342,2055.615 C342,2055.722 341.97,2055.821 341.939,2055.918 C341.723,2052.974 339.918,2050.482 337.375,2049.283 C338.368,2048.369 339,2047.071 339,2045.615 C339,2043.534 337.728,2041.753 335.92,2041 L341,2041 C341.552,2041 342,2041.063 342,2041.615 L342,2055.615 Z M339.963,2057 L327.975,2057 C327.974,2057 327.969,2056.741 327.969,2056.701 C327.969,2053.605 330.326,2050.96 333.339,2050.645 C334,2050.733 334.255,2050.622 334.623,2050.576 C337.625,2050.902 339.969,2053.623 339.969,2056.71 C339.969,2056.75 339.964,2057 339.963,2057 L339.963,2057 Z M326,2055.615 L326,2041.615 C326,2041.063 326.448,2041 327,2041 L332.08,2041 C330.272,2041.753 329,2043.534 329,2045.615 C329,2047.06 329.622,2048.351 330.602,2049.264 C328.107,2050.422 326.307,2052.82 326.012,2055.675 C326.011,2055.654 326,2055.636 326,2055.615 L326,2055.615 Z M337,2045.615 C337,2047.055 335.979,2048.26 334.623,2048.548 C334.033,2048.5 333.868,2048.508 333.368,2048.545 C332.017,2048.254 331,2047.052 331,2045.615 C331,2043.961 332.346,2042.615 334,2042.615 C335.654,2042.615 337,2043.961 337,2045.615 L337,2045.615 Z M342,2039 L326,2039 C324.895,2039 324,2039.895 324,2041 L324,2057 C324,2058.104 324.895,2059 326,2059 L342,2059 C343.105,2059 344,2058.104 344,2057 L344,2041 C344,2039.895 343.105,2039 342,2039 L342,2039 Z"
                    id="profile_image_round-[#1326]"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      label: "My Bookings",
      path: "/user-panel/bookings",
      icon: (
        <svg
          className="w-5"
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
              d="M6.50968 8.46745H4.67958C3.66885 8.46745 2.84949 9.28681 2.84949 10.2975V14.2717C2.84949 15.2425 3.23511 16.1735 3.92153 16.8599L5.43763 18.376C6.12405 19.0624 7.05504 19.448 8.02578 19.448H15.9741C16.9449 19.448 17.8759 19.0624 18.5623 18.376L20.0784 16.8599C20.7648 16.1735 21.1504 15.2425 21.1504 14.2717V10.2975C21.1504 9.28681 20.3311 8.46745 19.3203 8.46745H17.4903M6.50968 8.46745V5.72231C6.50968 4.71157 7.32904 3.89221 8.33977 3.89221H15.6602C16.6709 3.89221 17.4903 4.71157 17.4903 5.72231V8.46745M6.50968 8.46745H17.4903"
              stroke={darkMode ? "#fff" : "#000"}
              stroke-width="1.69905"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M10.1699 13.0427H13.8301"
              stroke={darkMode ? "#fff" : "#000"}
              stroke-width="1.69905"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 5,
      label: "Settings",
      path: "/user-panel/settings",
      icon: (
        <svg
          className=" w-4"
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
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke={darkMode ? "#fff" : "#000"}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
              stroke={darkMode ? "#fff" : "#000"}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ];

  const handleSelect = (option: string) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-slate-700 text-gray-200" : "bg-zinc-100"
      } relative px-5 w-3/5 max-lg:w-2/5 max-sm:w-2/3 max-md:text-sm  py-1 rounded-full `}
      ref={dropdownRef}
    >
      <button
        className={`${
          darkMode ? "text-gray-200" : ""
        }  w-full h-full   flex items-center gap-2 font-interSemiBold text-lg cursor-pointer  text-black`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className=" w-10 max-md:w-8"
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
              cy="9"
              r="3"
              stroke={darkMode ? "#ddd" : "#000"}
              stroke-width="1.5"
            ></circle>{" "}
            <path
              d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
              stroke={darkMode ? "#ddd" : "#000"}
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke={darkMode ? "#ddd" : "#000"}
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        mahdiar
        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            stroke={darkMode ? "#eee" : "#000"}
          >
            <path
              fill={darkMode ? "#eee" : "#000"}
              d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.408 0.418-1.077 0.418-1.484 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z"
            ></path>
          </svg>
        </div>
      </button>
      {isOpen && (
        <ul
          className={`absolute mt-2 w-full left-0 font-inter shadow text-  ${
            darkMode ? "bg-slate-600 text-white" : "bg-white"
          } rounded-lg z-10`}
        >
          {userLinks.map((link) => (
            <NavLink key={link.id} to={link.path}>
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
}
