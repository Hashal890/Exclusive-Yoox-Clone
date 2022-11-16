import React from "react";
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
