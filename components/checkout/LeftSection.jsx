import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { SiPaytm, SiRazorpay } from "react-icons/si";
import CheckoutForm from "./CheckoutForm";

const initCheckoutDetails = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  state: "",
  country: "",
};

const LeftSection = () => {
  const email = "";
  const [checkoutDetails, setCheckoutDetails] = useState(initCheckoutDetails);

  const handleCheckoutDetailsChange = (e) => {
    const { name, value } = e.target;
    setCheckoutDetails({
      ...checkoutDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <Box w={["100%", "70%", "70%"]} mb={5}>
      <Flex
        justifyContent={"space-between"}
        mb={5}
        bg={"whiteAlpha.900"}
        p={"48px"}
      >
        <Box>
          <Flex alignItems={"center"} gap={3} mb={5}>
            <IconButton
              icon={<BsCheckLg />}
              bg={"transparent"}
              color={"rgb(36, 154, 65)"}
              _hover={{ bg: "transparent", color: "rgb(36, 154, 65)" }}
              fontSize={"2xl"}
            />
            <Text color={"#333333"} fontSize={"26px"} fontWeight={"bold"}>
              E-mail
            </Text>
          </Flex>
          <Text>
            You are ordering as{" "}
            <span style={{ fontWeight: "bold" }}>
              {email === undefined || email === "" ? "EMAIL-ID" : email}
            </span>
          </Text>
        </Box>
        <Link href={"/login"}>
          <Button
            textTransform={"uppercase"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
          >
            modify
          </Button>
        </Link>
      </Flex>
      <CheckoutForm
        email={email === undefined || email === "" ? "EMAIL-ID" : email}
        checkoutDetails={checkoutDetails}
        handleCheckoutDetailsChange={handleCheckoutDetailsChange}
        handleSubmit={handleSubmit}
      />
      <Box
        p={"48px"}
        bg={"whiteAlpha.900"}
        mb={5}
        lineHeight={1.5}
        color={"gray.400"}
        fontWeight={"bold"}
        fontSize={"24px"}
        pb={"70px"}
      >
        Payment
      </Box>
      <Box
        p={"48px"}
        bg={"whiteAlpha.900"}
        mb={5}
        lineHeight={1.5}
        color={"gray.400"}
        fontWeight={"bold"}
        fontSize={"24px"}
        pb={"70px"}
      >
        Review and complete
      </Box>
      <Flex p={2} mb={10} alignItems={"center"}>
        <Text
          color={"#666666"}
          lineHeight={"15px"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          SECURE CHECKOUT
        </Text>
        <Spacer />
        <Text color={"blue.500"} fontSize={"70px"}>
          <FaCcVisa />
        </Text>
        <Spacer />
        <Text color={"red.600"} fontSize={"70px"}>
          <FaCcMastercard />
        </Text>
        <Spacer />
        <Text color={"blue.900"} fontSize={"70px"}>
          <FaCcPaypal />
        </Text>
        <Spacer />
        <Text color={"teal.400"} fontSize={"70px"}>
          <SiRazorpay />
        </Text>
        <Spacer />
        <Text color={"blue.400"} fontSize={"70px"}>
          <SiPaytm />
        </Text>
      </Flex>
    </Box>
  );
};

export default LeftSection;
