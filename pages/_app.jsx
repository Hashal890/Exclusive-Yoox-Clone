import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import "../styles/globals.css";
import { AppContextProvider } from "../hoc/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    // <BrowserRouter>
    //   <Provider store={store}>
        <AppContextProvider>
          <ChakraProvider>
            <Navbar />
            <ScrollTop/>
            <Component {...pageProps} />
            <Footer />
          </ChakraProvider>
        </AppContextProvider>
    //   </Provider>
    // </BrowserRouter>
  );
}

export default MyApp;
