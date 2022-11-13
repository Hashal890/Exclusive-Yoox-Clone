import {
  Button,
  Divider,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillUnlock, AiFillCaretDown } from "react-icons/ai";
import Darkmode from "./Darkmode";
import { AppContext } from "../hoc/AppContext";
const HomeNav = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state, "aaa");
  return (
    <>
      <HStack
        zIndex={100}
        bg={useColorModeValue("white", "gray.900")}
        w={"100%"}
        justifyContent={"space-around"}
        textDecoration={"underline"}
      >
        <Flex gap={"1rem"} fontSize={"sm"} fontWeight={"bold"}>
          <HStack cursor={"pointer"}>
            <Text>INDIA</Text>
            <AiFillCaretDown />
          </HStack>
          <Text cursor={"pointer"}>CUSTOMER CARE</Text>
        </Flex>
        {state.accessToken ? (
          <HStack>
            <Text>{state.name}</Text>
            <Button variant={"ghost"}>Logout</Button>
          </HStack>
        ) : (
          <Flex gap={"1rem"} alignItems={"center"}>
            <Link href={"/signup"}>
              <HStack _hover={{ bg: "gray.200" }} padding={"3px"} borderRadius={"2px"}>
                <FaPencilAlt />
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Register
                </Text>
              </HStack>
            </Link>
            <Link href={"/login"}>
              <HStack _hover={{ bg: "gray.200" }} padding={"3px"} borderRadius={"2px"}>
                <AiFillUnlock />
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Login
                </Text>
              </HStack>
            </Link>
            <Darkmode />
          </Flex>
        )}
      </HStack>
      <Divider />
    </>
  );
};

export default HomeNav;
