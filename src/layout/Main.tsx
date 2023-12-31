import { Fragment, ReactNode } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";
import SidebarDrawer from "@/components/SidebarDrawer";
import { Link } from "react-router-dom";

export default function Main({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Flex color="white" h={"100vh"}>
        <Sidebar />
        {children}
        <Widget />

        {/* drawer button */}
        <Button
          display={{ base: "flex", lg: "none" }}
          justifyContent={"center"}
          alignItems={"center"}
          colorScheme="green"
          size={"sm"}
          position={"fixed"}
          bottom={"50vh"}
          borderTopStartRadius={0}
          borderBottomStartRadius={0}
          py={5}
          onClick={onOpen}
        >
          <Text fontSize={"xl"}>
            <AiOutlineArrowRight />
          </Text>
        </Button>

        <Drawer
          placement={"left"}
          size={"sm"}
          onClose={onClose}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#2B2B2B"}>
            <DrawerCloseButton color={"white"} />
            <DrawerHeader borderBottomWidth="3px">
              <Link to={"/"}>
                <Heading
                  as="h2"
                  size="3xl"
                  noOfLines={1}
                  color={"green.400"}
                  mb={4}
                >
                  circle
                </Heading>
              </Link>
            </DrawerHeader>
            <DrawerBody mt={4} w={"100%"} p={0}>
              <SidebarDrawer closeDrawer={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Fragment>
  );
}
