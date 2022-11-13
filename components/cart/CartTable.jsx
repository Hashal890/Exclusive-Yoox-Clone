import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import CartProductCard from "./CartProductCard";

const CartTable = () => {
  const { state } = useContext(AppContext);

  return (
    <Table variant="simple" textAlign={"left"}>
      <Thead>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {state.cartData &&
          state.cartData.map((item) => {
            const { _id, quantity, item: currItem } = item;
            return (
              <CartProductCard
                key={_id}
                title={currItem.title}
                qty={quantity}
                image={currItem.images[0]}
                type={currItem.brand}
                available={currItem.type}
                color={currItem.actual_color}
                size={currItem.size}
                actual_price={currItem.original_price}
                discount_price={currItem.current_price}
              />
            );
          })}
      </Tbody>
    </Table>
  );
};

export default CartTable;
