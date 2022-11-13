import React from "react";
import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import FaqAccordion from "../../components/checkout/FaqAccordion";
import RightSection from "../../components/checkout/RightSection";
import LeftSection from "../../components/checkout/LeftSection";
import { ShippingAccordionItems } from "../../components/checkout/AccordionData";

const CheckoutPage = () => {
  return (
    <>
      <Box
        bg={"#f3f3f3"}
        pt={10}
        color={useColorModeValue("blackAlpha", "whiteAlpha")}
      >
        <HStack
          w={["100%", "90%", "90%"]}
          m={"auto"}
          gap={10}
          alignItems={"start"}
        >
          <LeftSection />
          <RightSection />
        </HStack>
      </Box>
      <FaqAccordion data={ShippingAccordionItems} />
    </>
  );
};

export default CheckoutPage;
