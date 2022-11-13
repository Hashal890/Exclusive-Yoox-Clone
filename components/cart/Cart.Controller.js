import {
  GET_CART_SUCCESS,
  POST_PATCH_CART_SUCCESS,
} from "../../hoc/AppContext.Types";
import { axiosInstance } from "../../utils/axiosConfig";

const getCartItems = async (dispatch) => {
  try {
    const res = await axiosInstance.get("/api/carts");
    const data = res.data.data[0].items;
    // console.log(data);
    const total = data.reduce(
      (prev, curr) => prev + curr.item.current_price * curr.quantity,
      0
    );
    // console.log(total);
    dispatch({ type: GET_CART_SUCCESS, payload: { data, total } });
  } catch (err) {
    console.log(err.message);
  }
};

const updateCartItemsCount = async () => {
  try {
    const res = await axiosInstance.patch("/api/carts");
    dispatch({ type: POST_PATCH_CART_SUCCESS, payload: { data, total } });
  } catch (err) {
    console.log(err.message);
  }
};

export { getCartItems, updateCartItemsCount };
