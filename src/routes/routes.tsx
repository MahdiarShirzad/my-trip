import { RouteObject } from "react-router-dom";
import Home from "../screens/Home/Home.tsx";
import Hotel from "../screens/Hotels/Hotel.tsx";

const routes: RouteObject[] = [
  {
    // id: "home",
    path: "/",
    element: <Home />,
  },
  {
    path: "/hotels",
    element: <Hotel />,
  },
];

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { routes, routers };
