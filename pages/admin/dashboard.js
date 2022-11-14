import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
const dashboard = () => {
  return (
    <Box>
      <Head>
        <title>Exclusive | Admin</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Heading>Admin Dashboard</Heading>
    </Box>
  );
};

export default dashboard;
