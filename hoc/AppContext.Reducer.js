import { setLocalStorageItem } from "../utils/localStorage";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./AppContext.Types";

export const appReducer = (state, action) => {
  console.log(action, "acc");
  const { type, payload } = action;
  switch (type) {
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

    default: {
      return state;
    }
  }
};
