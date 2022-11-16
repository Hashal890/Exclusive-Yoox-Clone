import {
  Accordion,
  AccordionButton,
  HStack,
  Button,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Grid,
  GridItem,
  Text,
  Image,
  Select,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import Head from "next/head";
import { axiosInstance } from "../../../utils/axiosConfig";
const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");
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

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  let m = fetch(
    `http://localhost:3000/api/product?ideal_for=women&page=${page}&sortBy=current_price&order=${sort}`
  ).then((res) => res.json());

  useEffect(
    (page, sort) => {
      let d = m.then((res) => {
        setData(res.data);
      });
    },
    [page, sort]
  );

  return (
    <Box>
      <Head>
        <title>Exclusive | Product - Womens</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <HStack justifyContent={"center"} as="b" fontSize="24px" mb="10" mt="5">
        <Text>CLOTHING NEW ARRIVALS</Text>
      </HStack>
      <HStack mb="5" justifyContent={"center"}>
        <Button
          fontSize="12px"
          w="60px"
          borderRadius={"0px"}
          color={"#333333"}
          bgColor={"#FFFE94"}
          variant="none"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          PREV
        </Button>
        <Button
          fontSize="12px"
          w="60px"
          borderRadius={"0px"}
          color={"#333333"}
          bgColor={"#FFFE94"}
          variant="none"
        >
          {page}
        </Button>
        <Button
          fontSize="12px"
          w="60px"
          borderRadius={"0px"}
          color={"#333333"}
          bgColor={"#FFFE94"}
          variant="none"
          onClick={() => setPage(page + 1)}
          disabled={page === 70}
        >
          NEXT
        </Button>
      </HStack>
      <HStack mr="100px" mb="20px" justifyContent={"flex-end"}>
        <Select
          fontSize="12px"
          borderRadius={"0px"}
          color={"#333333"}
          bgColor={"#FFFE94"}
          variant="none"
          width="200px"
          onChange={handleChange}
        >
          <option>Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </HStack>
      <Box display="flex" gap="2%" justifyContent={"space-between"}>
        <Box ml="2%" width="20%">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    CATEGORIES
                  </Box>
                  <AddIcon w={3} h={3} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox type="linkedin">Activewear</Checkbox>
                <br />
                <Checkbox type="linkedin">Coats & Jackets</Checkbox>
                <br />
                <Checkbox type="linkedin">Jeans and Denims</Checkbox>
                <br />
                <Checkbox type="linkedin">Jumpsuits and Overalls</Checkbox>
                <br />
                <Checkbox type="linkedin">Pants</Checkbox>
                <br />
                <Checkbox type="linkedin">Shirts</Checkbox>
                <br />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    SLEEVE STYLE
                  </Box>
                  <AddIcon w={3} h={3} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox type="linkedin">Activewear</Checkbox>
                <br />
                <Checkbox type="linkedin">Coats & Jackets</Checkbox>
                <br />
                <Checkbox type="linkedin">Jeans and Denims</Checkbox>
                <br />
                <Checkbox type="linkedin">Jumpsuits and Overalls</Checkbox>
                <br />
                <Checkbox type="linkedin">Pants</Checkbox>
                <br />
                <Checkbox type="linkedin">Shirts</Checkbox>
                <br />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    DESIGNERS
                  </Box>
                  <AddIcon w={3} h={3} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox type="linkedin">Activewear</Checkbox>
                <br />
                <Checkbox type="linkedin">Coats & Jackets</Checkbox>
                <br />
                <Checkbox type="linkedin">Jeans and Denims</Checkbox>
                <br />
                <Checkbox type="linkedin">Jumpsuits and Overalls</Checkbox>
                <br />
                <Checkbox type="linkedin">Pants</Checkbox>
                <br />
                <Checkbox type="linkedin">Shirts</Checkbox>
                <br />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    PRICE RANGE
                  </Box>
                  <AddIcon w={3} h={3} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox type="linkedin">Activewear</Checkbox>
                <br />
                <Checkbox type="linkedin">Coats & Jackets</Checkbox>
                <br />
                <Checkbox type="linkedin">Jeans and Denims</Checkbox>
                <br />
                <Checkbox type="linkedin">Jumpsuits and Overalls</Checkbox>
                <br />
                <Checkbox type="linkedin">Pants</Checkbox>
                <br />
                <Checkbox type="linkedin">Shirts</Checkbox>
                <br />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box width="70%" mr={"10%"}>
          <Grid gridGap="10px" templateColumns="repeat(3, 1fr)">
            {data.map((el) => {
              return (
                <Box key={el._id} w="310px" mb={"20px"} borderWidth="1px">
                  <Link href={`/product/${el._id}`}>
                    <HStack justifyContent={"center"}>
                      <Image width="250px" src={el.images[0]} alt={el.name} />
                    </HStack>
                  </Link>
                  <Box display="flex" justifyContent="space-between">
                    <Box ml="5" p="2">
                      <FiHeart />
                    </Box>
                    <Box display="flex" mr="7">
                      <Text as="b">-</Text>
                      <Text as="b">NEW</Text>
                      <Text as="b">-</Text>
                    </Box>
                  </Box>
                  <HStack mb="3" mt="3" justifyContent={"center"}>
                    <hr width="80%" />
                  </HStack>
                  <Box>
                    <Text textAlign="center">{el.brand}</Text>
                    <HStack ml={"20px"}>
                      <Text as="del">₹ {el.original_price}</Text>
                      {/* <Text>{discount} % OFF</Text> */}
                    </HStack>
                    <Text ml={"20px"} as="b" fontSize="18px">
                      ₹ {el.current_price}
                    </Text>

                    <Text textAlign="center">{el.title}</Text>
                    <Text textAlign="center">{el.product_type} </Text>
                    <HStack justifyContent={"center"}>
                      <Button
                        fontSize="12px"
                        w="300px"
                        borderRadius={"0px"}
                        color={"#333333"}
                        bgColor={"#FFFE94"}
                        variant="none"
                        my="5"
                        onClick={() => addToCart(el._id)}
                      >
                        ADD TO DREAM BOX
                      </Button>
                    </HStack>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
