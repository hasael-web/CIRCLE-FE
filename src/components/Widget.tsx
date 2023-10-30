import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { Fragment } from "react";
// import suggesteds from "../mocks/suggesteds.json";
// import SuggestedUser from "@/components/SuggestedUser";
import Watermark from "@/components/Watermark";
import Profile from "./Profile";

export default function Widget() {
  return (
    <Fragment>
      <Box
        w={"31%"}
        px={10}
        py={10}
        style={{ borderLeft: "3px solid #3a3a3a" }}
        overflow={"auto"}
        className="hide-scroll"
      >
        <Profile />

        <Card bg={"#3a3a3a"} color={"white"} mb={"15px"}>
          <CardBody py={4} px={5}>
            <Text fontSize={"xl"} mb={3}>
              Suggested For You
            </Text>
            {/* {suggesteds.map((suggested) => (
              <SuggestedUser data={suggested} />
            ))} */}
          </CardBody>
        </Card>

        <Watermark />
      </Box>
    </Fragment>
  );
}
