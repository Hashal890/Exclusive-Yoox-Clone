import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs"
const Darkmode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
         <Button bgColor='white'  onClick={toggleColorMode}>
        {colorMode === 'light' ? <BsFillMoonFill/> : <BsFillSunFill color='black'/>}
       </Button>
    </div>
  )
}

export default Darkmode