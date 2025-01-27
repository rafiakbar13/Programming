import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import Products from "./components/Products";
import Example from "./components/UseQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      // ketika user meninggalkan website, maka data tidak akan di fetching ulang
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Products /> */}
        <Example />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
