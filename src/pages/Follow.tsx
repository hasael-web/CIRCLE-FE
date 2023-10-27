import { Fragment } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";

export default function Profile() {
  return (
    <Fragment>
      <Flex color="white" h={"100vh"}>
        <Sidebar />
        <h1>Follow</h1>
        <Widget />
      </Flex>
    </Fragment>
  );
}
