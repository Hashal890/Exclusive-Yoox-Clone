import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AppContext } from "../../hoc/AppContext";
import ProductViewCard from "./ProductViewCard";

/*
const initSampleChekckoutData = [
  {
    _id: 1,
    image: "https://www.yoox.com/images/items/16/16154424AV_10_F.jpg",
    title: "VALENTINO",
    type: "Overcoats",
    colors: ["Beige"],
    qty: 1,
    actual_price: "₹ 3,229.00",
    discount_price: "₹ 1,594.00",
  },
];
addressData: {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  state: "",
  country: "",
},
*/

const RightSection = () => {
  const { state } = useContext(AppContext);

  return (
    <Box
      w={["100%", "25%", "25%"]}
      mb={5}
      bg={"whiteAlpha.900"}
      pt={8}
      pb={8}
      pl={6}
      pr={6}
      color={"#333"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={7}>
        <Heading fontSize={"25px"} fontWeight={600}>
          Your order
        </Heading>
        <Text>{state.cartData.length} items</Text>
      </Flex>
      <Box mb={5}>
        <Text fontSize={"14px"} fontWeight={"bold"}>
          TOTAL FOR ITEMS
        </Text>
        <Text fontSize={"14px"} fontWeight={500}>
          ₹ {state.totalCartPrice === 9.95 ? "00" : state.totalCartPrice}
        </Text>
      </Box>
      <Box mb={5}>
        <Text fontSize={"14px"} fontWeight={"bold"}>
          SHIPPING
        </Text>
        <Text fontSize={"14px"} fontWeight={500}>
          Standard 8-10 business days
        </Text>
      </Box>
      <Box mb={8}>
        <Text fontSize={"14px"} fontWeight={"bold"}>
          SHIPPING COSTS
        </Text>
        <Text fontSize={"14px"} fontWeight={500}>
          Free
        </Text>
      </Box>
      <Box mb={8}>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          ORDER TOTAL
        </Text>
        <Text fontSize={"20px"} fontWeight={500}>
          ₹ {state.totalCartPrice === 9.95 ? "00" : state.totalCartPrice}
        </Text>
      </Box>
      <hr />
      {state.cartData.length > 0 && (
        <>
          <Text pt={2} pb={2} fontSize={"14px"} fontWeight={"bold"} mt={5}>
            YOU ARE PURCHASING:-
          </Text>
          <Box maxH={"200px"} overflowY={"scroll"}>
            {state.cartData.map((product) => {
              const { _id, quantity, item } = product;
              return (
                <ProductViewCard
                  key={_id}
                  image={item.images[0]}
                  title={item.title}
                  type={item.brand}
                  qty={quantity}
                  available={item.type}
                  color={item.actual_color}
                  size={item.size}
                  actual_price={item.original_price}
                  discount_price={item.current_price}
                />
              );
            })}
          </Box>
          <br />
          <hr />
        </>
      )}
      <Flex justifyContent={"center"} alignItems={"center"} mt={5}>
        <Link href={"/cart"}>
          <Button
            textTransform={"uppercase"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            disabled={!state.cartData.length}
          >
            <span style={{ borderBottom: "1px solid black" }}>modify</span>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default RightSection;
