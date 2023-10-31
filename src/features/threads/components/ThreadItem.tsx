import { Fragment, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { ThreadHomeType } from "@/types";
import { usePostLike } from "../hooks/useThreadsData";
import { useAppSelector } from "@/redux/store";

interface ThreadItemPropsInterface {
  data: ThreadHomeType;
}

export default function ThreadItem(props: ThreadItemPropsInterface) {
  const { data: profileData } = useAppSelector((state) => state.profile);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [threadSelected, setThreadSelected] = useState<ThreadHomeType | null>(
    null
  );

  const { mutate } = usePostLike();

  return (
    <Fragment>
      <Flex gap={"15px"} border={"2px solid #3a3a3a"} p={"20px"} mb={"10px"}>
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          src={props.data.user.profile_picture}
          alt={`${props.data.user.fullname} Profile Picture`}
        />
        <Box>
          <Flex mb={"5px"}>
            <Link to={`/profile/${props.data.user.id}`}>
              <Text fontWeight={"bold"} me={"10px"}>
                {props.data.user.fullname}
              </Text>
            </Link>
            <Box mt={"2px"} fontSize={"sm"} color={"gray.400"}>
              <Link to={`/profile/${props.data.user.id}`}>
                @{props.data.user.username}
              </Link>{" "}
              -{" "}
              <Text display={"inline-block"} title={props.data.created_at}>
                {moment(new Date(props.data.created_at)).calendar()}
              </Text>
            </Box>
          </Flex>
          <Text fontSize={"sm"} mb={"10px"} wordBreak={"break-word"}>
            {props.data.content}
          </Text>
          {props.data.image && (
            <Image
              onClick={() => {
                setThreadSelected(props.data);
                onOpen();
              }}
              borderRadius="5px"
              boxSize="350px"
              objectFit="cover"
              src={props.data.image}
              alt={`${props.data.image} Image Thread`}
              mb={"10px"}
              cursor={"pointer"}
            />
          )}
          <Flex gap={"15px"}>
            <Flex alignItems={"center"}>
              <Box onClick={() => mutate(props.data.id)} cursor={"pointer"}>
                {props.data.likes
                  .map((like) => like.user.id)
                  .includes(profileData?.id ? profileData?.id : "") ? (
                  <AiFillHeart
                    style={{
                      fontSize: "20px",
                      marginRight: "5px",
                      marginTop: "1px",
                    }}
                  />
                ) : (
                  <AiOutlineHeart
                    style={{
                      fontSize: "20px",
                      marginRight: "5px",
                      marginTop: "1px",
                    }}
                  />
                )}
              </Box>
              <Text fontSize={"sm"} color={"gray.400"}>
                {props.data.likes.length}
              </Text>
            </Flex>
            <Link to={`/reply/${props.data.id}`}>
              <Flex alignItems={"center"}>
                <BiCommentDetail
                  style={{
                    fontSize: "20px",
                    marginRight: "5px",
                    marginTop: "1px",
                  }}
                />
                <Text fontSize={"sm"} color={"gray.400"}>
                  {props.data.replies} Replies
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size={"xl"}
      >
        <ModalContent borderRadius={0}>
          <ModalCloseButton />
          <ModalBody
            paddingTop={"50px"}
            paddingBottom={"10px"}
            paddingRight={"10px"}
            paddingLeft={"10px"}
            shadow={"dark-lg"}
          >
            <Image
              onClick={onOpen}
              width={"100%"}
              objectFit="cover"
              src={threadSelected?.image}
              alt={`${threadSelected?.image} Image Thread`}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
