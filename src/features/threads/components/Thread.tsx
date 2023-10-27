import { Fragment } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import HomeThreadForm from "@threads/components/HomeThreadForm";
import ThreadItem from "@threads/components/ThreadItem";
import { useThreadsData } from "@threads/hooks/useThreadsData";
import { ThreadHomeType } from "@/types";

export default function Thread() {
  const { isLoading, data: threads, isError, error } = useThreadsData();

  return (
    <Fragment>
      <Box flex={1} px={5} py={10} overflow={"auto"} className="hide-scroll">
        <Text fontSize={"2xl"} mb={"10px"}>
          Home
        </Text>
        <HomeThreadForm />
        {isLoading ? (
          <Box textAlign={"center"}>
            <Spinner size="xl" />
          </Box>
        ) : (
          <>
            {isError ? (
              <h1>{error.message}</h1>
            ) : (
              <>
                {threads.data.map((thread: ThreadHomeType) => (
                  <ThreadItem key={thread.id} data={thread} />
                ))}
              </>
            )}
          </>
        )}
      </Box>
    </Fragment>
  );
}
