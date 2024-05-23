import { Outlet } from "react-router-dom";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import Sidebar from "./Sidebar";

type Props = {};

export default function UserPanel({}: Props) {
  return (
    <PanelLayout>
      <div className="  container max-w-[1320px] mx-auto flex items-start  justify-between py-32">
        <Sidebar />
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </PanelLayout>
  );
}
