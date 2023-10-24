import { Box, Text } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import ThreadItem from "@/feautures/threads/components/ThreadItem";
import { ThreadType } from "@/types";
import threadsDummy from "../mocks/threads.json";
import HomeThreadForm from "@/feautures/threads/components/HomeThreadForm";

export default function Thread() {
  const [threads, setThreads] = useState<ThreadType[]>([]);

  useEffect(() => {
    setThreads(threadsDummy);
  }, []);

  return (
    <Fragment>
      <Box flex={1} px={5} py={10} overflow={"auto"} className="hide-scroll">
        <Text fontSize={"2xl"} mb={"10px"}>
          Home
        </Text>
        <HomeThreadForm />
        {threads.map((thread) => (
          <ThreadItem data={thread} />
        ))}
      </Box>
    </Fragment>
  );
}
