import Layout from "../../components/common/layout/Layout";
import CustomerComments from "./CustomerComments.tsx";
import Features from "./Features.tsx";
import FlightSection from "./FlightSection.tsx";
import Hero from "./Hero.tsx";
import HotelSection from "./HotelSection.tsx";
import ProductBox from "./ProductBox.tsx";

function Home() {
  return (
    <Layout>
      <div>
        <Hero />
        <ProductBox />
        <Features />
        <FlightSection />
        <HotelSection />
        <CustomerComments />
      </div>
    </Layout>
  );
}

export default Home;
