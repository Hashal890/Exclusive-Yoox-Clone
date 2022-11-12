import React from 'react'
import { Box,Button,Img,SimpleGrid,Text,Flex} from '@chakra-ui/react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Threebox_div } from '../../components/Threebox_div';
import { MensSlider } from '../../components/Slider/MensSlider';
import { MensBanSlider } from '../../components/Slider/MensBanSlider';
const Home = () => {
var object=
[{id:1,
name:"MAJE",
img:"https://www.yoox.com/images/items/17/17396909JG_14_f.jpg?impolicy=crop&width=306&height=390",
orginalprice:21000,
cutprice:33700,
off:35,
},{id:2,name:"MAJE",
img:"https://www.yoox.com/images/items/13/13825858LJ_14_f.jpg?impolicy=crop&width=306&height=390",
orginalprice:21000,
cutprice:33700,
off:35,}
,{id:3,name:"MAJE",
img:"https://www.yoox.com/images/items/14/14272248QE_14_f.jpg?impolicy=crop&width=306&height=390",
orginalprice:21000,
cutprice:33700,
off:35,
}
,{id:3,name:"MAJE",
img:"https://www.yoox.com/images/items/12/12853015CG_14_f.jpg?impolicy=crop&width=306&height=390",
orginalprice:21000,
cutprice:33700,
off:35,
}
,{id:3,name:"MAJE",
img:"https://www.yoox.com/images/items/17/17396940JF_14_f.jpg?impolicy=crop&width=306&height=390",
orginalprice:21000,
cutprice:33700,
off:35,
}
]

return (
<div>
  <Box  w={"100%"} p={"2rem 0rem"} bg={"green.300"} textAlign={"center"}>
    <Text fontWeight={600}>SINGLES'S DAY: GET UP TO 90% OFF</Text>
  </Box>
<Box w={"100%"}
// height={{base:"60vh",sm:"80vh",md:"100vh"}}
bgImage={"https://secure.social.yoox.it/yspecial/NATALE/2022/hero_v6.png?v=1"}
bgPosition={'center'}
bgRepeat="none"
bgSize='cover'
>

<Box  
textAlign={"center"}
pt={{base:"40vh",sm:"50vh",md:"65vh"}}
color={"white"} >
<Text
fontSize={{base:"0.6rem",sm:"1rem",md:"1.3rem"}}
>Light on! Follow Landon Barker into our fun-filled <br/> Holiday Fair and find the perfect presents</Text>
<Button colorScheme={"#b4fed7"} bg={"transparent"} borderRadius="30px" color={"#b4fed7"}
border="3px solid #b4fed7"
w={{base:"7rem",sm:"12rem",md:"15rem"}}
mt={{base:"1rem",sm:"1rem",md:"1.3rem"}}
fontSize={{base:"0.5rem",sm:"1rem",md:"1.3rem"}}
>
LET THE SHOW BEGIN</Button>
</Box>

</Box>

<Threebox_div
box_1_images="https://www.yoox.com/images/yoox80/banners/6965_2_HL_DM_ROW.png?634485886601286852#width=430&height=600"
box_2_images="https://www.yoox.com/images/yoox80/banners/6824_18_ShoesEdit_M_HL.jpg?634485886601286852#width=430&height=600"
text_2_="  GET UP TO 70%, 80% & 90% OFFEnds November 11th "
text_box_1='GET UP TO 70%, 80% & 90% OFFEnds November 11th'
ulListed="true"/>

<MensSlider/>

<Threebox_div 
box_1_images="https://www.yoox.com/images/yoox80/banners/6825_1_Hugo_Tris_M.jpg?634485886601286852#width=473&height=660"
box_2_images="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_M_Tris.jpg?634485886601286852#width=473&height=660"
box_3_images="https://www.yoox.com/images/yoox80/banners/6825_1_Boss_M_Tris.jpg?634485886601286852#width=473&height=660"
text_2_="  FURLA"
text_box_1="HUGO"
ulListed="false"/>

<MensBanSlider/>
{/* ////////////////////////////\\\\\\\\\\\\\\\\\\\\ */}
<Box  w={"100%"}
bg={'#f3f3f3'}
pt='5rem'
pb={'3rem'}>
<Box w={"80%"}
pt='4rem'ml={'2rem'}
h="90vh"
bgImg={"https://www.yoox.com/images/yoox80/banners/6833_1_8byYoox_Special_WM.png?634485886601286852#width=930&height=660"}>

<Box w={'15rem'}
overflow='hidden'
h="23rem"
boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
borderRadius="30px"
position="absolute"
right={{base:"1rem",sm:"1.5rem",md:"7rem"}}
mt='5rem'
bg='white'>


<Splide aria-label="My Favorite Images"
options={{perPage:1 ,pagination:0}}>
{object.map((e)=>{
return(
<SplideSlide
>
<Box bg={"white"} textAlign={'center'}>
<Img src={e.img} textAlign={'center'}/>
<Text fontWeight='500'>{e.name} </Text>
<Flex justifyContent={"center"} gap={"20px"}>
<Text color={"gray.600"} textDecoration={"line-through"}>${e.cutprice}</Text>
<Text  >{e.off}% OFF</Text>
</Flex>
</Box>
</SplideSlide>
)
})}
</Splide>
</Box>
</Box>
</Box>

{/* ////////////////////////////////////// */}
<SimpleGrid w={{base:"70%",sm:"70%",md:"100%"}}
columns={{base:"1",sm:"1",md:"2"}}
bg='#f3f3f3'
margin='auto'
h="90vh"
>
<Box w={"100%"} margin='auto' >
<Img src="https://www.yoox.com/images/yoox80/banners/6769_1_DesignArtHomedecor_WM_Bottom.png?634485886601286852#width=690&height=637" alt="" />
</Box>
<Box w={"100%"}margin='auto'>
<Img src='https://www.yoox.com/images/yoox80/banners/6895_2_GenZ_M_Bottom.jpg?634485886601286852#width=690&height=637'/>
</Box>
</SimpleGrid>
</div>
)
}
export default Home;