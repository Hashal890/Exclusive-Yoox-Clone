import React from "react";
import { Avatar, Box, Button, Flex, Td, Text, Tr } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";

const CartProductCard = ({
  title,
  image,
  type,
  available,
  color,
  size,
  qty,
  actual_price,
  discount_price,
  off_percentage,
}) => {
  return (
    <Tr border={"none"}>
      <Td>
        <Flex>
          <Avatar src={image} alt={"sample"} />
          <Box>
            <Text fontWeight={700}>{title}</Text>
            <Text>{type}</Text>
            <Text fontWeight={700}>{available}</Text>
          </Box>
        </Flex>
      </Td>
      <Td>
        <Box>{color}</Box>
      </Td>
      <Td>
        <Box>{size}</Box>
      </Td>
      <Td>
        <Box>
          <Flex mb={2}>
            <Button
              bg={"gray.500"}
              color={"whiteAlpha.900"}
              _hover={{ bg: "gray.500", color: "whiteAlpha.900" }}
              fontWeight={"bold"}
              borderRightRadius={"none"}
            >
              -
            </Button>
            <Button
              bg={"gray.100"}
              _hover={{ bg: "gray.100" }}
              borderRadius={"none"}
            >
              {qty}
            </Button>
            <Button
              bg={"gray.500"}
              color={"whiteAlpha.900"}
              fontWeight={"bold"}
              _hover={{ bg: "gray.500", color: "whiteAlpha.900" }}
              borderLeftRadius={"none"}
            >
              +
            </Button>
          </Flex>
          <Button
            leftIcon={<ImCross />}
            fontSize={"13px"}
            textTransform={"uppercase"}
            bg={"none"}
            _hover={{ bg: "none" }}
          >
            Remove
          </Button>
        </Box>
      </Td>
      <Td>
        <Box>
          <Text fontWeight={300} color={"gray.900"} textDecor={"line-through"}>
            {actual_price}
          </Text>
          <Text fontWeight={"bold"}>{off_percentage}</Text>
          <Text>{discount_price}</Text>
        </Box>
      </Td>
    </Tr>
  );
};

export default CartProductCard;
