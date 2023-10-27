import { Fragment, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
} from "@chakra-ui/react";
import moment from "moment";
import { ThreadsType } from "@/types";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

interface ThreadItemPropsInterface {
  data: ThreadsType;
}

export default function ThreadItem(props: ThreadItemPropsInterface) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [threadSelected, setThreadSelected] = useState<ThreadsType | null>(
    null
  );

  return (
    <Fragment>
      <Flex gap={"15px"} border={"2px solid #3a3a3a"} p={"20px"} mb={"10px"}>
        <Link to={`/profile/${props.data.user.id}`} style={{ height: "40px" }}>
          <Image
            borderRadius="full"
            boxSize="40px"
            objectFit="cover"
            src={props.data.user.profile_picture}
            alt={`${props.data.user.fullname} Profile Picture`}
          />
        </Link>
        <Box>
          <Flex mb={"5px"}>
            <Link to={`/profile/${props.data.user.id}`}>
              <Text fontWeight={"bold"} me={"10px"}>
                {props.data.user.fullname}
              </Text>
            </Link>
            <Box mt={"2px"} fontSize={"sm"} color={"gray.400"}>
              <Link to={`/profile/${props.data.user.id}`}>
                {props.data.user.username}
              </Link>{" "}
              -{" "}
              <Text display={"inline-block"} title={props.data.created_at}>
                {moment(new Date(props.data.created_at))
                  .startOf("hour")
                  .fromNow()}
              </Text>
            </Box>
          </Flex>
          <Text fontSize={"sm"} mb={"10px"}>
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
              <AiOutlineHeart
                style={{
                  fontSize: "20px",
                  marginRight: "5px",
                  marginTop: "1px",
                }}
              />
              <Text fontSize={"sm"} color={"gray.400"}>
                {props.data.likes}
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
