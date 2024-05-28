import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/common/layout/Layout";
import CustomerComments from "./CustomerComments.tsx";
import Features from "./Features.tsx";
import FlightSection from "./FlightSection.tsx";
import Hero from "./Hero.tsx";
import HotelSection from "./HotelSection.tsx";
import ProductBox from "./ProductBox.tsx";
import { getHotels } from "../../services/apiHotels.tsx";
import { getFlights } from "../../services/apiFlights.ts";

function Home() {
  const { data: hotels, isLoading } = useQuery({
    queryKey: ["hotel"],
    queryFn: getHotels,
  });

  const { data: flights, isLoading: flightLoading } = useQuery({
    queryKey: ["flight"],
    queryFn: getFlights,
  });

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
