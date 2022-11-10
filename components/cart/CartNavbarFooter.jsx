import React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

const CartNavbarFooter = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Link href={"/product"}>
        <Button
          textTransform={"uppercase"}
          borderRadius={0}
          fontWeight={"bold"}
          bg={"whiteAlpha.900"}
          _hover={{ color: "gray", bg: "whiteAlpha.900" }}
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
      </Link>
      <Flex alignItems={"center"} gap={3}>
        <Link href={"/payment"}>
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
        </Link>
        <Text>or</Text>
        <Link href={"/checkout"}>
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
        </Link>
      </Flex>
    </Flex>
  );
};

export default CartNavbarFooter;
