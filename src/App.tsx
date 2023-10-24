import { Fragment } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./router";

export default function App() {
  return (
    <Fragment>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Fragment>
  );
}
