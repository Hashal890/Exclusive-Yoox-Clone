import { createContext, useReducer } from "react";
import { getLocalStorageItem } from "../utils/localStorage";
import { appReducer } from "./AppContext.Reducer";

const AppContext = createContext();
let initData = {
  accessToken: getLocalStorageItem("accessToken") || "",
  refreshToken: getLocalStorageItem("refreshToken") || "",
  email: getLocalStorageItem("email") || "",
  name: getLocalStorageItem("name") || "",
  cartData: [],
  addressData: [],
  addressData: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
  },
  orderType: "",
  totalCartPrice: 0,
};

const AppContextProvider = ({ children, initData }) => {
  const [state, dispatch] = useReducer(appReducer, initData);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
