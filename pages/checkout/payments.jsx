import React, { useContext, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import FaqAccordion from "../../components/checkout/FaqAccordion";
import PaymentLeftSection from "../../components/checkout/PaymentLeftSection";
import RightSection from "../../components/checkout/RightSection";
import { PaymentAccordionItems } from "../../components/checkout/AccordionData";
import { getCartItems } from "../../components/cart/Cart.Controller";
import { AppContext } from "../../hoc/AppContext";
import Head from "next/head";

const Payment = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartItems(dispatch);
  }, []);

  return (
    <>
      <Head>
        <title>Exclusive | Checkout - Payment</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Box bg={"#f3f3f3"} pt={10} color={"#333"}>
        <HStack
          w={["100%", "90%", "90%"]}
          m={"auto"}
          gap={10}
          alignItems={"start"}
        >
          <PaymentLeftSection />
          <RightSection />
        </HStack>
      </Box>
      <FaqAccordion data={PaymentAccordionItems} />
    </>
  );
};

export default Payment;
