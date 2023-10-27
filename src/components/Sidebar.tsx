import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsHouse, BsHouseFill } from "react-icons/bs";
import { RiUserSearchFill, RiUserSearchLine } from "react-icons/ri";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";

export default function Sidebar() {
  const location = useLocation();

  return (
    <Fragment>
      <Box
        w={"20%"}
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
                  {location.pathname === "/" ? <BsHouseFill /> : <BsHouse />}
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Home
                </Text>
              </Box>
            </Link>
            <Link to={"/search"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  {location.pathname === "/search" ? (
                    <RiUserSearchFill />
                  ) : (
                    <RiUserSearchLine />
                  )}
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Search
                </Text>
              </Box>
            </Link>
            <Link to={"/follow"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  {location.pathname === "/follow" ? (
                    <AiTwotoneHeart />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Follows
                </Text>
              </Box>
            </Link>
            <Link to={"/profile"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={6}>
                <Text fontSize={"2xl"}>
                  {location.pathname === "/profile" ? (
                    <FaCircleUser />
                  ) : (
                    <FaRegCircleUser />
                  )}
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
              onClick={() => alert("CREATE POST")}
            >
              Create Post
            </Button>
          </Box>

          <Flex alignItems={"center"} gap={3} mb={6}>
            <Text fontSize={"2xl"}>
              <BiLogOut />
            </Text>
            <Text
              fontSize={"md"}
              mt={1}
              cursor={"pointer"}
              onClick={() => alert("LOGOUT")}
            >
              Logout
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Fragment>
  );
}
