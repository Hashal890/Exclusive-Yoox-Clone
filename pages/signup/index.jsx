import React, { useContext, useState } from "react";
import { Box, Button, Checkbox, Input, SimpleGrid, Text, Link, useToast } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AppContext } from "../../hoc/AppContext";
import { axiosInstance } from "../../utils/axiosConfig";
import { useRouter } from "next/router";

const Register = () => {
  const { state, dispatch } = useContext(AppContext);
  const [formdata, setFormdata] = useState({});
  const toast = useToast();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const signUp = async (data) => {
    try {
      let response = await axiosInstance.post("/api/users/signup", data);
      toast({
        title: response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => router.push("/login"), 5000);
    } catch (err) {
      toast({
        title: err.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const handleClick = () => {
    console.log(formdata);
    signUp(formdata);
  };

  return (
    <div>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} margin="auto" w={"70%"}>
        <Box width={"40%"} h="90%" border={"0px solid"} m="auto" mt={"4rem"} textAlign="center">
          <Text fontSize={{ base: "0.9rem", sm: "1rem", md: "1rem" }} fontWeight="00">
            REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT
          </Text>
          <Link href="https://github.com/login/oauth/authorize?client_id=c2f67dde713515d40dc2">
            <Button
              colorScheme="facebook"
              borderRadius={"none"}
              w={"100%"}
              mt="1rem"
              fontSize={"0.7rem"}
            >
              <FaFacebookF size={"1.5rem"} />
            </Button>
          </Link>

          <Link href="https://accounts.google.com/o/oauth2/v2/auth?client_id=1061124562532-e04m0hothnckb82s5apbc2lt08liqvm2.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/api/users/google/callback&scope=profile">
            <Button
              colorScheme="#e9ecef"
              borderRadius={"none"}
              border={"0.1px solid #e9ecef"}
              w={"100%"}
              mt="1rem"
              fontSize={"0.7rem"}
              bg={"#eceef1"}
            >
              <FcGoogle size={"1.5rem"} />
            </Button>
          </Link>
          <Text
            color={"grey"}
            mt="1rem"
            fontSize={"0.8rem"}
            pt={{ base: "0.9rem", sm: "1rem", md: "1.2rem" }}
            fontWeight={600}
          >
            OR WITH YOUR EMAIL
          </Text>

          <Input
            bg={"#eceef1"}
            border="none"
            mt="1rem"
            placeholder="FIRST NAME*"
            name="firstName"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
            onChange={handleChange}
          />
          <Input
            bg={"#eceef1"}
            border="none"
            mt="1rem"
            placeholder="LAST NAME*"
            name="lastName"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
            onChange={handleChange}
          />
          <Input
            bg={"#eceef1"}
            border="none"
            mt="1rem"
            placeholder="E-MAIL*"
            name="email"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
            onChange={handleChange}
          />
          <Input
            bg={"#eceef1"}
            type="password"
            name="password"
            border="none"
            mt="1rem"
            placeholder="PASSWORD*"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
            onChange={handleChange}
          />

          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="1.5rem"
            textAlign={"left"}
            fontWeight="500"
          >
            Personalize your shopping experience.
          </Text>

          <Box display={"flex"} mt="2rem" alignItems={"center"}>
            <Checkbox
              border={"3px solid"}
              ml={{ base: "0rem", sm: "1rem", md: "3rem" }}
              size="sm"
            />
            <Text
              paddingLeft={"0.5rem"}
              fontSize={{ base: "xs", sm: "xs", md: "1rem" }}
              fontStyle="italic"
              pr={{ base: "1rem", sm: "1rem", md: "3rem" }}
            >
              female
            </Text>
            <Checkbox border={"3px solid"} size="sm" />
            <Text
              paddingLeft={"0.5rem"}
              fontSize={{ base: "xs", sm: "xs", md: "1rem" }}
              fontStyle="italic"
            >
              male
            </Text>
          </Box>
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="0.6rem"
            fontWeight="500"
            textAlign={"left"}
          >
            If you are over 18 years old, celebrate your birthday with us: We have a surprise for
            you.
          </Text>

          <Input
            bg={"#eceef1"}
            border="none"
            mt="1rem"
            placeholder="DATE OF BIRTH"
            name=""
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
          />
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="1.5rem"
            textAlign={"left"}
            fontWeight="500"
          >
            CELL PHONE
          </Text>

          <Input
            bg={"#eceef1"}
            type="number"
            border="none"
            placeholder="PHONE"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
          />

          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="0.6rem"
            color="grey"
            fontWeight="400"
            textAlign={"left"}
            paddingRight="1rem"
            fontStyle="italic"
          >
            By entering your phone number, you agree to be contacted by SMS for marketing and
            promotional purposes.
          </Text>

          <Box w="100%" mt={"2rem"} height={"20x"} bg={"#eceef1"}>
            <Text fontSize={"0.7rem"}>
              I declare that I have read and accept the MYOOX Terms and Conditions of Use
            </Text>
          </Box>

          <Box display={"flex"} alignItems="center" bg={"#eceef1"} mt="3rem" p={"10px"}>
            <Checkbox border={"3px solid grey"} size="sm" />

            <Box w="100%" height={"100%"}>
              <Text fontSize={"0.7rem"} color="grey">
                I agree to the use of my personal data in order to be updated on new arrivals,
                informed about exclusive items and contacted as part of targeted marketing
                initiatives related to services offered by YOOX. By analyzing my personal data,
                order history and browsing habits, YOOX can improve my shopping experience with
                suggestions that correspond to my interests. For further information, please consult
                the Privacy Policy.
              </Text>
            </Box>
          </Box>
          <Button
            colorScheme="grey"
            borderRadius={"none"}
            w={"100%"}
            mt="1rem"
            bg={"black"}
            color="white"
            onClick={handleClick}
          >
            REGISTER NOW
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Register;
