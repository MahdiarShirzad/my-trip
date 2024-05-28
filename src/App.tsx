import RouteProvider from "./routes/RouteProvider.tsx";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./features/themeSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({});

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      dispatch(toggleTheme());
    };
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouteProvider />
    </QueryClientProvider>
  );
};

export default App;
