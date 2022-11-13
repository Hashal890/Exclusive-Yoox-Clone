import { createContext, useEffect, useReducer } from "react";
import { getLocalStorageItem } from "../utils/localStorage";
import { appReducer } from "./AppContext.Reducer";
import { SET_LOCAL_ITEMS } from "./AppContext.Types";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let initData = {
    accessToken: "",
    refreshToken: "",
    email: "",
    name: "",
    cartData: [],
    addressData: [],
    orderType: "",
    totalCartPrice: 0,
  };
  const [state, dispatch] = useReducer(appReducer, initData);

  useEffect(() => {
    if (getLocalStorageItem("accessToken")) {
      let payload = {
        accessToken: getLocalStorageItem("accessToken"),
        refreshToken: getLocalStorageItem("refreshToken"),
        email: getLocalStorageItem("email"),
        name: getLocalStorageItem("name"),
      };
      dispatch({ type: SET_LOCAL_ITEMS, payload });
    }
  }, []);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
