import React from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";

const CartProductCard = () => {
  return (
    <Flex justifyContent={"space-evenly"} color={"#333"}>
      <Flex>
        <Avatar
          src={
            "https://www.yoox.com/images/items/50/50259024gm_14_f.jpg?width=63&height=80&impolicy=crop&gravity=Center"
          }
          alt={"sample"}
        />
        <Box>
          <Text>BAUME & MERCIER</Text>
          <Text>Wrist watches</Text>
          <Text>Limited availability</Text>
        </Box>
      </Flex>
      <Box>Black</Box>
      <Box>
        <Flex>
          <Button>+</Button>
          <Button>1</Button>
          <Button>-</Button>
        </Flex>
        <Button
          leftIcon={<ImCross />}
          fontSize={"13px"}
          textTransform={"uppercase"}
        >
          Remove
        </Button>
      </Box>
      <Box>$ 1,475.00</Box>
    </Flex>
  );
};

export default CartProductCard;
