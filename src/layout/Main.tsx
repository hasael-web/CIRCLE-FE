import { Fragment, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Flex color="white" h={"100vh"}>
        <Sidebar />
        {children}
        <Widget />
      </Flex>
    </Fragment>
  );
}
