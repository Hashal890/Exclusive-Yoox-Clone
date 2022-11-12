import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
const ScrollTop = () => {
  const [scrollbutton, setScrollbutton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollbutton(true);
      } else {
        setScrollbutton(false);
      }
    });
  });

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      {scrollbutton && (
        <Button
          bg={"gray.900"}
          color={"white"}
          position={"fixed"}
          zIndex={100}
          bottom={50}
          right={50}
          borderRadius={"none"}
          onClick={scrollup}
        >
          <BiUpArrow />
        </Button>
      )}
    </Box>
  );
};

export default ScrollTop;
