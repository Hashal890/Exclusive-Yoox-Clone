import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import ScrollTop from "../components/home/ScrollTop";
import "../styles/globals.css";
import { AppContextProvider } from "../hoc/AppContext";
import Script from "next/script";
import HomeNav from "../components/home/HomeNav";
import BottomNavbar from "../components/home/BottomNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <ChakraProvider>
        <HomeNav />
        <Navbar />
        <BottomNavbar />
        <ScrollTop />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default MyApp;
