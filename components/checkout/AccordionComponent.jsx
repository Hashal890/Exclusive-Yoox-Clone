import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const AccordionComponent = ({ title, desc }) => {
  return (
    <AccordionItem>
      <Heading>
        <AccordionButton
          fontSize={"14px"}
          color={"gray.500"}
          fontWeight={500}
          pt={3}
          pb={3}
        >
          <Box flex={1} textAlign={"left"}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4} fontSize={"14px"} color={"gray.500"}>
        {desc}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionComponent;
