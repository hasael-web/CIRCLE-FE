import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { BsHouse, BsHouseFill } from "react-icons/bs";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { RiUserSearchFill, RiUserSearchLine } from "react-icons/ri";
import { useAppSelector } from "@/redux/store";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: profile } = useAppSelector((state) => state.profile);

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
              <Box display={"flex"} alignItems={"center"} gap={3} mb={7}>
                <Text fontSize={"2xl"}>
                  {location.pathname === "/" ? <BsHouseFill /> : <BsHouse />}
                </Text>
                <Text fontSize={"md"} mt={1}>
                  Home
                </Text>
              </Box>
            </Link>
            <Link to={"/search"}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={7}>
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
            <Link to={`/my-profile/${profile?.id}`}>
              <Box display={"flex"} alignItems={"center"} gap={3} mb={7}>
                <Text fontSize={"2xl"}>
                  {location.pathname.includes("/my-profile") ? (
                    <FaCircleUser />
                  ) : (
                    <FaRegCircleUser />
                  )}
                </Text>
                <Text fontSize={"md"} mt={1}>
                  My Profile
                </Text>
              </Box>
            </Link>
            {location.pathname === "/" && (
              <Button
                colorScheme="green"
                size="md"
                width={"100%"}
                borderRadius={"50px"}
                onClick={() => {
                  document.getElementById("insertThread")?.focus();
                }}
              >
                Create Post
              </Button>
            )}
          </Box>

          <Flex alignItems={"center"} gap={3} mb={6}>
            <Text fontSize={"2xl"}>
              <BiLogOut />
            </Text>
            <Text
              fontSize={"md"}
              mt={1}
              cursor={"pointer"}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Fragment>
  );
}
