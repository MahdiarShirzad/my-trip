import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const activeClass = (isActive: boolean) =>
  isActive
    ? "pb-2 border-b-2 border-[#1A064F] transition-none"
    : "transition-none pb-2";

const NavItems: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  const links: { title: string; path: string; id: number }[] = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Hotels", path: "/Hotels" },
    { id: 3, title: "Flights", path: "/flights" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  return (
    <div className={`max-lg:pt-10 lg:hid `}>
      <div className=" absolute top-8 right-7 lg:hidden">
        <label htmlFor="toggle_nav" className={` cursor-pointer lg:hidden `}>
          <svg
            className=" w-[17px]"
            fill={darkTheme ? "#fff" : "#000"}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 460.775 460.775"
            // xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
            </g>
          </svg>
        </label>
        <input
          className={`${styles.toggleX} hidden`}
          type="checkbox"
          id="toggle_nav"
          name="toggle_nav"
          title="toggle_nav"
        />
      </div>
      <ul className="flex font-semibold flex-col relative lg:flex-row w-full text-#1A064F] transition-none  items-center h-full gap-10 pr-12">
        {links.map((link: { title: string; path: string; id: number }) => (
          <NavLink onClick={scrollToTop} to={link.path}>
            {link.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
