import { Fragment } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";

export default function Follow() {
  return (
    <Fragment>
      <Flex color="white" h={"100vh"}>
        <Sidebar />
        <h1>Profile</h1>
        <Widget />
      </Flex>
    </Fragment>
  );
}
