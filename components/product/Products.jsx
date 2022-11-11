import { Accordion, AccordionButton, AccordionIcon, Button,AccordionItem, AccordionPanel, Box,Checkbox,Grid,GridItem,Text,Image } from '@chakra-ui/react'
import {  AddIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import axios from "axios"
import Link from "next/link"
import { FiHeart } from 'react-icons/fi'
const Products = () => {
   const [data,setData]=useState([])
       let y= axios.get("https://myownapitodo.herokuapp.com/Cosmetics").then((res)=>setData(res.data))
       console.log(y)
      
   
  return (
<Box>
    <Text >CLOTHING NEW ARRIVALS</Text>

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

        <Box width="70%" >
          <Grid gap="50px" templateColumns='repeat(3, 1fr)' >
            {
                data.map((el)=>{return(<>
                <Link href={`/product/${el.id}`}><Box w='sm' >
                    <Image boxSize='200px' src={el.image[0]} alt={el.name}/>
                    <Box display="flex" justifyContent="space-between">
                        <FiHeart/>
                        <Box display="flex">
                        <Text >-</Text>
                        <Text>NEW</Text>
                        <Text >-</Text>
                        </Box>

                    </Box>
                    <hr/>
                    <Box  >
                      <Text textAlign='center'>{el.name}</Text>
                      <Text textAlign='center'>RS. {el.price}</Text>
                      <Text textAlign='center'>{el.ratingValue}</Text>
                      <Text textAlign='center'>{el.category[0]} </Text>
                      <Button>ADD TO DREAM BOX</Button>
                    </Box>
                    

                </Box></Link>
                </>)})
            }
          </Grid>
        </Box>

    </Box>

</Box>

  )
}

export default Products