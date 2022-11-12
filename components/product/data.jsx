<Grid mr='5' gap='20px' templateColumns='repeat(3, 1fr)' >
              {
                  data.map((el)=>{return(<>
                  <Box w='sm' borderWidth='1px'>
                  <Link href={`/product/${el.id}`}><HStack justifyContent={'center'}><Image boxSize='200px' src={el.image[0]} alt={el.name}/></HStack></Link>
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
                        <Text textAlign='center'>{el.name}</Text>
                        <Text textAlign='center'>RS. {el.price}</Text>
                        <Text textAlign='center'>{el.ratingValue}</Text>
                        <Text textAlign='center'>{el.category[0]} </Text>
                        <HStack justifyContent={'center'}><Button mb='5' mt='5'>ADD TO DREAM BOX</Button></HStack>
                      </Box>
                      
  
                  </Box>
                  </>)})
              }
            </Grid>