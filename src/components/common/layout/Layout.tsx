import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store.ts";
import { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 700;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${darkTheme ? `bg-slate-900` : `bg-[#f5f7fc]`} -z-0 relative`}
    >
      <Header />
      {children}
      <Footer />
      {isScrolled && (
        <div
          onClick={scrollToTop}
          className="fixed cursor-pointer bg-[#7167FF] rounded-lg bottom-10 right-10 z-[200000] p-1"
        >
          <svg
            className=" w-8"
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
                d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Layout;
