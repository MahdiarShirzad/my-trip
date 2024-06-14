import { useEffect, useState } from "react";
``;
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";
import MobileNav from "./MobileNav";
import Logo from "../common/logo/Logo";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 5;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[10000] 
    ${isScrolled && !darkTheme ? "bg-white text-black" : ""}
    ${!isScrolled ? "bg-transparent text-white" : ""}
    ${isScrolled && darkTheme ? "bg-slate-950 text-white" : ""}
    `}
    >
      <div className="container max-w-[1320px] flex  max-lg:px-8 mx-auto items-center py-4 max-sm:gap-3 gap-10 font-inter pr-6 max-lg:justify-between">
        <MobileNav />
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;
