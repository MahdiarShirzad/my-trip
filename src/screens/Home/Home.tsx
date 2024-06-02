import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/common/layout/Layout";
import CustomerComments from "./CustomerComments.tsx";
import Features from "./Features.tsx";
import FlightSection from "./FlightSection.tsx";
import Hero from "./Hero.tsx";
import HotelSection from "./HotelSection.tsx";
import ProductBox from "./ProductBox.tsx";
import { getHotels } from "../../services/apiHotels.ts";
import { getFlights } from "../../services/apiFlights.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store.ts";

function Home() {
  const { data: flights, isLoading: flightLoading } = useQuery({
    queryKey: ["flight"],
    queryFn: getFlights,
  });

  const { data: hotels, isLoading } = useQuery({
    queryKey: ["hotel"],
    queryFn: getHotels,
  });

  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  console.log(isAuthenticated);

  return (
    <Layout>
      <div>
        <Hero />
        <ProductBox />
        <Features />
        <FlightSection data={flights} isLoading={flightLoading} />
        <HotelSection data={hotels} isLoading={isLoading} />
        <CustomerComments />
      </div>
    </Layout>
  );
}

export default Home;
