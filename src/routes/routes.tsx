import { RouteObject } from "react-router-dom";
import Home from "../screens/Home/Home.tsx";
import Hotel from "../screens/Hotels/Hotel.tsx";
import Flight from "../screens/Flight/Flight.tsx";
import Contact from "../screens/Contact/Contact.tsx";
import Login from "../screens/Auth/Login.tsx";

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
  {
    path: "/flights",
    element: <Flight />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { routes, routers };
