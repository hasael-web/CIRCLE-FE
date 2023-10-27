import { Fragment } from "react";
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import HomeThreadForm from "@threads/components/HomeThreadForm";
import ThreadItem from "@threads/components/ThreadItem";
import { useInfiniteThreads } from "@threads/hooks/useThreadsData";
import { ThreadHomeType } from "@/types";

export default function Thread() {
  const {
    isLoading,
    data: threads,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteThreads();

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
                {threads?.pages.map((group, i) => (
                  <Fragment key={i}>
                    {group.data.map((thread: ThreadHomeType) => (
                      <ThreadItem key={thread.id} data={thread} />
                    ))}
                  </Fragment>
                ))}
                <Flex justifyContent={"center"}>
                  {isFetching && isFetchingNextPage ? (
                    <Box textAlign={"center"}>
                      <Spinner size="xl" />
                    </Box>
                  ) : (
                    <>
                      {hasNextPage && (
                        <Button
                          colorScheme="green"
                          size="md"
                          onClick={() => {
                            fetchNextPage();
                          }}
                        >
                          Load More
                        </Button>
                      )}
                    </>
                  )}
                </Flex>
              </>
            )}
          </>
        )}
      </Box>
    </Fragment>
  );
}
