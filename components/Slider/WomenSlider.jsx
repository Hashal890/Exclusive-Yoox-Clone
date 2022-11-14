import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Img, Text, Flex } from "@chakra-ui/react";
export const WomenSlider = () => {
  var object = [
    {
      id: 1,
      name: "SPICEZA",
      img: "https://www.yoox.com/images/items/16/16157930OH_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 3100,
      cutprice: 7370,
      off: 45,
    },
    {
      id: 2,
      name: "ALWA",
      img: "https://www.yoox.com/images/items/45/45698461RJ_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 21000,
      cutprice: 33700,
      off: 35,
    },
    {
      id: 3,
      name: "ABZ",
      img: "https://www.yoox.com/images/items/13/13859882NF_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 4100,
      cutprice: 1799,
      off: 32,
    },
    {
      id: 4,
      name: "VINTAZE",
      img: "https://www.yoox.com/images/items/13/13860365EU_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 5100,
      cutprice: 10700,
      off: 52,
    },
    {
      id: 5,
      name: "WOODENS",
      img: "https://www.yoox.com/images/items/14/14270715XR_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 5100,
      cutprice: 10700,
      off: 52,
    },
  ];

  return (
    <div>
      <Box width={"100%"} h="100%" bg="#f3f3f3" margin={"auto"} textAlign="center">
        <Text
          fontSize={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={"300"}
          pt="3rem"
          mb={"3rem"}
        >
          ONE OF A KIND
        </Text>
        <Box w={"95%"} margin={"auto"}>
          <Splide aria-label="My Favorite Images" options={{ perPage: 4, pagination: 0 }}>
            {object.map((e) => {
              return (
                <SplideSlide key={e.name}>
                  <Box bg={"white"} textAlign={"center"}>
                    <Img src={e.img} textAlign={"center"} />
                    <Text fontWeight="500">{e.name} </Text>
                    <Flex justifyContent={"center"} gap={"20px"}>
                      <Text color={"gray.600"} textDecoration={"line-through"}>
                        ₹{e.cutprice}
                      </Text>
                      <Text>{e.off}% OFF</Text>
                    </Flex>
                    <Text fontWeight="700">₹{e.orginalprice}</Text>
                  </Box>
                </SplideSlide>
              );
            })}
          </Splide>
        </Box>
      </Box>
    </div>
  );
};
