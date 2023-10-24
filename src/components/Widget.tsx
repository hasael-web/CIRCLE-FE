import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import suggesteds from "../mocks/suggesteds.json";
import SuggestedUser from "@/feautures/threads/components/SuggestedUser";
import Watermark from "@/feautures/threads/components/Watermark";

export default function Widget() {
  return (
    <Fragment>
      <Box
        w={"32%"}
        px={10}
        py={10}
        style={{ borderLeft: "3px solid #3a3a3a" }}
        overflow={"auto"}
        className="hide-scroll"
      >
        <Card bg={"#3a3a3a"} color={"white"} mb={"15px"}>
          <CardBody py={4} px={5}>
            <Text fontSize={"xl"} mb={3}>
              My Profile
            </Text>
            <Box position={"relative"}>
              <Image
                src="https://cdn.pnghd.pics/data/607/green-gradient-background-hd-28.jpg"
                alt="Green Gradient"
                borderRadius={"10px"}
                width={"100%"}
                height={"80px"}
                objectFit={"cover"}
              />
              <Image
                borderRadius="full"
                border={"5px solid #3a3a3a"}
                boxSize="75px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                position={"absolute"}
                top={"40px"}
                left={"20px"}
              />
              <Button
                color={"white"}
                _hover={{ bg: "#38a169", borderColor: "#38a169" }}
                size="sm"
                borderRadius={"full"}
                variant="outline"
                position={"absolute"}
                bottom={"-50px"}
                right={"0px"}
              >
                Edit Profile
              </Button>
            </Box>
            <Text fontSize={"2xl"} mt={"40px"} fontWeight={"bold"}>
              Dan Abramov
            </Text>
            <Text fontSize={"sm"} color={"gray.400"}>
              @danabrara
            </Text>
            <Text fontSize={"md"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
            <Flex mt={"10px"} gap={3}>
              <Box fontSize={"md"}>
                117{" "}
                <Text display={"inline"} color={"gray.400"}>
                  Following
                </Text>
              </Box>
              <Box fontSize={"md"}>
                221{" "}
                <Text display={"inline"} color={"gray.400"}>
                  Followers
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>

        <Card bg={"#3a3a3a"} color={"white"} mb={"15px"}>
          <CardBody py={4} px={5}>
            <Text fontSize={"xl"} mb={3}>
              Suggested For You
            </Text>
            {suggesteds.map((suggested) => (
              <SuggestedUser data={suggested} />
            ))}
          </CardBody>
        </Card>

        <Watermark />
      </Box>
    </Fragment>
  );
}
