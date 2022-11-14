import React from "react";
import { Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import data from "../../utils/data";
import Products from "../../components/product/Products";
import Head from "next/head";
const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Exclusive | Product</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Products />
    </>
  );
};

export default ProductPage;
