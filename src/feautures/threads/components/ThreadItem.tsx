import { ThreadType } from "@/types";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import { Fragment } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

interface ThreadItemPropsInterface {
  data: ThreadType;
}

export default function ThreadItem(props: ThreadItemPropsInterface) {
  return (
    <Fragment>
      <Flex gap={"15px"} border={"2px solid #3a3a3a"} p={"20px"} mb={"10px"}>
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          src={props.data.photoProfile}
          alt="Dan Abramov"
        />
        <Box>
          <Flex mb={"5px"}>
            <Text fontWeight={"bold"} me={"5px"}>
              {props.data.name}
            </Text>
            <Text fontSize={"sm"} color={"gray.400"}>
              {props.data.username} -{" "}
              {moment(props.data.createdAt).startOf("day").fromNow()}
            </Text>
          </Flex>
          <Text fontSize={"sm"} mb={"10px"}>
            {props.data.content}
          </Text>
          <Flex gap={"15px"}>
            <Flex alignItems={"center"}>
              <AiFillHeart
                style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  marginTop: "1px",
                }}
              />
              <Text fontSize={"sm"} color={"gray.400"}>
                {props.data.totalLikes}
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <BiCommentDetail
                style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  marginTop: "1px",
                }}
              />
              <Text fontSize={"sm"} color={"gray.400"}>
                {props.data.totalReplies} Replies
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  );
}
