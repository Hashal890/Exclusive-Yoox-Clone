import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./AppContext.Types";

export const appReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
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
    default:
      return state;
  }
};
