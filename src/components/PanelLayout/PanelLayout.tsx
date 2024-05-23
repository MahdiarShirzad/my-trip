import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import PanelHeader from "./PanelHeader";
import { RootState } from "../../features/store";

type Props = { children: React.ReactNode };

export default function PanelLayout({ children }: Props) {
  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`${
        darkTheme ? `bg-slate-900` : `bg-[#f5f7fc]`
      } -z-0 relative `}
    >
      <PanelHeader />
      {children}
      <Footer />
    </div>
  );
}
