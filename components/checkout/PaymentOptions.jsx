import {
  Avatar,
  Box,
  Checkbox,
  Flex,
  FormControl,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../../hoc/AppContext";
import { ADD_CHECKOUT_OPTION } from "../../hoc/AppContext.Types";

const PaymentOptions = () => {
  const { dispatch } = useContext(AppContext);
  const [radioValue, setRadioValue] = useState("razorpay");

  const radioHandleChange = (e) => {
    setRadioValue(e);
    // console.log(radioValue);
    dispatch({ type: ADD_CHECKOUT_OPTION, payload: { radioValue: e } });
  };

  return (
    <Box color={"#333"}>
      <Text mb={3}>Select payment method</Text>
      <RadioGroup onChange={radioHandleChange} defaultValue={"razorpay"}>
        <Flex pt={5} pb={5} alignItems={"center"}>
          <Radio value={"razorpay"}>Razorpay</Radio>
          <Spacer />
          <Text fontWeight={"bold"}>Free</Text>
        </Flex>
        <Flex pt={5} pb={5} alignItems={"center"}>
          <Flex>
            <Radio value={"credit_card"}>Credit Card</Radio>
          </Flex>
          <Spacer />
          <Flex gap={2}>
            <Avatar
              src={
                "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Visa.png"
              }
              alt={"visa"}
              borderRadius={5}
              border={"2px solid black"}
            />
            <Avatar
              src={
                "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_mastercard.png"
              }
              alt={"mastercard"}
              borderRadius={5}
              border={"2px solid black"}
            />
            <Avatar
              src={
                "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_JCB.png"
              }
              alt={"jcb"}
              borderRadius={5}
              border={"2px solid black"}
            />
            <Avatar
              src={
                "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_amex.png"
              }
              alt={"amex"}
              borderRadius={5}
              border={"2px solid black"}
            />
            <Avatar
              src={
                "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Discover.png"
              }
              alt={"discover"}
              borderRadius={5}
              border={"2px solid black"}
            />
          </Flex>
          <Spacer />
          <Text fontWeight={"bold"}>Free</Text>
        </Flex>
        <Flex pt={5} pb={5} alignItems={"center"}>
          <Radio value={"paypal"}>PayPal</Radio>
          <Spacer />
          <Box>
            <Image
              src={
                "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_PayPal_extended_2.png"
              }
              alt={"paypal"}
              w={"70px"}
              // h={"100px"}
            />
            <Text fontSize={"13px"} mt={2}>
              As low as 0% APR for up to 12 months with{" "}
              <span style={{ fontWeight: "bold" }}>PayPal.</span>
            </Text>
            <Text fontSize={"14px"} color={"blue.500"} fontWeight={"bold"}>
              Learn More
            </Text>
          </Box>
          <Spacer />
          <Text fontWeight={"bold"}>Free</Text>
        </Flex>
      </RadioGroup>
      {radioValue === "credit_card" && (
        <Box fontSize={"14px"} mt={3}>
          <Text fontWeight={700} mb={4}>
            NEW CARD
          </Text>
          <Text mb={3}>Enter payment details</Text>
          <Flex
            gap={5}
            flexDir={{
              base: "column",
              ms: "column",
              sm: "column",
              md: "column",
            }}
            mb={5}
          >
            <FormControl>
              <Input w={"400px"} placeholder={"CARD NUMBER"} required />
            </FormControl>
            <Flex gap={2}>
              <Avatar
                src={
                  "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Visa.png"
                }
                alt={"visa"}
                borderRadius={5}
                border={"2px solid black"}
              />
              <Avatar
                src={
                  "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_mastercard.png"
                }
                alt={"mastercard"}
                borderRadius={5}
                border={"2px solid black"}
              />
              <Avatar
                src={
                  "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_JCB.png"
                }
                alt={"jcb"}
                borderRadius={5}
                border={"2px solid black"}
              />
              <Avatar
                src={
                  "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_amex.png"
                }
                alt={"amex"}
                borderRadius={5}
                border={"2px solid black"}
              />
              <Avatar
                src={
                  "https://www.yoox.com/media/yoox/apps/yoox-checkout/payment/credit-cards/img_payment_Discover.png"
                }
                alt={"discover"}
                borderRadius={5}
                border={"2px solid black"}
              />
            </Flex>
          </Flex>
          <Text mb={3}>Enter expiration date</Text>
          <Flex
            gap={5}
            flexDir={{
              base: "column",
              ms: "column",
              sm: "column",
              md: "column",
            }}
            mb={5}
          >
            <FormControl>
              <Select w={"400px"} required>
                <option value="MONTH">MONTH</option>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </Select>
            </FormControl>
            <FormControl>
              <Input w={"400px"} placeholder={"YEAR"} required />
            </FormControl>
          </Flex>
          <Text mb={3}>Enter card holder details</Text>
          <Flex
            gap={5}
            flexDir={{
              base: "column",
              ms: "column",
              sm: "column",
              md: "column",
            }}
            mb={5}
          >
            <FormControl>
              <Input w={"400px"} placeholder={"FIRSTNAME"} required />
            </FormControl>
            <FormControl>
              <Input w={"400px"} placeholder={"LASTNAME"} required />
            </FormControl>
          </Flex>
          <Text fontSize={"14px"} mb={5}>
            YOOX may contact you for further payment verification prior to
            shipping your order. In this case, delivery times may be subject to
            delay.
          </Text>
          <Checkbox size={"lg"} mb={3}>
            <Text fontSize={"14px"}>Save this card in MYOOX</Text>
          </Checkbox>
          <br />
          <Checkbox size={"lg"} mb={6}>
            <Text fontSize={"14px"}>Set as default</Text>
          </Checkbox>
        </Box>
      )}
    </Box>
  );
};

export default PaymentOptions;
