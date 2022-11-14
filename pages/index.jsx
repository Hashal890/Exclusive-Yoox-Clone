import {
  Box,
  Image,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { getCartItems } from "../components/cart/Cart.Controller";
import { AppContext } from "../hoc/AppContext";

const HomeData = [
  {
    img: "https://www.yoox.com/images/yoox80/banners/5569_24_splash_W.jpg?634485886601286852",
    name: "WOMEN",
    desc: "[VIEW MORE]",
    path: "/women",
  },
  {
    img: "https://www.yoox.com/images/yoox80/banners/5569_23_splash_M.jpg?634485886601286852",
    name: "MEN",
    desc: "[VIEW MORE]",
    path: "/men",
  },
  {
    img: "https://www.yoox.com/images/yoox80/banners/5569_18_splash_K.jpg?634485886601286852",
    name: "KIDS",
    desc: "[VIEW MORE]",
    path: "/women",
  },
  {
    img: "https://www.yoox.com/images/yoox80/banners/5569_16_splash_D.jpg?634485886601286852",
    name: "DESIGN+ART",
    desc: "[VIEW MORE]",
    path: "/men",
  },
];

export default function Home() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartItems(dispatch);
  }, []);

  return (
    <>
      <Head>
        <title>YOOX | Shop Fashion / Design+Art</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Box w={"100%"}>
        <Stack w={"100%"}>
          <Box h={"10rem"} w={"20%"} margin={"auto"} mt={"30px"}>
            <Image
              margin={"auto"}
              h={{ base: "100", sm: "140", md: "140px" }}
              w={{ base: "120", sm: "180", md: "180px" }}
              src="https://www.psdstamps.com/wp-content/uploads/2022/04/grunge-exclusive-label-png.png"
            />
            <Text
              fontWeight={"bolder"}
              mt={"-2rem"}
              fontSize={{ base: "xs", sm: "xs", md: "sm" }}
              textAlign={"center"}
            >
              SHOP FASHION / DESIGN+ART
            </Text>
          </Box>
        </Stack>

        <SimpleGrid
          w={"80%"}
          margin={"auto"}
          columns={{ base: 2, sm: 2, md: 4 }}
          spacing={2}
        >
          {HomeData.map((item) => {
            return (
              <Stack key={item.name}>
                <Link href={item.path}>
                  <Box>
                    <Img src={item.img} />
                  </Box>
                  <Box
                    textAlign={"center"}
                    padding={"2rem 0rem"}
                    backgroundColor={"gray.900"}
                    color={"white"}
                  >
                    <Text>{item.name}</Text>
                  </Box>
                  <Box
                    fontWeight={"bold.800"}
                    textAlign={"center"}
                    padding={"1rem 0rem"}
                  >
                    <Text>{item.desc}</Text>
                  </Box>
                </Link>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
