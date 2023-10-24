import { SuggestedType } from "@/types";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";

interface SuggestedUserPropsInterface {
  data: SuggestedType;
}

export default function SuggestedUser(props: SuggestedUserPropsInterface) {
  return (
    <Fragment>
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={3}>
        <Flex gap={2} alignItems={"center"}>
          <Text>
            <Image
              borderRadius="full"
              boxSize="45px"
              objectFit="cover"
              src={props.data.photoProfile}
              alt="Dan Abramov"
            />
          </Text>
          <Box>
            <Text fontSize={"sm"}>{props.data.name}</Text>
            <Text fontSize={"sm"} color={"gray.400"}>
              {props.data.username}
            </Text>
          </Box>
        </Flex>
        <Text>
          {props.data.followed ? (
            <Button
              color={"white"}
              _hover={{ bg: "#38a169", borderColor: "#38a169" }}
              size="sm"
              borderRadius={"full"}
              variant="outline"
            >
              Follow
            </Button>
          ) : (
            <Button
              color={"gray"}
              borderColor={"gray"}
              _hover={{ bg: "#38a169", borderColor: "#38a169", color: "white" }}
              size="sm"
              borderRadius={"full"}
              variant="outline"
            >
              Following
            </Button>
          )}
        </Text>
      </Flex>
    </Fragment>
  );
}
