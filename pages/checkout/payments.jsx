import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import FaqAccordion from "../../components/checkout/FaqAccordion";
import PaymentLeftSection from "../../components/checkout/PaymentLeftSection";
import RightSection from "../../components/checkout/RightSection";

const Payment = () => {
  return (
    <>
      <Box bg={"#f3f3f3"} pt={10}>
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
      <FaqAccordion />
    </>
  );
};

export default Payment;
