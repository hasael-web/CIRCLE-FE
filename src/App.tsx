import { Fragment } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./router";

const queryCLient = new QueryClient();

export default function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryCLient}>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </Fragment>
  );
}
