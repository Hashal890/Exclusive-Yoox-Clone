import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ProductViewCard = ({
  image,
  title,
  type,
  color,
  qty,
  actual_price,
  discount_price,
}) => {
  return (
    <Flex fontSize={"13px"} pt={2} pb={2} color={"#333"} gap={3}>
      <Avatar src={image} alt={title} />
      <Box>
        <Text fontWeight={700}>{title}</Text>
        <Text>{type}</Text>
        <Text >{color}</Text>
        <Text>Quantity: {qty}</Text>
        <Flex gap={2}>
          <Text textDecor={"line-through"} fontWeight={400}>
            {actual_price}
          </Text>
          <Text fontWeight={600}>{discount_price}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductViewCard;
