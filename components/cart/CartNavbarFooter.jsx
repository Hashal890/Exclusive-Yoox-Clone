import React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";

const CartNavbarFooter = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Button
        textTransform={"uppercase"}
        borderRadius={0}
        fontWeight={"bold"}
        _hover={{ color: "gray" }}
      >
        <Text
          borderBottom={"2px solid #333"}
          fontWeight={700}
          textTransform={"uppercase"}
          fontSize={"15px"}
        >
          back to shopping
        </Text>
      </Button>
      <Flex alignItems={"center"} gap={3}>
        <Button
          color={"gray.700"}
          textTransform={"uppercase"}
          fontSize={"15px"}
          bg={"#ffc439"}
          _hover={{ bg: "#ffc439" }}
          borderRadius={0}
          p={6}
        >
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            }
            alt={"PayPal Logo"}
            mr={2}
            h={"100px"}
            w={"100px"}
          />
          <Text>checkout</Text>
        </Button>
        <Text>or</Text>
        <Button
          bg={"#333"}
          color={"whiteAlpha.900"}
          fontWeight={700}
          textTransform={"uppercase"}
          fontSize={"15px"}
          _hover={{ bg: "#333" }}
          rightIcon={<GoChevronRight />}
          borderRadius={0}
          p={6}
        >
          <Text>proceed with your order</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartNavbarFooter;
