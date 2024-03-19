import Layout from "../../components/common/layout/Layout";
import Hero from "./Hero.tsx";
import ProductBox from "./ProductBox.tsx";

function Home() {
  return (
    <Layout>
      <div>
        <Hero />
        <ProductBox />
      </div>
    </Layout>
  );
}

export default Home;
