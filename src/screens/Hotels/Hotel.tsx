import React, { useState, useEffect } from "react";
import Layout from "../../components/common/layout/Layout";
import HotelSearch from "../Home/HotelSearch";
import HotelNav from "./HotelNav";
import HotelCard from "../../components/common/HotelCard/HotelCard";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../services/apiHotels";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import Loading from "../../components/common/loading/Loading";
import { useSearchParams } from "react-router-dom";

export default function Hotel(): React.ReactElement {
  const { data: hotelsQuery, isLoading } = useQuery({
    queryKey: ["hotel"],
    queryFn: getHotels,
  });

  const [hotels, setHotels] = useState([]);
  const [initialHotels, setInitialHotels] = useState([]);

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (hotelsQuery) {
      setHotels(hotelsQuery);
      setInitialHotels(hotelsQuery);
    }
  }, [hotelsQuery]);

  const sortHotels = (hotels) => {
    const sortOption = searchParams.get("sort");
    switch (sortOption) {
      case "Sort By Low Price":
        return [...hotels].sort((a, b) => a.price - b.price);
      case "Sort By High Price":
        return [...hotels].sort((a, b) => b.price - a.price);
      default:
        return initialHotels; // Default sorting (initial order)
    }
  };

  return (
    <Layout>
      <div className="relative w-full h-[500x]">
        <div className="bg-[url('assets/img/breadcrumb/05.jpg')] bg-no-repeat h-[500px] bg-cover absolute w-full -z-20"></div>
        <div className="bg-[#000000c1] w-full h-[500px] -z-10"></div>
        <div className="absolute h-[500px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
          <div className="container max-w-[1320px] mx-auto">
            <p className="text-center w-full font-interExtraBold text-4xl text-white">
              Hotel List
            </p>
            <p className="text-white text-center font-inter text-xl mt-4">
              Find the best Hotels
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1290px] mx-auto z-[100] -mt-28 relative bg- rounded-3xl">
        <div>
          <HotelSearch />
          <div className="flex items-center justify-center font-interSemiBold text-white">
            <button className="bg-[#7167FF] hover:bg-[#dc3546] transition-colors duration-200 px-4 py-3 rounded-full -mt-8 border-2 border-white shadow-gray-300 shadow-md">
              Search now
            </button>
          </div>
          <div className="flex items-start justify-between gap-7 my-24">
            <div className="w-full">
              <HotelNav hotels={hotelsQuery} />
              <div className="flex justify-star max-xl:justify-center gap-3 flex-wrap mt-6">
                {isLoading ? (
                  <Loading />
                ) : hotels && hotels.length > 0 ? (
                  sortHotels(hotels).map((hotel) => (
                    <HotelCard data={hotel} key={hotel.id} />
                  ))
                ) : (
                  <p
                    className={`text-4xl font-interBlack text-center my-20 w-full ${
                      darkMode ? "text-slate-300" : "text-slate-800"
                    }`}
                  >
                    No Hotel Found ...!
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
