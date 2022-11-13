import { HStack, Link, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { bottonLinks } from "../../utils/data";

const BottomNavbar = () => {
  const [type, setType] = useState("/");
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes("women")) {
      setType("womens");
    } else if (router.pathname.includes("women")) {
      setType("mens");
    }
  });

  return (
    <HStack
      width={"100%"}
      justifyContent="center"
      flexWrap={"wrap"}
      bg={useColorModeValue("gray.700", "white")}
      color={useColorModeValue("white", "gray.700")}
      position={"sticky"}
      top={16}
      py="2"
      gap="2"
      fontSize={"0.9rem"}
      zIndex="100"
    >
      {bottonLinks.map((link) => {
        return (
          <Link as="a" key={link.name} href={`/product/${type}`}>
            {link.name}
          </Link>
        );
      })}
    </HStack>
  );
};

export default BottomNavbar;
