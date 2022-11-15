import { Avatar, Box, Button, Flex, IconButton, Spacer, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AppContext } from "../../hoc/AppContext";
import { CHECKOUT_SUCCESS } from "../../hoc/AppContext.Types";
import { axiosInstance } from "../../utils/axiosConfig";

const ReviewLeftSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const toast = useToast();
  const router = useRouter();

  const initPayment = (data) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Yoox Order Payment",
      description: "Test Transaction",
      image: "https://www.psdstamps.com/wp-content/uploads/2022/04/grunge-exclusive-label-png.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axiosInstance.post("/api/orders/verify", response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#C15CE5",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleSubmit = async () => {
    if (state.orderType == "razorpay") {
      try {
        const address = Object.values(state.addressData).join(", ");
        const res = await axiosInstance.post("/api/orders", {
          address: address,
        });
        // console.log(res.data);
        await initPayment(res.data.data);
        toast({
          title: "Order placed successfully!",
          status: "success",
          isClosable: true,
          position: `top-right`,
          duration: 3000,
        });
        await dispatch({
          type: CHECKOUT_SUCCESS,
          payload: { address: state.addressData },
        });
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } catch (error) {
        // console.log(error);
        toast({
          title: error.response.data.message,
          status: "error",
          isClosable: true,
          position: `top-right`,
          duration: 3000,
        });
      }
    }
  };

  return (
    <Box w={["100%", "70%", "70%"]} mb={5} color={"#333"}>
      <Flex justifyContent={"space-between"} mb={5} bg={"whiteAlpha.900"} p={"48px"}>
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
              {state.email === undefined || state.email === "" ? "EMAIL-ID" : state.email}
            </span>
          </Text>
        </Box>
        <Link href={"/login"}>
          <Button textTransform={"uppercase"} bg={"transparent"} _hover={{ bg: "transparent" }}>
            modify
          </Button>
        </Link>
      </Flex>
      <Flex justifyContent={"space-between"} mb={5} bg={"whiteAlpha.900"} p={"48px"} pb={"35px"}>
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
            {state.addressData.address} - {state.addressData.zipCode} - {state.addressData.city}
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
          <Button textTransform={"uppercase"} bg={"transparent"} _hover={{ bg: "transparent" }}>
            modify
          </Button>
        </Link>
      </Flex>
      <Flex justifyContent={"space-between"} mb={5} bg={"whiteAlpha.900"} p={"48px"} pb={"35px"}>
        <Box>
          <Flex alignItems={"center"} gap={3} mb={7}>
            <IconButton
              icon={<BsCheckLg />}
              bg={"transparent"}
              color={"rgb(36, 154, 65)"}
              _hover={{ bg: "transparent", color: "rgb(36, 154, 65)" }}
              fontSize={"2xl"}
            />
            <Text color={"#333333"} fontSize={"26px"} fontWeight={"bold"}>
              Payment
            </Text>
          </Flex>
          <Box>
            <Text fontWeight={"700"} color={"gray.500"} fontSize={"15px"} mb={8}>
              1. PAYMENT METHOD :- {state.orderType}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"700"} color={"gray.500"} fontSize={"15px"} mb={3}>
              2. BILLING ADDRESS
            </Text>
            <Text fontSize={"14px"} mb={3}>
              <span style={{ fontWeight: 600 }}>Name:-</span>
              {state.addressData.firstName} {state.addressData.lastName}
            </Text>
            <Text fontSize={"14px"} mb={3}>
              <span style={{ fontWeight: 600 }}>Address:-</span> {state.addressData.address} -{" "}
              {state.addressData.zipCode} - {state.addressData.city}
            </Text>
            <Text fontSize={"14px"} mb={3}>
              <span style={{ fontWeight: 600 }}>Zip Code:-</span> {state.addressData.zipCode}
            </Text>
            <Text fontSize={"14px"} mb={5}>
              <span style={{ fontWeight: 600 }}>Delivery Duration:-</span> Standard - 8-10 business
              days
            </Text>
          </Box>
        </Box>
        <Link href={"/checkout/payments"}>
          <Button textTransform={"uppercase"} bg={"transparent"} _hover={{ bg: "transparent" }}>
            modify
          </Button>
        </Link>
      </Flex>
      <Box p={"48px"} bg={"whiteAlpha.900"} mb={5} lineHeight={1.5}>
        <Text fontWeight={"bold"} fontSize={"24px"}>
          Review and complete
        </Text>
        <Box mt={10} p={5} pl={10} pr={10} border={"1px dotted gray"}>
          <Text mb={3}>Check your information and place order</Text>
          <Text fontWeight={"bold"}>
            IF YOU CHANGE YOUR MIND, YOU CAN RETURN WITHIN 60 DAYS FROM DELIVERY.
          </Text>
        </Box>
        <Text mt={10} pr={15}>
          By <span style={{ fontWeight: "bold" }}>completing your order</span>, you declare that you
          are familiar with and accept YOOX General Terms and Conditions of Sale.
        </Text>
        <Flex fontWeight={"bold"} mt={6}>
          <Text>ORDER TOTAL</Text>
          <Spacer />
          <Text>₹ {state.totalCartPrice}</Text>
        </Flex>
        <Flex flexDir={"row-reverse"}>
          {/* <Link href={"/men"}> */}
          <Button
            p={"12px 100px"}
            bg={"#333333"}
            color={"#ffffff"}
            _hover={{ bg: "#333333", color: "gray.600" }}
            minW={"120px"}
            minH={"48px"}
            borderRadius={0}
            mt={10}
            onClick={handleSubmit}
            disabled={!state.cartData.length}
          >
            COMPLETE YOUR ORDER
          </Button>
          {/* </Link> */}
        </Flex>
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

export default ReviewLeftSection;
