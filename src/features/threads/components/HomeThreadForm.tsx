import { Box, Button, Flex, FormControl, Image, Input } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { usePostThread } from "../hooks/useThreadsData";
import { ThreadPostType } from "@/types";

export default function HomeThreadForm() {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const { mutate } = usePostThread();

  const postThread = () => {
    const thread: ThreadPostType = {
      content,
    };
    if (image) thread.image = image;

    mutate(thread);

    setContent("");
    setImage("");
  };

  return (
    <Fragment>
      <Flex alignItems={"center"} gap={"10px"} mb={"30px"}>
        <Image
          borderRadius="full"
          boxSize="40px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov Profile Page"
        />
        <FormControl>
          <Input
            type="text"
            placeholder="What is happening?!"
            value={content}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setContent(event.target.value)
            }
          />
        </FormControl>
        <Box fontSize={"3xl"} color={"#38a169"} cursor={"pointer"}>
          <RiImageAddFill />
        </Box>
        <Button
          px={"20px"}
          colorScheme="green"
          borderRadius={"full"}
          onClick={postThread}
        >
          Post
        </Button>
      </Flex>
    </Fragment>
  );
}
