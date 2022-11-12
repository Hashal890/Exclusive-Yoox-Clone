import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Img, Text, Flex } from "@chakra-ui/react";
export const Product_slider = () => {
  var object = [
    {
      id: 1,
      name: "PLATINOZ",
      img: "https://www.yoox.com/images/items/16/16176231CO_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 1420,
      cutprice: 25070,
      off: 43,
    },
    {
      id: 2,
      name: "MADAEA",
      img: "https://www.yoox.com/images/items/13/13903930FT_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 21000,
      cutprice: 33700,
      off: 35,
    },
    {
      id: 3,
      name: "LEVES",
      img: "https://www.yoox.com/images/items/12/12969253CM_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 31000,
      cutprice: 43700,
      off: 22,
    },
    {
      id: 4,
      name: "ADDIDA",
      img: "https://www.yoox.com/images/items/13/13919572QB_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 2254,
      cutprice: 4470,
      off: 50,
    },
    {
      id: 5,
      name: "MAJE",
      img: "https://www.yoox.com/images/items/45/45710676CM_14_f.jpg?impolicy=crop&width=306&height=390",
      orginalprice: 3100,
      cutprice: 7370,
      off: 45,
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
          NEW ARRIVALS
        </Text>
        <Box w={"95%"} margin={"auto"}>
          <Splide aria-label="My Favorite Images" options={{ perPage: 4, pagination: 0 }}>
            {object.map((e) => {
              return (
                <SplideSlide>
                  <Box bg={"white"} textAlign={"center"}>
                    <Img src={e.img} textAlign={"center"} />
                    <Text fontWeight="500">{e.name} </Text>
                    <Flex justifyContent={"center"} gap={"20px"}>
                      <Text color={"gray.600"} textDecoration={"line-through"}>
                        ${e.cutprice}
                      </Text>
                      <Text>{e.off}% OFF</Text>
                    </Flex>
                    <Text fontWeight="700">${e.orginalprice}</Text>
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
