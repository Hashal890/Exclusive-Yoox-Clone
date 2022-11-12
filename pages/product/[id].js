import { Box ,Text,
  Container,
  List,
  Stack,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  ListItem,
  HStack,} from '@chakra-ui/react'
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import axios from "axios"
import "react-image-gallery/styles/css/image-gallery.css"
const SinglePage = ({data}) => {
  let m=data.data
  let discount=Math.round(((m.original_price-m.current_price)/m.original_price)*100)
  
  
  return (
    <Box mt='50px'>
    <Box display={'flex'} justifyContent={'space-around'}>
      <Box w='20%' ml='170px'>
       
        <Carousel  showArrows={true} showThumbs={false} showBullets={true} autoPlay interval="5000" transitionTime="2000" infiniteLoop>
          {
            m.images.map((el)=>{
              return(
                <Image width="200px" src={el} alt={el}/>
              )
            })
          }
        </Carousel>
      </Box>
      <Box mt='20px' mr='200px'>

        <Text as='b'fontSize='20px'>{m.title}</Text>
        <Text fontSize='2xl'>{m.product_type}</Text>
        <HStack mt='30px' mb='20px'>
          <Text as='del'>US$ {m.original_price}</Text>
          <Text>{discount} % OFF</Text>
        </HStack>
        <Text as='b'fontSize='18px'>US$ {m.current_price}</Text>
        <Text mt='20px'>{m.dominant_color}</Text>
        <Text mb='20px' mt='20px'>{m.size_fit}</Text>
        {
          m.is_in_stock?<Button w='370px' borderRadius={"0px"} color={'white'} bgColor={'#333333'} variant='none'>ADD TO CART</Button>:<Button borderRadius={"0px"} color={'white'} bgColor={'#333333'} variant='none' disabled={true}>OUT OF STOCK</Button>
        }
        
        {/* #F3F3F3 */}
        <br/><Button fontSize='16px'  mt='30px' w='370px' borderRadius={"0px"} color={'#333333'} bgColor={'#F3F3F3'} variant='none'>ADD TO DREAMBOX</Button>
        <br/><Button fontSize='12px' mt='30px' w='370px' borderRadius={"0px"} color={'#333333'} bgColor={'#FFFE94'} variant='none'>This item is excluded from all promotional offers.</Button>

      </Box>

    </Box>
  <HStack mt={'25px'} justifyContent={'center'}> <hr width='70%'/></HStack>
    <HStack justifyContent={'center'}>
    <Box w={'70%'} mt={'20px'}> 
      <Text as={'b'} mb='20px' ml={'40px'}>SPECIFICATIONS</Text>
      <Text mr='200px'mt='30px' mb='20px'>{m.specifications}</Text>
    </Box>
    </HStack>
    <Box w={'70%'} margin={'auto'} display={'flex'} justifyContent={'space-around'}>
      <Box bg={'#F3EFEF'} w={'35%'} mt={'20px'} >
        <Text  fontSize='18px' mt={'20px'} mr={'20px'} mb='20px' ml={'40px'}>TYPE</Text>
        <Text mr={'20px'} mb='20px' ml={'40px'}>{m.type}</Text>
      </Box>
      <Box bg={'#F3EFEF'} w={'35%'} mt={'20px'}>
        <Text mt={'20px'} mr={'20px'} mb='20px' ml={'40px'}>DESCRIPTION</Text>
        <Text mr={'20px'} mb='20px' ml={'40px'}>{m.product_details}</Text>
      </Box>

    </Box>
    <HStack mb={'25px'} mt={'25px'} justifyContent={'center'}> <hr width='70%'/></HStack>
    </Box>
    
  )
}

export default SinglePage

  export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const resp = await axios.get(`http://localhost:3000/api/products/${id}`);
    const data = resp.data;
    return {
      props: { data },
    };
  };