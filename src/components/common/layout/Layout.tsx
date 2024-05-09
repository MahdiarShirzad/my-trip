import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store.ts";

type LayoutProps = {
  children: React.ReactElement | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`${darkTheme ? `bg-slate-900` : `bg-[#f5f7fc]`} -z-0 relative`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
