import RouteProvider from "./routes/RouteProvider.tsx";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./features/themeSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Detect system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      dispatch(toggleTheme());
    };
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [dispatch]);

  return <RouteProvider />;
  // ;
};

export default App;
