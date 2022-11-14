import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const DesignArtPage = () => {
  return (
    <>
      <Head>
        <title>Exclusive | Design Art</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Box p={50} textAlign={"center"}>
        <Heading>Work is under progress!</Heading>
      </Box>
    </>
  );
};

export default DesignArtPage;
