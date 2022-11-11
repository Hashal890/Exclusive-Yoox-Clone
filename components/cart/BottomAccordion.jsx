import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BottomAccordion = () => {
  return (
    <Box mb={10} bgColor={"#f3f3f3"}>
      <Accordion allowToggle>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>YOOXCODE</span> Use your
                personal YOOXCODE to access exclusive promotions.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Flex mb={3} mt={1}>
              <Input
                placeholder={"ENTER YOUR CODE"}
                maxW={"300px"}
                bg={"whiteAlpha.900"}
                borderRightRadius={0}
              />
              <Button
                textTransform={"uppercase"}
                borderLeftRadius={0}
                bg={"blackAlpha.900"}
                color={"whiteAlpha.900"}
                _hover={{ bg: "blackAlpha.900", color: "whiteAlpha.900" }}
              >
                apply
              </Button>
            </Flex>
            <Text maxW={"450px"} fontSize={"14px"}>
              The YOOXCODE might not be applicable to certain items The
              following are excluded: Art, items marked “NEW”, Fornasetti,
              Artemide, Flos, Richard Ginori and Montblanc.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default BottomAccordion;
