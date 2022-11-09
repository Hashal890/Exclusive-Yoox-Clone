import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CartNavbarFooter from "../../components/cart/CartNavbarFooter";
import CartProductCard from "../../components/cart/CartProductCard";

const CartPage = () => {
  return (
    <Box bgColor={"white"}>
      <Box w={["100%", "90%", "70%"]} m={"auto"} color={"#333"}>
        <Heading
          fontWeight={700}
          textTransform={"uppercase"}
          fontSize={"1.375rem"}
          textAlign={"center"}
          m={"20px 0 12px"}
        >
          shopping bag
        </Heading>
        <CartNavbarFooter />
        <Box pl={2} borderTop={"5px solid #f3f3f3"} mt={5}>
          <Flex
            gap={2}
            fontWeight={700}
            mb={"10px"}
            mt={"10px"}
            fontSize={"20px"}
            alignItems={"center"}
          >
            <Text>1</Text>
            <Text>|</Text>
            <Text>ITEMS ADDED TO YOUR SHOPPING BAG (0)</Text>
          </Flex>
        </Box>
        <CartProductCard />
        <CartNavbarFooter />
      </Box>
    </Box>
  );
};

export default CartPage;
