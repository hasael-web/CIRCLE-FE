import { Box, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export default function ProfilePage() {
  return (
    <Fragment>
      <Box flex={1} px={5} py={10} overflow={"auto"} className="hide-scroll">
        <Text fontSize={"xl"}>Profile Page</Text>
      </Box>
    </Fragment>
  );
}
