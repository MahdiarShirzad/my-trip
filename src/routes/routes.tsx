import { RouteObject } from "react-router-dom";
import Home from "../screens/Home/Home.tsx";

const routes: RouteObject[] = [
  {
    // id: "home",
    path: "/",
    element: <Home />,
  },
];

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { routes, routers };
