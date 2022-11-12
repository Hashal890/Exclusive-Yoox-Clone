import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import ReviewLeftSection from "../../components/checkout/ReviewLeftSection";
import RightSection from "../../components/checkout/RightSection";

const Review = () => {
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
