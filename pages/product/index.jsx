import React from "react";
import { Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import data from "../../utils/data";
const ProductPage = () => {
  return (
    <SimpleGrid style={["2","3","3","4"]}>
      <Grid gap={"2rem"}>
        {data.products.map((product) => (
          <Grid md={"4"} key={product.name}>
            <Image w="200px" src={product.image}></Image>
            <Text>{product.name}</Text>
          </Grid>
        ))}
      </Grid>
    </SimpleGrid>
  );
};

export default ProductPage;
