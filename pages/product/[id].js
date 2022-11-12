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
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import { useState ,useEffect} from 'react'

const SinglePage = ({data}) => {
  let m=data.data
  let discount=Math.round(((m.original_price-m.current_price)/m.original_price)*100)
  console.log(data.data)
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    // <Box display='flex'>
    //     <Box marginLeft="40px"  w="500px">
    //      <ImageGallery showPlayButton={false} showBullets={true} items={images} />
    //     </Box>
    //     <Box>
    //     <Text>{m.size}</Text>

    //     </Box>

    // </Box>
    <Box mt='50px'>
    <Box display={'flex'} justifyContent={'space-around'}>
      <Box w='20%'>
       
        <Carousel  showArrows={true} showBullets={true} autoPlay interval="5000" transitionTime="2000" infiniteLoop>
          {
            m.images.map((el)=>{
              return(
                <Image w='5' src={el} alt={el}/>
              )
            })
          }
        </Carousel>
      </Box>
      <Box mt='20px'>

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
        
        <br/><Button fontSize='12px' mt='30px' w='370px' borderRadius={"0px"} color={'#333333'} bgColor={'#FFFE94'} variant='none'>This item is excluded from all promotional offers.</Button>

      </Box>

    </Box>
    <hr/>
    <Box> 
      <Text>SPECIFICATIONS</Text>
      <Text>{m.specifications}</Text>
    </Box>
   
    <HStack>
      <Box>
        <Text>TYPE</Text>
        <Text>{m.type}</Text>
      </Box>
      <Box>
        <Text>DESCRIPTION</Text>
        <Text>{m.product_details}</Text>
      </Box>

    </HStack>
    <hr/>
    </Box>
    
  )
}

export default SinglePage
export async function getStaticPaths() {

    const {data} = await fetch(`http://localhost:3000/api/products`).then((res) => res.json())
   console.log(data)
    const paths = data.map((el) => ({
      params: { id: el._id.toString() },
    }))
  
    return {
      paths,
      fallback: false
    }
  }
  
export const getStaticProps = async ({ params }) => {
    const id = params.id
    console.log(id)
    let data = await fetch(`http://localhost:3000/api/products/${id}`).then((res) => res.json())
  
    return {
      props: {
        data
      }
    }
  }