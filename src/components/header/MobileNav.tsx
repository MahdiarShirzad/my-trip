import NavItems from "./NavItems";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useEffect, useState } from "react";

const MobileNav = () => {
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
      className={`${styles.navMobile}  flex items-center justify-between text-[14px] lg:hidden   text-[#323E73]`}
    >
      <input
        className={`${styles.toggleNav} hidden`}
        id="toggle_nav"
        type="checkbox"
        title="toggle_nav"
      />
      <label
        htmlFor="toggle_nav"
        className={`${styles.labelToggleNav} cursor-pointer `}
      >
        <svg
          className=" w-[35px]"
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
              d="M4 17H20M4 12H20M4 7H20"
              stroke={darkTheme ? "#fff" : "#000000"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </label>
      <ul
        className={` ${styles.listNavMobile} ${
          !darkTheme ? "text-black" : "text-white"
        } ${darkTheme ? "bg-slate-950" : "bg-white"}`}
      >
        <NavItems />
      </ul>
    </div>
  );
};

export default MobileNav;
