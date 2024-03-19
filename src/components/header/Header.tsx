import { useEffect, useState } from "react";
``;
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";
import MobileNav from "./MobileNav";
import Logo from "../common/logo/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 right-0 left-0 z-[10000] transition-none bg-${
        isScrolled ? "white" : "transparent"
      } transition-all text-${!isScrolled ? `white` : "black"}`}
      data-aos="fade-left"
    >
      <div className="container max-w-[1320px] flex  max-lg:px-8 mx-auto items-center py-4 gap-10 font-iransans pr-6 max-lg:justify-between">
        <MobileNav />
        {<Logo />}
        <HeaderNav />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;
