import { Fragment } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ThreadItem from "@/feautures/threads/components/ThreadItem";
import HomeThreadForm from "@/feautures/threads/components/HomeThreadForm";
import { ThreadsType } from "@/types";
import { API } from "@/libs/api";

const fetchThreads = async () => {
  const response = await API.get("/api/v1/threads");
  return response.data;
};

export default function Thread() {
  const {
    isLoading,
    data: threads,
    isError,
    error,
  } = useQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
  });

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
                {threads.data.map((thread: ThreadsType) => (
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
