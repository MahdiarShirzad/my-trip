import { useEffect, useState } from "react";
import logo from "../../../assets/img/logo/logo.png";
import logo2 from "../../../assets/img/logo/logo-dark.png";

function Logo() {
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
    <div>
      <img
        className=" w-72 max-lg:w-48 max-md:w-32 "
        src={!isScrolled ? logo : logo2}
        alt=""
      />
    </div>
  );
}

export default Logo;
