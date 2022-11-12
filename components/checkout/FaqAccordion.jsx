import { Accordion, Box, Text } from "@chakra-ui/react";
import React from "react";
import AccordionComponent from "./AccordionComponent";

const FaqAccordion = ({ data }) => {
  return (
    <Box w={["100%", "80%", "80%"]} m={"auto"} mt={"64px"}>
      <Text
        mb={9}
        fontSize={"30px"}
        lineHeight={"40px"}
        color={"gray.600"}
        fontWeight={700}
      >
        Frequently Asked Questions
      </Text>
      <Accordion allowToggle mb={14}>
        {data.map((item) => (
          <AccordionComponent
            key={item.id}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </Accordion>
    </Box>
  );
};

export default FaqAccordion;
