import { Fragment } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Thread from "@/components/Thread";
import Widget from "@/components/Widget";

export default function Home() {
  return (
    <Fragment>
      <Flex color="white" h={"100vh"}>
        <Sidebar />
        <Thread />
        <Widget />
      </Flex>
    </Fragment>
  );
}
