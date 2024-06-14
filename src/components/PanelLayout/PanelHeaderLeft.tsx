import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { toggleTheme } from "../../features/themeSlice";

import sun from "../../assets/img/sun.svg";
import moon from "../../assets/img/moon.svg";
import UserBtn from "../common/UserBtn/UserBtn";

type Props = {};

export default function PanelHeaderLeft({}: Props) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className=" w-[50%] flex items-center gap-5 font-inter max-md:text-xs max-lg:w-full max-lg:justify-end ">
      <UserBtn />
      <div className=" flex items-center gap-2">
        <div
          onClick={() => dispatch(toggleTheme())}
          className=" font-interBold text-lg max-md:text-base cursor-pointer"
        >
          {darkMode ? (
            <img className=" w-10" src={sun} alt="" />
          ) : (
            <img className=" w-10" src={moon} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}
