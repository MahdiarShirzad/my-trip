import { useState, useEffect } from "react";
import Layout from "../../components/common/layout/Layout";
import FlightSearch from "../Home/FlightSearch";
import FlightNav from "./FlightNav";
import FlightCard from "../../components/common/FlightCard/FlightCard";
import { useQuery } from "@tanstack/react-query";
import { getFlights } from "../../services/apiFlights";
import Loading from "../../components/common/loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useSearchParams } from "react-router-dom";

export default function Flight({}) {
  const { data: flightsQuery, isLoading } = useQuery({
    queryKey: ["flight"],
    queryFn: getFlights,
  });

  const [flights, setFlights] = useState<any>([]);
  const [initialFlights, setInitialFlights] = useState<any>([]);

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (flightsQuery) {
      setFlights(flightsQuery);
      setInitialFlights(flightsQuery);
    }
  }, [flightsQuery]);

  const sortFlights = (flights: any) => {
    const sortOption = searchParams.get("sort");
    switch (sortOption) {
      case "Sort By Low Price":
        return [...flights].sort((a, b) => a.price - b.price);
      case "Sort By High Price":
        return [...flights].sort((a, b) => b.price - a.price);
      default:
        return initialFlights; // Default sorting (initial order)
    }
  };

  return (
    <Layout>
      <div className="relative w-full h-[500x]">
        <div className="bg-[url('assets/img/breadcrumb/01.jpg')] bg-no-repeat h-[500px] bg-cover absolute w-full -z-20"></div>
        <div className="bg-[#000000c1] w-full h-[500px] -z-10"></div>
        <div className="absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className="container max-w-[1320px] mx-auto">
            <p className="text-center w-full font-interExtraBold text-4xl text-white">
              Flight List
            </p>
            <p className="text-white text-center font-inter text-xl mt-4">
              Find the best Flights
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1290px] mx-auto z-[100] -mt-28 relative bg- rounded-3xl">
        <div>
          <FlightSearch />
          <div className="flex items-center justify-center font-interSemiBold text-white">
            <button className="bg-[#7167FF] hover:bg-[#dc3546] transition-colors duration-200 px-4 py-3 rounded-full -mt-8 border-2 border-white shadow-gray-300 shadow-md">
              Search now
            </button>
          </div>
          <div className="flex items-start justify-between gap-7 my-24">
            <div className="w-full">
              <FlightNav flights={flightsQuery} />
              <div className="flex justify-start max-xl:justify-center gap-3 flex-wrap mt-6">
                {isLoading ? (
                  <Loading />
                ) : flights && flights.length > 0 ? (
                  sortFlights(flights).map((flight: any) => (
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
