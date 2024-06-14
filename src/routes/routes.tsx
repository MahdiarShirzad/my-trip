import { RouteObject } from "react-router-dom";
import Home from "../screens/Home/Home.tsx";
import Hotel from "../screens/Hotels/Hotel.tsx";
import Flight from "../screens/Flight/Flight.tsx";
import Contact from "../screens/Contact/Contact.tsx";
import Login from "../screens/Auth/Login.tsx";
import SignUp from "../screens/Auth/SignUp.tsx";
import HotelBooking from "../screens/HotelBooking/HotelBooking.tsx";
import FlightBooking from "../screens/FlightBooking/FlightBooking.tsx";
import UserPanel from "../screens/UserPanel/UserPanel.tsx";
import UserProfile from "../screens/UserPanel/UserProfile.tsx";
import UserBookings from "../screens/UserPanel/UserBookings.tsx";
import UserWishList from "../screens/UserPanel/UserWishList.tsx";
import UserSettings from "../screens/UserPanel/UserSettings.tsx";
import UserMessages from "../screens/UserPanel/UserMessages.tsx";
import ForgetPass from "../screens/Auth/ForgetPass.tsx";
import NotFound from "../screens/NotFound/NotFound.tsx";

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
    path: "/hotels/:id",
    element: <HotelBooking />,
  },
  {
    path: "/flights",
    element: <Flight />,
  },
  {
    path: "/flights/:id",
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
  {
    path: "/forgotpass",
    element: <ForgetPass />,
  },
  {
    path: "user-panel",
    element: <UserPanel />,
    children: [
      {
        element: <UserProfile />,
        path: "/user-panel/profile",
      },
      {
        element: <UserBookings />,
        path: "/user-panel/bookings",
      },
      {
        element: <UserWishList />,
        path: "/user-panel/wish-list",
      },
      {
        element: <UserMessages />,
        path: "/user-panel/messages",
      },
      {
        element: <UserSettings />,
        path: "/user-panel/settings",
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
