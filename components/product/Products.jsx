import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Checkbox,Grid,GridItem,Text } from '@chakra-ui/react'
import {  AddIcon } from '@chakra-ui/icons'
import React from 'react'
import style from "./Product.module.css"
const Products = () => {
  return (
<Box>
    <Text className={style.heading}>CLOTHING NEW ARRIVALS</Text>

    <Box display="flex" gap="10%">
        <Box ml="10%" width="20%">
            <Accordion allowToggle>
             <AccordionItem>
               <h2>
                 <AccordionButton>
                   <Box flex='1' textAlign='left'>
                        CATEGORIES
                   </Box>
                   <AddIcon w={3} h={3} />
                 </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  <Checkbox type="linkedin" >Shoes</Checkbox>
               </AccordionPanel>
             </AccordionItem>

             <AccordionItem>
               <h2>
                 <AccordionButton>
                   <Box flex='1' textAlign='left'>
                        Section 2 title
                   </Box>
                   <AddIcon w={3} h={3} />
                 </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                 <Checkbox type="linkedin" >Shoes</Checkbox>
               </AccordionPanel>
             </AccordionItem>

             <AccordionItem>
               <h2>
                 <AccordionButton>
                   <Box flex='1' textAlign='left'>
                        Section 2 title
                   </Box>
                   <AddIcon w={3} h={3} />
                 </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  <Checkbox type="linkedin" >Shoes</Checkbox>
               </AccordionPanel>
             </AccordionItem>
           </Accordion>
        </Box>

        <Box width="70%">
          <Grid templateColumns='repeat(3, 1fr)' gap={2}>
            <Box>SSSSSSSSSSSSSSSSSSSSS</Box>
            <Box>SSSSSSSSSSSSSS</Box>
            <Box>SSSSSSSSSSSSSS</Box>
            <Box>SSSSSSSSSSSSSS</Box>
            <Box>SSSSSSSSSSSSSS</Box>
            <Box>SSSSSSSSSSSSSS</Box>
          </Grid>
        </Box>

    </Box>

</Box>

  )
}

export default Products