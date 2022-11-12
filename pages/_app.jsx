import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { store } from "../store/index";
import "../styles/globals.css";
import { AppContextProvider } from "../hoc/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    // <BrowserRouter>
    //   <Provider store={store}>
        <AppContextProvider>
          <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </ChakraProvider>
        </AppContextProvider>
    //   </Provider>
    // </BrowserRouter>
  );
}

export default MyApp;
