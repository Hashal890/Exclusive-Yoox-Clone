import { createContext, useReducer } from "react";
import { appReducer } from "./AppContext.Reducer";

const AppContext = createContext();

let initData;

if (typeof window !== undefined) {
  initData = {
    token: localStorage.getItem("token") || "",
    email: "EMAIL-ID",
  };
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
