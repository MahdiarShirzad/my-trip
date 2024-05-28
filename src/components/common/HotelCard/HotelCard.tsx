import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import img from "../../../assets/img/hotel/01.jpg";
import { Link } from "react-router-dom";

export default function HotelCard({ data }) {
  const { name, price, city, id } = data;

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={` w-[305px] h-[383px] relative py-3 px-4  my-2 ${
        darkTheme ? "bg-slate-600" : `bg-white`
      } rounded-xl  ${
        darkTheme ? "text-white" : "text-[#4f4b8b] shadow-lg shadow-gray-300"
      }`}
    >
      <div>
        <img className=" rounded-2xl" src={img} alt="" />
      </div>
      <div className="  font-interBold  text-xl mt-3">{name}</div>
      <div className=" flex font-inter font-semibold gap-1 mt-3">
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
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              stroke={darkTheme ? "#fff" : "#000"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
              stroke={darkTheme ? "#fff" : "#000"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <p>{city}</p>
      </div>
      <div className=" flex items-center gap-2">
        <div className=" bg-[#ffa903] flex items-center rounded-lg py-1 gap-1 w-14 mt-3">
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
              <path
                d="M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <p className=" text-sm text-white font-interBold ">5.0</p>
        </div>
        <p className=" font-interSemiBold mt-3">(2.5k Reviews)</p>
      </div>
      <div className=" flex items-center justify-between border-t mt-4 py-2">
        <div className=" flex gap-1 font-interSemiBold text-sm items-center">
          <p className=" flex font-interBold text-lg items-center text-[#f96768]">
            <span>$</span>
            <p>{price}</p>
          </p>
          <p>/Per Night</p>
        </div>
        <Link
          onClick={scrollToTop}
          to={`/hotels/${id}`}
          className=" flex items-center gap-1 font-interSemiBold"
        >
          <p>See Details</p>
          <svg
            className=" w-[13px] mt-1"
            fill={darkTheme ? "#fff" : "#4f4b8b"}
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
        </Link>
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
