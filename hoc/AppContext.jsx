import { createContext, useReducer } from "react";
import { getLocalStorageItem } from "../utils/localStorage";
import { appReducer } from "./AppContext.Reducer";

const AppContext = createContext();
let initData = "";

if (typeof window == undefined) {
  initData = {
    accessToken: getLocalStorageItem("accessToken") || "",
    refreshToken: getLocalStorageItem("accessToken") || "",
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
}

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initData);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
