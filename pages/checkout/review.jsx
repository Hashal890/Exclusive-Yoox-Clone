import React, { useContext, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import ReviewLeftSection from "../../components/checkout/ReviewLeftSection";
import RightSection from "../../components/checkout/RightSection";
import { getCartItems } from "../../components/cart/Cart.Controller";
import { AppContext } from "../../hoc/AppContext";

const Review = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartItems(dispatch);
  }, []);

  return (
    <>
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
