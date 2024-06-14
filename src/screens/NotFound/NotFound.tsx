import PanelLayout from "../../components/PanelLayout/PanelLayout";

import notFound from "../../assets/img/404.png";
import { Link } from "react-router-dom";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <PanelLayout>
      <div className=" py-12 max-w-[1320px] mx-auto flex flex-col items-center">
        <img className=" mx-auto w-2/5 " src={notFound} alt="" />
        <Link
          className="bg-violet-600  block font-interSemiBold px-3 py-2 rounded-lg text-white"
          to="/"
        >
          Return to Home
        </Link>
      </div>
    </PanelLayout>
  );
}
