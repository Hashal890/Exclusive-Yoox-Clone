import React from "react";
import { Avatar, Box, Button, Flex, Td, Text, Tr } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";

const CartProductCard = ({
  id,
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
  index,
  handleChange,
  handleDelete,
}) => {
  return (
    <Tr border={"none"}>
      <Td>
        <Flex>
          <Avatar src={image} alt={"sample"} size={"xl"} />
          <Box ml={3}>
            <Text fontWeight={700} mb={2}>
              {title}
            </Text>
            <Text mb={2}>{type}</Text>
            <Text fontWeight={600} fontSize={"13px"}>
              {available}
            </Text>
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
              onClick={() => handleChange(index, -1)}
              borderRightRadius={"none"}
              disabled={qty === 1}
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
              onClick={() => handleChange(index, 1)}
              disabled={qty === 5}
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
            onClick={() => handleDelete(id)}
          >
            Remove
          </Button>
        </Box>
      </Td>
      <Td>
        <Box>
          <Text fontWeight={300} color={"gray.900"} textDecor={"line-through"}>
            Actual:- $ {actual_price}
          </Text>
          <Text fontWeight={"bold"}>{off_percentage}</Text>
          <Text>Discount:- $ {discount_price}</Text>
        </Box>
      </Td>
    </Tr>
  );
};

export default CartProductCard;
