import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

export default function Navbar() {
  return (
    <Fragment>
      <Box
        w={"23%"}
        px={50}
        py={10}
        borderRight={"3px solid #3a3a3a"}
        overflow={"auto"}
        className="hide-scroll"
      >
        <Flex flexDir={"column"} justifyContent={"space-between"} h={"100%"}>
          <Box>
            <Link to={"/"}>
              <Heading
                as="h2"
                size="3xl"
                noOfLines={1}
                color={"green.400"}
                mb={8}
              >
                circle
              </Heading>
            </Link>
            <Link to={"/"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  <BsHouse />
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Home
                </Text>
              </Box>
            </Link>
            <Link to={"/search"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  <RiUserSearchLine />
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Search
                </Text>
              </Box>
            </Link>
            <Link to={"/follows"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  <AiOutlineHeart />
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Follows
                </Text>
              </Box>
            </Link>
            <Link to={"/profile"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  <CgProfile />
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Profile
                </Text>
              </Box>
            </Link>
            <Button
              colorScheme="green"
              size="md"
              width={"100%"}
              borderRadius={"50px"}
            >
              Create Post
            </Button>
          </Box>

          <Flex alignItems={"center"} gap={3} mb={6}>
            <Text fontSize={"2xl"}>
              <BiLogOut />
            </Text>
            <Text fontSize={"md"} mt={1} cursor={"pointer"}>
              Logout
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Fragment>
  );
}
