import Layout from "../../components/common/layout/Layout";
import FlightSearch from "../Home/FlightSearch";
import FlightNav from "./FlightNav";
import FlightFilter from "./FlightFilter";
import FlightCard from "../../components/common/FlightCard/FlightCard";
import { useQuery } from "@tanstack/react-query";
import { getFlights } from "../../services/apiFlights";
import Loading from "../../components/common/loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

type Props = {};

export default function Flight({}: Props) {
  const { data: flights, isLoading } = useQuery({
    queryKey: ["flight"],
    queryFn: getFlights,
  });

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Layout>
      <div className=" relative w-full h-[500x]">
        <div className="bg-[url('assets/img/breadcrumb/01.jpg')] bg-no-repeat h-[500px] bg-cover absolute w-full -z-20"></div>
        <div className=" bg-[#000000c1] w-full h-[500px] -z-10"></div>
        <div className=" absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className=" container max-w-[1320px] mx-auto">
            <p className=" text-center w-full font-interExtraBold text-4xl text-white">
              Flight List
            </p>
            <p className=" text-white text-center font-inter text-xl mt-4">
              Find the best Flights
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1290px]  mx-auto z-[100] -mt-28 relative bg- rounded-3xl">
        <div>
          <FlightSearch />
          <div className=" flex items-center justify-center font-interSemiBold text-white">
            <button className="bg-[#7167FF] hover:bg-[#dc3546] transition-colors duration-200 px-4 py-3 rounded-full  -mt-8 border-2 border-white shadow-gray-300 shadow-md ">
              Search now
            </button>
          </div>
          <div className="flex items-start justify-between gap-7 my-24">
            <FlightFilter />
            <div className=" w-5/6">
              <FlightNav />
              <div className=" flex justify-start gap-3 flex-wrap mt-6">
                {isLoading ? (
                  <Loading />
                ) : flights && flights.length > 0 ? (
                  flights.map((flight) => (
                    <FlightCard data={flight} key={flight.id} />
                  ))
                ) : (
                  <p
                    className={`text-4xl font-interBlack text-center my-20 w-full ${
                      darkMode ? "text-slate-300" : "text-slate-800"
                    }`}
                  >
                    No Flight Found ...!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
