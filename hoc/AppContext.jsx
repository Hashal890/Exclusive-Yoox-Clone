import { createContext, useReducer } from "react";
import { appReducer } from "./AppContext.Reducer";

const AppContext = createContext();

const initData = {
  token: "",
  email: "EMAIL-ID",
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
  totalCartPrice: 0.00,
};

if (typeof window === undefined) {
  initData.token = localStorage.getItem("token") || "";
}

const AppContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(appReducer, initData);

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
