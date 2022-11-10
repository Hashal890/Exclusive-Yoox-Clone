import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import BottomAccordion from "./BottomAccordion";

const BottomSection = () => {
  return (
    <Box>
      <Flex gap={3} alignItems={"start"} mb={5} mt={5}>
        <Box w={3} h={3} bg={"#333"} borderRadius={10} mt={2}></Box>
        <Box>
          <Text fontWeight={"bold"}>
            <span style={{ backgroundColor: "#fffe94", padding: "3px" }}>
              STANDARD -$ 9.95 FREE
            </span>
          </Text>
          <Text>8-10 business days</Text>
          <Text>6 times less CO2 emissions than Express shipping</Text>
        </Box>
      </Flex>
      <Flex gap={3} alignItems={"start"}>
        <Box w={3} h={3} border={"2px"} borderRadius={10} mt={2}></Box>
        <Box>
          <Text fontWeight={"bold"}>EXPRESS - $ 14.95</Text>
          <Text>4-6 business days</Text>
        </Box>
      </Flex>
      <Box fontSize={"13px"} mt={3} mb={3}>
        <Text>
          Most products ship from our warehouse in Italy. Due to the time
          difference between North America and Europe, delivery time will start
          one business day after your order is placed.
        </Text>
        <Text fontWeight={"bold"}>
          Click here to see the days on which we do not ship.
        </Text>
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"500px"}
        border={"1px solid #00917e"}
        p={2}
        pl={5}
        pr={5}
        mb={5}
        mt={5}
      >
        <Box>
          <Text mb={2} color={"#00917e"} fontWeight={"bold"}>
            ECOBOX
          </Text>
          <Text>
            YOOX’s packaging is made entirely from recyclable materials and is
            internationally certified by RESY, FSC, PEFC and SFI for
            environmental, social and economic sustainability.
          </Text>
        </Box>
        <Avatar
          src={"https://www.yoox.com/media/yoox16/icons/svg/ecobox.svg"}
          alt={"ECOBOX_LOGO"}
        />
      </Flex>
      <Box borderTop={"5px solid #f3f3f3"} mb={16}></Box>
      <BottomAccordion />
      <Flex
        justifyContent={"space-between"}
        fontWeight={"bold"}
        mt={5}
        mb={5}
        textAlign={"start"}
      >
        <Text>TOTAL FOR ITEMS</Text>
        <Text>$</Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        fontWeight={"bold"}
        textAlign={"start"}
        mb={5}
      >
        <Box>
          <Text>SHIPPING</Text>
          <Text fontWeight={400} fontSize={"14px"}>
            (The final amount will depend on the shipping method you choose)
          </Text>
        </Box>
        <Text>Free</Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        fontWeight={"bold"}
        mb={5}
        textAlign={"start"}
      >
        <Text>PAYMENT</Text>
        <Text>$ 0.00</Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        fontWeight={"bold"}
        m={"24px 0px"}
        textAlign={"start"}
        fontSize={"1.125rem"}
        pt={8}
        pb={6}
        borderTop={"1px solid #ccc"}
        borderBottom={"2px solid black"}
      >
        <Text>ORDER TOTAL</Text>
        <Text>$</Text>
      </Flex>
    </Box>
  );
};

export default BottomSection;
