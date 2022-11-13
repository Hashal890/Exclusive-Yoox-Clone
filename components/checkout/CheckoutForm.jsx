import {
  Box,
  Button,
  FormControl,
  Heading,
  Flex,
  Input,
  Text,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AppContext } from "../../hoc/AppContext";
import { ADD_CHECKOUT_ADDRESS } from "../../hoc/AppContext.Types";

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

const CheckoutForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [checkoutDetails, setCheckoutDetails] = useState(initCheckoutDetails);
  const toast = useToast();

  const handleCheckoutDetailsChange = (e) => {
    const { name, value } = e.target;
    setCheckoutDetails({
      ...checkoutDetails,
      [name]: value,
    });
  };

  const giveAlert = ({ title, status }) => {
    return toast({
      title: title,
      status: status,
      position: "top",
      isClosable: true,
    });
  };

  const handleSubmit = () => {
    // console.log(checkoutDetails);
    if (
      checkoutDetails.firstName === "" ||
      checkoutDetails.lastName === "" ||
      checkoutDetails.phoneNumber === "" ||
      checkoutDetails.address === "" ||
      checkoutDetails.zipCode === "" ||
      checkoutDetails.city === "" ||
      checkoutDetails.state === "" ||
      checkoutDetails.country === ""
    ) {
      giveAlert({ title: "Fill all input fields correctly!", status: "error" });
    } else {
      dispatch({
        type: ADD_CHECKOUT_ADDRESS,
        payload: { data: checkoutDetails },
      });
      giveAlert({ title: "Address added to backend!", status: "success" });
    }
  };

  return (
    <Box mb={5} bg={"whiteAlpha.900"} p={"48px"} color={"#333"}>
      <Heading mb={4}>Shipping</Heading>
      <Text mb={7}>Enter shipping details</Text>
      <Flex
        gap={5}
        flexDir={{ base: "column", ms: "column", sm: "column", md: "column" }}
        mb={5}
      >
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"FIRST NAME"}
            name={"firstName"}
            value={checkoutDetails.firstName}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"LAST NAME"}
            name={"lastName"}
            value={checkoutDetails.lastName}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
      </Flex>
      <Flex
        gap={5}
        flexDir={{ base: "column", ms: "column", sm: "column", md: "column" }}
        mb={5}
      >
        <FormControl>
          <Input w={"400px"} placeholder={"C/O"} />
        </FormControl>
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"TELEPHONE"}
            name={"phoneNumber"}
            value={checkoutDetails.phoneNumber}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
      </Flex>
      <Flex
        gap={5}
        flexDir={{ base: "column", ms: "column", sm: "column", md: "column" }}
        mb={5}
      >
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"STREET ADDRESS (NO P.O. BOX)"}
            name={"address"}
            value={checkoutDetails.address}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"ZIP CODE"}
            name={"zipCode"}
            value={checkoutDetails.zipCode}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
      </Flex>
      <Flex
        gap={5}
        flexDir={{ base: "column", ms: "column", sm: "column", md: "column" }}
        mb={5}
      >
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"CITY"}
            name={"city"}
            value={checkoutDetails.city}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"STATE"}
            name={"state"}
            value={checkoutDetails.state}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
      </Flex>
      <Flex
        gap={5}
        flexDir={{ base: "column", ms: "column", sm: "column", md: "column" }}
        mb={5}
      >
        <FormControl>
          <Input
            w={"400px"}
            placeholder={"COUNTRY"}
            name={"country"}
            value={checkoutDetails.country}
            onChange={handleCheckoutDetailsChange}
            required
          />
        </FormControl>
        <FormControl>
          <Input
            type="email"
            defaultValue={
              state.email === undefined || state.email === ""
                ? "EMAIL-ID"
                : state.email
            }
            disabled
            w={"400px"}
          />
        </FormControl>
      </Flex>
      <Checkbox size={"lg"} colorScheme={"facebook"} defaultChecked mb={5}>
        Save this address in MYOOX
      </Checkbox>
      <br />
      <Checkbox size={"lg"} colorScheme={"facebook"} defaultChecked mb={5}>
        Set as default
      </Checkbox>
      <Flex flexDir={"row-reverse"}>
        <Link href={"/checkout/payments"}>
          <Button
            onClick={handleSubmit}
            bg={"#333333"}
            p={"12px 60px"}
            minW={"120px"}
            minH={"48px"}
            borderRadius={"none"}
            _hover={{ color: "#ffffff", bg: "#333333" }}
            color={"#ffffff"}
          >
            SHIP TO THIS ADDRESS
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CheckoutForm;
