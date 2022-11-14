import React, { useContext, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import ReviewLeftSection from "../../components/checkout/ReviewLeftSection";
import RightSection from "../../components/checkout/RightSection";
import { getCartItems } from "../../components/cart/Cart.Controller";
import { AppContext } from "../../hoc/AppContext";
import Head from "next/head";

const Review = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartItems(dispatch);
  }, []);

  return (
    <>
      <Head>
        <title>Exclusive | Checkout - Review and Order</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Box bg={"#f3f3f3"} pt={10} color={"#333"}>
        <HStack
          w={["100%", "90%", "90%"]}
          m={"auto"}
          gap={10}
          alignItems={"start"}
        >
          <ReviewLeftSection />
          <RightSection />
        </HStack>
      </Box>
    </>
  );
};

export default Review;
