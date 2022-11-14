import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AppContext } from "../../hoc/AppContext";
import PaymentOptions from "./PaymentOptions";

const PaymentLeftSection = () => {
  const { state } = useContext(AppContext);
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Moving to payment page.",
      status: "info",
      position: "top-right",
      isClosable: true,
    });
  };

  return (
    <Box w={["100%", "70%", "70%"]} mb={5} color={"#333"}>
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
              {state.email === undefined || state.email === ""
                ? "EMAIL-ID"
                : state.email}
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
      <Flex
        justifyContent={"space-between"}
        mb={5}
        bg={"whiteAlpha.900"}
        p={"48px"}
        pb={"35px"}
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
              Shipping
            </Text>
          </Flex>
          <Text fontWeight={"bold"} fontSize={"14px"} mb={3}>
            RECIPIENT
          </Text>
          <Text fontWeight={"bold"} fontSize={"14px"} mb={3}>
            {state.addressData.firstName} {state.addressData.lastName}
          </Text>
          <Text fontSize={"14px"} mb={3}>
            {state.addressData.address} - {state.addressData.zipCode} -{" "}
            {state.addressData.city}
          </Text>
          <Text fontSize={"14px"} mb={5}>
            {state.addressData.zipCode}
          </Text>
          <Text fontWeight={"bold"} fontSize={"14px"} mb={3}>
            SHIPPING METHOD
          </Text>
          <Text fontSize={"14px"} mb={5}>
            Standard - 8-10 business days
          </Text>
        </Box>
        <Link href={"/checkout"}>
          <Button
            textTransform={"uppercase"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
          >
            modify
          </Button>
        </Link>
      </Flex>
      <Box mb={5} bg={"whiteAlpha.900"} p={"48px"}>
        <Text color={"#333333"} fontSize={"26px"} fontWeight={"bold"} mb={3}>
          Payment
        </Text>
        <PaymentOptions />
        <Box mt={3} fontSize={"13px"}>
          <Text fontWeight={700} mb={3}>
            BILLING ADDRESS
          </Text>
          <Checkbox defaultChecked={true}>Use shipping address</Checkbox>
          <Text mt={5}>
            The personal information provided by you when purchasing items will
            be collected by YOOX in order to process your order and for other
            steps necessary to it, including operations related to
            administrative and fiscal obligations.
          </Text>
          <Text>
            The telephone number you enter may be used to provide you with
            information regarding the shipping of your order.
          </Text>
          <Text>
            The data processors are the personnel responsible for managing the
            site and the services related to it, marketing, IT systems and
            administration.
          </Text>
          <Text>
            Consult the{" "}
            <span style={{ textDecoration: "underline" }}>
              <a href="https://www.yoox.com/legal/PrivacyPolicy">
                Privacy Policy
              </a>
            </span>{" "}
            for more information about your rights.
          </Text>
          <Text>
            Consult our{" "}
            <span style={{ textDecoration: "underline" }}>
              <a href="https://www.yoox.com/legal/SalesTerms">
                General Terms and Conditions of Sale
              </a>
            </span>{" "}
            .
          </Text>
        </Box>
        <Flex justifyContent={"flex-end"} mt={3}>
          <Link href={"/checkout/review"}>
            <Button
              p={"12px 150px"}
              bg={"#333333"}
              color={"#ffffff"}
              _hover={{ bg: "#333333", color: "gray.600" }}
              minW={"120px"}
              minH={"48px"}
              borderRadius={0}
              onClick={handleSubmit}
              disabled={!state.cartData.length}
            >
              PROCEED
            </Button>
          </Link>
        </Flex>
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
        <Link href={"/checkout/payments"}>
          <Text
            color={"#666666"}
            lineHeight={"15px"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            SECURE CHECKOUT
          </Text>
        </Link>
        <Spacer />
        <Avatar
          src={
            "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Visa.png"
          }
          alt={"visa"}
          w={"120px"}
          borderRadius={5}
        />
        <Spacer />
        <Avatar
          src={
            "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_mastercard.png"
          }
          alt={"mastercard"}
          w={"120px"}
          borderRadius={5}
        />
        <Spacer />
        <Avatar
          src={
            "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_JCB.png"
          }
          alt={"jcb"}
          w={"120px"}
          borderRadius={5}
        />
        <Spacer />
        <Avatar
          src={
            "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_amex.png"
          }
          alt={"amex"}
          w={"120px"}
          borderRadius={5}
        />
        <Spacer />
        <Avatar
          src={
            "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Discover.png"
          }
          alt={"discover"}
          w={"120px"}
          borderRadius={5}
        />
      </Flex>
    </Box>
  );
};

export default PaymentLeftSection;
