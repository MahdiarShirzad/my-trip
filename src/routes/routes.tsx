import { RouteObject } from "react-router-dom";
import Home from "../screens/Home/Home.tsx";
import Hotel from "../screens/Hotels/Hotel.tsx";
import Flight from "../screens/Flight/Flight.tsx";
import Contact from "../screens/Contact/Contact.tsx";
import Login from "../screens/Auth/Login.tsx";
import SignUp from "../screens/Auth/SignUp.tsx";
import HotelBooking from "../screens/HotelBooking/HotelBooking.tsx";
import FlightBooking from "../screens/FlightBooking/FlightBooking.tsx";

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
    path: "/hotel-booking",
    element: <HotelBooking />,
  },
  {
    path: "/flights",
    element: <Flight />,
  },
  {
    path: "/flight-booking",
    element: <FlightBooking />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { routes, routers };
