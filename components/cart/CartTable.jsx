import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import { deleteCartItem, updateCartItems } from "./Cart.Controller";
import CartProductCard from "./CartProductCard";

const CartTable = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (index, value) => {
    state.cartData[index].quantity = state.cartData[index].quantity + value;
    updateCartItems(dispatch, state.cartData);
  };

  const handleDelete = (id) => {
    deleteCartItem(dispatch, id);
  };

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
          state.cartData.map((item, index) => {
            const { _id, quantity, item: currItem } = item;
            return (
              <CartProductCard
                key={_id}
                id={currItem._id}
                title={currItem.title}
                qty={quantity}
                image={currItem.images[0]}
                type={currItem.brand}
                available={currItem.type}
                color={currItem.actual_color}
                size={currItem.size}
                actual_price={currItem.original_price}
                discount_price={currItem.current_price}
                index={index}
                handleChange={handleChange}
                handleDelete={handleDelete}
              />
            );
          })}
      </Tbody>
    </Table>
  );
};

export default CartTable;
