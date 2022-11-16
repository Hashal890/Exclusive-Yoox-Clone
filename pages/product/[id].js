import { Box, Text, Image, Button, HStack, Stack, useToast } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import { axiosInstance } from "../../utils/axiosConfig";

const SinglePage = ({ data }) => {
  const toast = useToast();

  const addToCart = (itemId) => {
    axiosInstance
      .post(`/api/cart/${itemId}`)
      .then((res) => {
        toast({
          title: "Item added to cart.",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        toast({
          title: err.response.data.message,
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  let m = data.data;
  let discount = Math.round(((m.original_price - m.current_price) / m.original_price) * 100);

  return (
    <Box mt={5}>
      <Stack
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={{ base: "center", md: "flex-start" }}
        gap="24"
      >
        <Box width={{ base: "90%", md: "25%" }} m={{ base: "auto", md: "0" }}>
          <Carousel interval="5000" transitionTime="1000" autoPlay infiniteLoop>
            {m.images.map((el) => {
              return <img src={el} alt={el} />;
            })}
          </Carousel>
        </Box>
        <Box px="5">
          <Text as="b" fontSize="20px">
            {m.title}
          </Text>
          <Text fontSize="2xl">{m.product_type}</Text>
          <HStack mt="30px" mb="20px">
            <Text as="del">₹ {m.original_price}</Text>
            <Text>{discount} % OFF</Text>
          </HStack>
          <Text as="b" fontSize="18px">
            ₹ {m.current_price}
          </Text>
          <Text mt="20px">{m.dominant_color}</Text>
          <Text mb="20px" mt="20px">
            {m.size_fit}
          </Text>
          {m.is_in_stock ? (
            <Button
              w="370px"
              borderRadius={"0px"}
              color={"white"}
              bgColor={"#333333"}
              variant="none"
              onClick={() => addToCart(m._id)}
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              borderRadius={"0px"}
              color={"white"}
              bgColor={"#333333"}
              variant="none"
              disabled={true}
            >
              OUT OF STOCK
            </Button>
          )}

          <br />
          <Button
            fontSize="16px"
            mt="30px"
            w="370px"
            borderRadius={"0px"}
            color={"#333333"}
            bgColor={"#F3F3F3"}
            variant="none"
            onClick={() => addToCart(m._id)}
          >
            ADD TO DREAMBOX
          </Button>
          <br />
          <Button
            fontSize="12px"
            mt="30px"
            w="370px"
            borderRadius={"0px"}
            color={"#333333"}
            bgColor={"#FFFE94"}
            variant="none"
          >
            This item is excluded from all promotional offers.
          </Button>
        </Box>
      </Stack>
      <HStack mt={"25px"} justifyContent={"center"}>
        <hr width="70%" />
      </HStack>
      <HStack justifyContent={"center"}>
        <Box w={"70%"} mt={"20px"} p="25px">
          <Text as={"b"}>SPECIFICATIONS</Text>
          <Text mt={"20px"}>{m.specifications}</Text>
        </Box>
      </HStack>
      <Box w={"70%"} margin={"auto"} display={"flex"} justifyContent={"space-around"}>
        <Box bg={"#F3EFEF"} w={"35%"} mt={"20px"} p="20px">
          <Text fontSize="18px">TYPE</Text>
          <Text mr={"20px"} mt="20px">
            {m.type}
          </Text>
        </Box>
        <Box bg={"#F3EFEF"} w={"35%"} mt={"20px"} p="20px">
          <Text>DESCRIPTION</Text>
          <Text mr={"20px"} mt="20px">
            {m.product_details}
          </Text>
        </Box>
      </Box>
      <HStack mb={"25px"} mt={"25px"} justifyContent={"center"}>
        <hr width="70%" />
      </HStack>
    </Box>
  );
};

export default SinglePage;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const resp = await axios.get(`http://localhost:3000/api/product/${id}`);
  const data = resp.data;
  return {
    props: { data },
  };
};
