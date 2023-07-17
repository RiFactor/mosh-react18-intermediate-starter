import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     retry: 3, // default number of retries after a failed request
  //     cacheTime: 300_000, // default 5mins; no observer (no component using the query) therefore inactive (removed from cache)
  //     staleTime: 3 * 1000, // default 0, 3 seconds as an example here
  //     // auto-refresh
  //     refetchOnWindowFocus: true, // window refocused
  //     refetchOnReconnect: true, // network reconnected
  //     refetchOnMount: true, // component mounted
  //   },
  // },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
