import { useSelector } from "react-redux";
import img from "../../../assets/img/flight/01.jpg";
import { RootState } from "../../../features/store";
import { Link } from "react-router-dom";

type Data = {
  id: number;
  airline: string;
  price: number;
  journey: Date | string;
  return?: Date;
  roundWay: boolean;
  journeyCity: string;
  returnCity: string;
};

export default function FlightCard({ data }: { data: Data }) {
  const {
    id,
    airline,
    price,
    journey,
    roundWay,
    journeyCity,
    returnCity,
    return: returnDate,
  } = data;

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formatDateString = (date: Date | string): string => {
    if (typeof date === "string") {
      return new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    } else {
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    }
  };

  return (
    <div
      className={` w-[305px] h-[383px] relative py-3 px-4 my-2  ${
        darkTheme ? "bg-slate-600" : `bg-white`
      } rounded-xl ${
        darkTheme ? "text-white" : "text-[#4f4b8b] shadow-lg shadow-gray-300"
      }`}
    >
      <div>
        <img className=" rounded-2xl" src={img} alt="" />
      </div>
      <p className=" text font-interSemiBold my-2">{airline}</p>
      <div className=" flex font-interBold gap-2 text-xl mt-">
        <p>{journeyCity}</p>
        {roundWay ? (
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
                fill={darkTheme ? "#fff" : "#4f4b8b"}
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            className=" w-[16px]"
            viewBox="0 -6.5 38 38"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill={darkTheme ? "#fff" : "#4f4b8b"}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                id="icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="ui-gambling-website-lined-icnos-casinoshunter"
                  transform="translate(-1511.000000, -158.000000)"
                  fill={darkTheme ? "#fff" : "#4f4b8b"}
                  fill-rule="nonzero"
                >
                  {" "}
                  <g id="1" transform="translate(1350.000000, 120.000000)">
                    {" "}
                    <path
                      d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                      id="right-arrow"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        )}

        <p>{returnCity}</p>
      </div>
      <div className=" flex font-interSemiBold gap-1 mt-3">
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
              fill={darkTheme ? "#fff" : "#4f4b8b"}
            ></path>{" "}
          </g>
        </svg>
        <div className=" flex items-center gap-1 text-">
          <span>{formatDateString(journey)}</span>
          {returnDate && (
            <>
              <span>-</span>
              <span>{returnDate ? formatDateString(returnDate) : "N/A"}</span>
            </>
          )}
        </div>
      </div>
      <div className=" flex items-center justify-between border-t mt-7 py-2">
        <div className=" flex gap-1 font-interSemiBold text-sm items-center">
          <p>From</p>
          <p className=" flex font-interBold text-lg items-center text-[#f96768]">
            <span>$</span>
            <p>{price}</p>
          </p>
        </div>
        <Link
          onClick={scrollToTop}
          to={`/flights/${id}`}
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
