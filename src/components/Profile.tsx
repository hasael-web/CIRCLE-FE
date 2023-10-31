import { Fragment, useEffect } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getProfile } from "@/redux/user/profileSlice";

export default function Profile() {
  const dispatch = useAppDispatch();
  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <Fragment>
      <Card bg={"#3a3a3a"} color={"white"} mb={"15px"}>
        <CardBody py={4} px={5}>
          <Text fontSize={"xl"} mb={3}>
            My Profile
          </Text>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {isError ? (
                <Alert status="error" bg={"#FF6969"} mb={3} borderRadius={5}>
                  <AlertIcon color={"white"} />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              ) : (
                <>
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
                      bgColor={"#3a3a3a"}
                      border={"5px solid #3a3a3a"}
                      boxSize="75px"
                      objectFit="cover"
                      src={profileData?.profile_picture}
                      alt={profileData?.fullname}
                      position={"absolute"}
                      top={"40px"}
                      left={"20px"}
                    />
                    <Link to={`/profile/${profileData?.id}/edit`}>
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
                    </Link>
                  </Box>
                  <Text fontSize={"2xl"} mt={"40px"} fontWeight={"bold"}>
                    {profileData?.fullname}
                  </Text>
                  <Text fontSize={"sm"} color={"gray.400"}>
                    @{profileData?.username}
                  </Text>
                  <Text fontSize={"md"} mt={1}>
                    {profileData?.bio}
                  </Text>
                  <Flex mt={"10px"} gap={3}>
                    <Box fontSize={"md"}>
                      {profileData?.followings.length}{" "}
                      <Text display={"inline"} color={"gray.400"}>
                        Following
                      </Text>
                    </Box>
                    <Box fontSize={"md"}>
                      {profileData?.followers.length}{" "}
                      <Text display={"inline"} color={"gray.400"}>
                        Followers
                      </Text>
                    </Box>
                  </Flex>
                </>
              )}
            </>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
}