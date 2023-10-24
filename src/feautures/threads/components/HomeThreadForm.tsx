import { Box, Button, Flex, FormControl, Image, Input } from "@chakra-ui/react";
import { Fragment } from "react";
import { RiImageAddFill } from "react-icons/ri";

export default function HomeThreadForm() {
  return (
    <Fragment>
      <Flex alignItems={"center"} gap={"10px"} mb={"30px"}>
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <FormControl>
          <Input type="text" placeholder="What is happening?!" />
        </FormControl>
        <Box fontSize={"3xl"} color={"#38a169"} cursor={"pointer"}>
          <RiImageAddFill />
        </Box>
        <Button px={"20px"} colorScheme="green" borderRadius={"full"}>
          Post
        </Button>
      </Flex>
    </Fragment>
  );
}
