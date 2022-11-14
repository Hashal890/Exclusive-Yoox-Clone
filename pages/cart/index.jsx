import { Box, Heading, Flex, Text, Checkbox } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import BottomSection from "../../components/cart/BottomSection";
import { getCartItems } from "../../components/cart/Cart.Controller";
import CartNavbarFooter from "../../components/cart/CartNavbarFooter";
import CartTable from "../../components/cart/CartTable";
import { AppContext } from "../../hoc/AppContext";

const CartPage = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartItems(dispatch);
  }, []);

  return (
    <Box bgColor={"white"}>
      <Box w={["100%", "90%", "80%"]} m={"auto"} color={"#333"}>
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
            <Text>
              ITEMS ADDED TO YOUR SHOPPING BAG ({state.cartData.length})
            </Text>
          </Flex>
        </Box>
        {state.cartData.length > 0 && <CartTable />}
        <Box
          bg={"#f3f3f3"}
          p={"18px 10px"}
          textAlign={"start"}
          mt={state.cartData.length > 0 ? 5 : 8}
          display={state.cartData.length > 0 ? "block" : "none"}
        >
          <Checkbox colorScheme={"messenger"}>
            <Text textTransform={"uppercase"} fontWeight={700} color={"#333"}>
              buying a gift
            </Text>
          </Checkbox>
        </Box>
        <Box
          mt={25}
          mb={25}
          bg={"#fffe94"}
          h={"55px"}
          lineHeight={"55px"}
          textAlign={"center"}
          fontWeight={400}
        >
          FREE STANDARD SHIPPING ON ORDERS OVER ₹250
        </Box>
        <Box pl={2} borderTop={"5px solid #f3f3f3"} mt={5}>
          <Flex
            gap={2}
            fontWeight={700}
            mb={"10px"}
            mt={"10px"}
            fontSize={"20px"}
            alignItems={"center"}
          >
            <Text>2</Text>
            <Text>|</Text>
            <Text>SELECT SHIPPING METHOD</Text>
          </Flex>
        </Box>
        <BottomSection />
        <CartNavbarFooter />
        <Box mt={20} mb={5} fontSize={"14px"} pb={14}>
          <Text fontWeight={"bold"}>CUSTOMER CARE</Text>
          <Text>
            If you have any questions call us at our toll-free number
            18555294494 (Mon-Fri, 9am to 11pm EST)
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
