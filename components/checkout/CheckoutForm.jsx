import {
  Box,
  Button,
  FormControl,
  Heading,
  Flex,
  Input,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const CheckoutForm = ({
  email,
  checkoutDetails,
  handleCheckoutDetailsChange,
  handleSubmit,
}) => {
  return (
    <Box mb={5} bg={"whiteAlpha.900"} p={"48px"}>
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
          <Input type="email" defaultValue={email} disabled w={"400px"} />
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
