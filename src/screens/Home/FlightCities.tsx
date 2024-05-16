import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export default function FlightCities() {
  const [beginningCity, setBeginningCity] = useState<string>("");
  const [destinationCity, SetDestinationCity] = useState<string>("");

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  function changeCity() {
    setBeginningCity(destinationCity);
    SetDestinationCity(beginningCity);
  }

  const handleBeginningChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBeginningCity(event.target.value);
  };

  const handleDestinationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetDestinationCity(event.target.value);
  };
  return (
    <div className=" flex mt-2  items-center  relative  max-lg:w-full w-1/2">
      <div className="bg-[#7167FF26] font-inter  rounded-2xl px-4 py-5 w-80 h-40">
        <div className=" flex items-center justify-between">
          <p className=" font-interSemiBold">From</p>
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
                d="M11.4211 5.34687L11.888 4.46257C11.6383 4.33071 11.3444 4.31059 11.0791 4.40718L11.4211 5.34687ZM8.60202 6.37293L8.26 5.43324C7.96664 5.54001 7.73998 5.77766 7.6472 6.07574C7.55442 6.37382 7.60617 6.69813 7.78711 6.95253L8.60202 6.37293ZM15.3731 7.43354L14.9062 8.31784C15.1752 8.45989 15.4943 8.47175 15.7731 8.35007L15.3731 7.43354ZM16.5291 6.92906L16.1292 6.01253L16.5291 6.92906ZM7.70723 14.1478L7.0197 14.874C7.29475 15.1344 7.69332 15.2171 8.04925 15.0875L7.70723 14.1478ZM6.8954 13.3792L7.58293 12.653C7.30788 12.3926 6.90931 12.31 6.55338 12.4395L6.8954 13.3792ZM6.89538 13.3792L6.20785 14.1054C6.48289 14.3658 6.88147 14.4484 7.2374 14.3189L6.89538 13.3792ZM5.27163 11.8418L5.95917 11.1157L5.95917 11.1156L5.27163 11.8418ZM3.64791 10.3044L3.30589 9.36474C2.98021 9.48328 2.73913 9.76199 2.66875 10.1013C2.59836 10.4407 2.70871 10.7923 2.96037 11.0306L3.64791 10.3044ZM6.46699 9.27837L7.15452 8.55222C6.87947 8.2918 6.4809 8.20913 6.12497 8.33868L6.46699 9.27837ZM7.9431 10.676L7.25556 11.4021C7.54701 11.6781 7.97521 11.753 8.34307 11.5925L7.9431 10.676ZM10.7815 9.4373L11.1815 10.3538C11.4576 10.2333 11.6647 9.99482 11.7452 9.70455C11.8257 9.41427 11.771 9.10317 11.5964 8.8577L10.7815 9.4373ZM11.0791 4.40718L8.26 5.43324L8.94404 7.31262L11.7631 6.28656L11.0791 4.40718ZM15.84 6.54924L11.888 4.46257L10.9542 6.23117L14.9062 8.31784L15.84 6.54924ZM16.1292 6.01253L14.9731 6.51701L15.7731 8.35007L16.9291 7.84559L16.1292 6.01253ZM22.1864 8.61017C21.2944 6.15936 18.5195 4.96937 16.1292 6.01253L16.9291 7.84559C18.2621 7.26385 19.8096 7.92747 20.3071 9.29421L22.1864 8.61017ZM21.4384 10.2143C22.088 9.97787 22.4228 9.25969 22.1864 8.61017L20.3071 9.29421C20.1657 8.90578 20.366 8.47628 20.7544 8.3349L21.4384 10.2143ZM8.04925 15.0875L21.4384 10.2143L20.7544 8.3349L7.36521 13.2082L8.04925 15.0875ZM6.20787 14.1054L7.0197 14.874L8.39476 13.4217L7.58293 12.653L6.20787 14.1054ZM6.55338 12.4395L6.55336 12.4395L7.2374 14.3189L7.23742 14.3189L6.55338 12.4395ZM7.58292 12.6531L5.95917 11.1157L4.5841 12.568L6.20785 14.1054L7.58292 12.6531ZM5.95917 11.1156L4.33544 9.57828L2.96037 11.0306L4.5841 12.568L5.95917 11.1156ZM3.98993 11.2441L6.80901 10.2181L6.12497 8.33868L3.30589 9.36474L3.98993 11.2441ZM5.77945 10.0045L7.25556 11.4021L8.63063 9.94983L7.15452 8.55222L5.77945 10.0045ZM10.3816 8.52077L7.54313 9.75945L8.34307 11.5925L11.1815 10.3538L10.3816 8.52077ZM7.78711 6.95253L9.96663 10.0169L11.5964 8.8577L9.41692 5.79333L7.78711 6.95253Z"
                fill={darkTheme ? `#fff` : `#4f4b8b`}
              ></path>{" "}
              <path
                d="M4 19L20 19"
                stroke={darkTheme ? `#fff` : `#4f4b8b`}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <input
          className={`font-interBold text-xl mt-3 block bg-transparent  focus:outline-none ${
            darkTheme ? `placeholder:text-white` : `placeholder:text-[#4F4B8B]`
          } w-full focus:placeholder:opacity-0`}
          placeholder={!beginningCity ? "Origin" : beginningCity}
          value={beginningCity}
          onChange={handleBeginningChange}
        />

        <p className=" font-interSemiBold mt-3 text-sm">
          JFK - John F. Kennedy International Airport
        </p>
      </div>
      <div
        onClick={destinationCity && changeCity}
        className={`  rounded-full  p-1 border-4 border-[#4f4b8b] -mx-2 bg-white z-10 cursor-pointer 
           ${!destinationCity && !beginningCity && `cursor-not-allowed`}
         `}
      >
        {""}
        <svg
          className={`w-[25px] ${
            !destinationCity && !beginningCity && `cursor-not-allowed`
          }`}
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
              d="M18.6091 5.89092L15.5 9H21.5V3L18.6091 5.89092ZM18.6091 5.89092C16.965 4.1131 14.6125 3 12 3C7.36745 3 3.55237 6.50005 3.05493 11M5.39092 18.1091L2.5 21V15H8.5L5.39092 18.1091ZM5.39092 18.1091C7.03504 19.8869 9.38753 21 12 21C16.6326 21 20.4476 17.5 20.9451 13"
              stroke="#4f4b8b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="bg-[#7167FF26] font-inter  rounded-2xl px-4 py-5 w-80 h-40">
        <div className=" flex items-center justify-between">
          <p className=" font-interSemiBold">From</p>
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
              <path
                d="M13.8156 5.6889L14.7417 5.31161C14.6352 5.05008 14.423 4.84579 14.1576 4.7492L13.8156 5.6889ZM10.9965 4.66284L11.3386 3.72314C11.0452 3.61637 10.7188 3.65272 10.4561 3.82143C10.1935 3.99014 10.0247 4.27183 9.99974 4.58302L10.9965 4.66284ZM15.5018 9.82769L14.5757 10.205C14.6904 10.4867 14.9272 10.7009 15.219 10.7869L15.5018 9.82769ZM16.7116 10.1843L16.4289 11.1435L16.7116 10.1843ZM18.7027 14.9169L18.3606 15.8566L18.7027 14.9169ZM5.31348 10.0436L4.32004 10.1579C4.36335 10.5342 4.61553 10.8538 4.97146 10.9833L5.31348 10.0436ZM5.18566 8.93295L6.1791 8.81862C6.1358 8.44233 5.88361 8.12281 5.52768 7.99326L5.18566 8.93295ZM5.18565 8.93295L4.1922 9.04727C4.23551 9.42356 4.48769 9.74309 4.84363 9.87264L5.18565 8.93295ZM4.93 6.71151L5.92345 6.59718L5.92345 6.59718L4.93 6.71151ZM4.67436 4.4901L5.01638 3.55041C4.6907 3.43187 4.32687 3.49042 4.05482 3.70514C3.78277 3.91985 3.64129 4.26013 3.68092 4.60443L4.67436 4.4901ZM7.49344 5.51616L8.48688 5.40184C8.44358 5.02555 8.19139 4.70602 7.83546 4.57647L7.49344 5.51616ZM7.72584 7.53562L6.73239 7.64995C6.77828 8.04868 7.05812 8.38134 7.4431 8.49482L7.72584 7.53562ZM10.6964 8.41124L10.4137 9.37044C10.7026 9.45561 11.0146 9.40599 11.2628 9.23538C11.5111 9.06476 11.6692 8.79133 11.6932 8.49106L10.6964 8.41124ZM14.1576 4.7492L11.3386 3.72314L10.6545 5.60253L13.4736 6.62859L14.1576 4.7492ZM16.4279 9.4504L14.7417 5.31161L12.8895 6.06619L14.5757 10.205L16.4279 9.4504ZM16.9943 9.22511L15.7845 8.86849L15.219 10.7869L16.4289 11.1435L16.9943 9.22511ZM19.9647 15.1086C20.8568 12.6578 19.496 9.96251 16.9943 9.22511L16.4289 11.1435C17.824 11.5547 18.5828 13.0578 18.0854 14.4245L19.9647 15.1086ZM18.3606 15.8566C19.0102 16.093 19.7283 15.7581 19.9647 15.1086L18.0854 14.4245C18.2267 14.0361 18.6562 13.8358 19.0447 13.9772L18.3606 15.8566ZM4.97146 10.9833L18.3606 15.8566L19.0447 13.9772L5.6555 9.10392L4.97146 10.9833ZM4.19222 9.04729L4.32004 10.1579L6.30693 9.92928L6.1791 8.81862L4.19222 9.04729ZM5.52768 7.99326L5.52767 7.99326L4.84363 9.87264L4.84364 9.87265L5.52768 7.99326ZM6.17909 8.81862L5.92345 6.59718L3.93656 6.82583L4.1922 9.04727L6.17909 8.81862ZM5.92345 6.59718L5.6678 4.37577L3.68092 4.60443L3.93656 6.82583L5.92345 6.59718ZM4.33234 5.4298L7.15142 6.45586L7.83546 4.57647L5.01638 3.55041L4.33234 5.4298ZM6.49999 5.63049L6.73239 7.64995L8.71928 7.42129L8.48688 5.40184L6.49999 5.63049ZM10.9792 7.45205L8.00858 6.57642L7.4431 8.49482L10.4137 9.37044L10.9792 7.45205ZM9.99974 4.58302L9.69961 8.33143L11.6932 8.49106L11.9934 4.74265L9.99974 4.58302Z"
                fill={darkTheme ? `#fff` : `#4f4b8b`}
              ></path>{" "}
              <path
                d="M4 19L20 19"
                stroke={darkTheme ? `#fff` : `#4f4b8b`}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        <input
          className={`font-interBold text-xl mt-3 block bg-transparent  focus:outline-none ${
            darkTheme ? `placeholder:text-white` : `placeholder:text-[#4F4B8B]`
          } w-full focus:placeholder:opacity-0`}
          placeholder={!destinationCity ? "Destination" : destinationCity}
          value={destinationCity}
          onChange={handleDestinationChange}
        />

        <p className=" font-interSemiBold mt-3 text-sm">
          JFK - John F. Kennedy International Airport
        </p>
      </div>
    </div>
  );
}
