import { Fragment } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useAppSelector } from "@/redux/store";
import { Link } from "react-router-dom";
import { useRegister } from "@/hooks/useRegister";

export default function Register() {
  const { form, handleChange, handleRegister } = useRegister();
  const auth = useAppSelector((state) => state.auth);

  console.log(auth);

  return (
    <Fragment>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <Box width={"100%"} maxWidth={"450px"} p={4} color={"white"}>
          <Heading as="h2" size="3xl" noOfLines={1} color={"green.400"} mb={3}>
            circle
          </Heading>
          <Text fontSize={"xl"} mb={3}>
            Create account Circle
          </Text>
          <FormControl mb={4}>
            <Input
              type="text"
              placeholder="Full Name *"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <Input
              type="email"
              placeholder="Email *"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <Input
              type="password"
              placeholder="Password *"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            borderRadius={"full"}
            colorScheme="green"
            width={"100%"}
            mb={3}
            onClick={handleRegister}
          >
            Register
          </Button>
          <Text>
            Already have account?{" "}
            <Link style={{ color: "#48bb78" }} to={"/login"}>
              Login
            </Link>
          </Text>
        </Box>
      </Flex>
    </Fragment>
  );
}
