import { Box, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export default function Search() {
  return (
    <Fragment>
      <Box flex={1} px={5} py={10} overflow={"auto"} className="hide-scroll">
        <Text fontSize={"2xl"} mb={"10px"}>
          Search Page
        </Text>
      </Box>
    </Fragment>
  );
}
