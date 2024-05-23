import logo from "../../../assets/img/logo/logo.png";
import logo2 from "../../../assets/img/logo/logo-dark.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";

type Props = {};

export default function PanelLogo({}: Props) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div>
      <img
        className=" w-72 max-lg:w-48 max-md:w-32  "
        src={!darkMode ? logo2 : logo}
        alt=""
      />
    </div>
  );
}
