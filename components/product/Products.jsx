import { Accordion, AccordionButton, HStack, Button,AccordionItem, AccordionPanel, Box,Checkbox,Grid,GridItem,Text,Image, } from '@chakra-ui/react'
  import {  AddIcon } from '@chakra-ui/icons'
  import React, { useState ,useEffect} from 'react'
  import axios from "axios"
  import Link from "next/link"
  import { FiHeart } from 'react-icons/fi'
  import {GrView} from "react-icons/gr"
  const Products = () => {
      const [data,setData]=useState([])
      const [page,setPage]=useState(1)

     let m=fetch(`http://localhost:3000/api/products?page=${page}`).then(res => res.json())
 
     useEffect((page)=>{
      let d=m.then(res=>{setData(res.data)})
      
     },[page])
     console.log(data) 
  
    return (
  <Box>
      <Text >CLOTHING NEW ARRIVALS</Text>
      <HStack mb='5' justifyContent={'center'}>
        <Button onClick={()=>setPage(page-1)} disabled={page===1}>PREV</Button>
        <Button>{page}</Button>
        <Button onClick={()=>setPage(page+1)}>NEXT</Button>

      </HStack>
      <Box display="flex" gap="2%">
          <Box ml="4%" width="20%">
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
          <Grid mr='5' gap='20px' templateColumns='repeat(3, 1fr)' >
              {
                  data.map((el)=>{return(<>
                  <Box w='sm' borderWidth='1px'>
                  <Link href={`/product/${el._id}`}><HStack justifyContent={'center'}><Image boxSize='200px' src={el.images[0]} alt={el.name}/></HStack></Link>
                      <Box display="flex" justifyContent="space-between">
                          <Box  ml='5' p='2'><FiHeart/></Box>
                          {/* <GrView /> */}
                         
  
       
     
  
                          <Box display="flex" mr='7'>
                          <Text as='b'>-</Text>
                          <Text as='b'>NEW</Text>
                          <Text as='b'>-</Text>
                          </Box>
  
                      </Box>
                      <HStack mb='3' mt='3' justifyContent={'center'}><hr  width="80%"/></HStack>
                      <Box  >
                        <Text textAlign='center'>{el.brand}</Text>
                        <Text textAlign='center'>RS. {el.original_price}</Text>
                        <Text textAlign='center'>{el.title}</Text>
                        <Text textAlign='center'>{el.product_type} </Text>
                        <HStack justifyContent={'center'}><Button mb='5' mt='5'>ADD TO DREAM BOX</Button></HStack>
                      </Box>
                      
  
                  </Box>
                  </>)})
              }
            </Grid>
          </Box>
  
      </Box>
  
  </Box>
  
    )
  }
  
  export default Products