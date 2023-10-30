import { Box, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export default function SearchPage() {
  return (
    <Fragment>
      <Box flex={1} px={5} py={10} overflow={"auto"} className="hide-scroll">
        <Text fontSize={"xl"}>Search Page</Text>
      </Box>
    </Fragment>
  );
}
