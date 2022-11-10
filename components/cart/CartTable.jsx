import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import CartProductCard from "./CartProductCard";

const CartTable = () => {
  return (
    <Table variant="simple" textAlign={"left"}>
      <Thead>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <CartProductCard />
      </Tbody>
    </Table>
  );
};

export default CartTable;
