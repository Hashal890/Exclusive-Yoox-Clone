import { clearLocalStorage, setLocalStorageItem } from "../utils/localStorage";
import {
  CHANGE_SELECTED_TYPE,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LOCAL_ITEMS,
  GET_CART_SUCCESS,
  POST_PATCH_CART_SUCCESS,
  DELETE_CART_SUCCESS,
  CHECKOUT_SUCCESS,
} from "./AppContext.Types";

export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOCAL_ITEMS: {
      return { ...state, ...payload };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      setLocalStorageItem("accessToken", payload.accessToken);
      setLocalStorageItem("refreshToken", payload.refreshToken);
      setLocalStorageItem("email", payload.email);
      setLocalStorageItem("name", payload.name);
      return {
        ...state,
        isAuth: true,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
        email: payload.email,
        name: payload.name,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    case LOGOUT: {
      clearLocalStorage();
      return {
        ...state,
        isAuth: false,
        accessToken: "",
        refreshToken: "",
        email: "",
        name: "",
      };
    }
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
    }
    case GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case GET_CART_SUCCESS: {
      // console.log("setting cart items", payload.data);
      return {
        ...state,
        cartData: payload.data,
        totalCartPrice: payload.total,
      };
    }
    case POST_PATCH_CART_SUCCESS: {
      return {
        ...state,
        cartData: payload.data,
        totalCartPrice: payload.total,
      };
    }
    case DELETE_CART_SUCCESS: {
      return {
        ...state,
        cartData: payload.data,
        totalCartPrice: payload.total,
      };
    }
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        cartData: [],
        totalCartPrice: 0,
        orderType: "",
      };
    }
    default: {
      return state;
    }
  }
};
