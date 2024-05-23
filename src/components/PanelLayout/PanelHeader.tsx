import { RootState } from "../../features/store";
import { useSelector } from "react-redux";
import MobileNav from "../header/MobileNav";
import HeaderNav from "../header/HeaderNav";
import HeaderLeft from "../header/HeaderLeft";
import PanelLogo from "../common/logo/PanelLogo";
import PanelHeaderLeft from "./PanelHeaderLeft";

type Props = {};

export default function PanelHeader({}: Props) {
  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[10000] 
        ${darkTheme ? "bg-slate-950 text-white" : " bg-white"}
`}
    >
      <div className="container max-w-[1320px] flex  max-lg:px-8 mx-auto items-center py-4 gap-10 font-inter pr-6 max-lg:justify-between">
        <MobileNav />
        <PanelLogo />
        <HeaderNav />
        <PanelHeaderLeft />
      </div>
    </div>
  );
}
