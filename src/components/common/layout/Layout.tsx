import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";

type LayoutProps = {
  children: React.ReactElement | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
