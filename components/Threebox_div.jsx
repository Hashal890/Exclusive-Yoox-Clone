import React from 'react'
import { Box,Button,Img,ListItem,SimpleGrid,Text, UnorderedList} from '@chakra-ui/react'
// import { Product_slider } from './Product_slider'
export const Threebox_div = ({box_1_images,
    box_2_images,
    text_2_,ulListed
    ,box_3_images,
    text_box_1}) => {
return (
<div>
<SimpleGrid
width={"100%"}
bg='#f3f3f3'
h="100%"
columns={{base:1,sm:1,md:3}}
padding={{base:'1rem',sm:'1rem',md:'4rem'}}
>

<Box 
margin={'auto'} 
width={{base:"80%",sm:"80%",md:"100%"}}
h={{base:"70%",sm:"70%",md:"90%"}}>

<Img style={{height:"100%",width:"100%"}}
src={box_1_images} alt="" />

<Text fontWeight={'1000'}
textAlign='center' mt={"20px"}>
{text_box_1}
</Text>
<Text mt={"30px"} textDecoration={"underline"} fontWeight={'200'}
textAlign='center'>SHOP NOW</Text>
</Box>


<Box width={{base:"80%",sm:"80%",md:"100%"}}
margin='auto'
h={{base:"56vh",sm:"72vh",md:"80vh"}}
mt={{base:"6vh",sm:"0vh",md:"-3vh"}}
textAlign='center'
bg={ulListed=='true' ? 'white':""}
>
    {ulListed=='true' ?
<UnorderedList listStyleType={'none'}
lineHeight={{base:"2rem",sm:"2.4rem",md:"2.6rem"}}
fontWeight={700}>
<ListItem color={'grey'} fontWeight={300} > DESIGNER</ListItem>
<ListItem> DOLCE & GABBANA</ListItem>
<ListItem>ROBERTO CAVALLI</ListItem>
<ListItem>DSQUARED2</ListItem>
<ListItem>MARNI</ListItem>
<ListItem>BALENCIAGA</ListItem>
<ListItem>MAISON MARGIELA</ListItem>
<ListItem>CHLOÉ</ListItem>
<ListItem>STELLA MCCARTNEY</ListItem>
<ListItem>PRADA</ListItem>
<ListItem>GUCCI</ListItem>

</UnorderedList>:""}
    <Img src={box_3_images}/>
</Box>
<Box margin={'auto'}width={{base:"80%",sm:"80%",md:"100%"}}
h={{base:"70%",sm:"70%",md:"90%"}}
>
<Img style={{height:"100%",width:"100%"}}
src={box_2_images} alt="" />

<Text fontWeight={'1000' }
mt={"20px"}
textAlign='center'>
{text_2_}
</Text>
<Text mt={"30px"} textDecoration={"underline"} fontWeight={'200'}
textAlign='center'>SHOP NOW</Text>
</Box>
</SimpleGrid>
{/* ////////////////////////// */}

</div>
)
}