import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const Darkmode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button variant={"ghost"} onClick={toggleColorMode}>
        {colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill color="white" />}
      </Button>
    </div>
  );
};

export default Darkmode;
