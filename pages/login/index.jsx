import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Checkbox, Input, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { AppContext } from "../../hoc/AppContext";
import { LOGIN_SUCCESS } from "../../hoc/AppContext.Types";
import { axiosInstance } from "../../utils/axiosConfig";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const [values, setValues] = useState({});
  const { state, dispatch } = useContext(AppContext);
  const toast = useToast();
  const router = useRouter();
  const [gitHubCode, setGitHubCode] = useState(null);
  console.log(state);
  useEffect(() => {
    if (state.accessToken) {
      router.push("/");
    }
  }, [state]);

  const gitHubLogin = (code) => {
    axiosInstance
      .get(`/api/users/github?code=${code}`)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
        toast({
          title: res.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: err.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  useEffect(() => {
    if (router.query.code) setGitHubCode(router.query.code);
  }, []);

  useEffect(() => {
    console.log(gitHubCode);
    if (gitHubCode) gitHubLogin(gitHubCode);
  }, [gitHubCode]);

  const login = (data) => {
    axiosInstance
      .post("/api/users/login", data)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
        toast({
          title: res.data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: err.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleClick = () => login(values);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} margin="auto" w={"70%"}>
        <Box width={"70%"} h="90%" border={"0px solid"} m="auto" mt={"4rem"} textAlign="center">
          <Text fontSize={{ base: "2sd", sm: "2xl", md: "10xl" }} fontWeight="700">
            ARE YOU REGISTERED?
          </Text>
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="0.6rem"
            color="grey"
            fontWeight="500"
          >
            Complete your order faster
          </Text>
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="0.6rem"
            color="grey"
            fontWeight="500"
          >
            Sign in with your e-mail address
          </Text>

          <Input
            bg={"#eceef1"}
            border="none"
            mt="1rem"
            placeholder="E-MAIL"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
            name="email"
            onChange={handleChange}
          />
          <Input
            bg={"#eceef1"}
            border="none"
            mt="1rem"
            placeholder="PASSWORD"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
            name="password"
            onChange={handleChange}
          />
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="0.6rem"
            color="grey"
            fontWeight="500"
            float={"right"}
            paddingRight="1rem"
            fontStyle="italic"
          >
            Forgot your password
          </Text>
          <Box display={"flex"} mt="2rem" alignItems={"center"}>
            <Checkbox border={"3px solid"} size="sm" color="grey" />
            <Text
              color={"grey"}
              paddingLeft={"0.5rem"}
              fontSize={{ base: "xs", sm: "xs", md: "5md" }}
              fontStyle="italic"
            >
              Remember me
            </Text>
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
            LOG IN
          </Button>

          <Text color={"grey"} mt="1rem" fontSize={"0.8rem"} fontWeight={600}>
            or login in with
          </Text>
          <Link href="https://github.com/login/oauth/authorize?client_id=c2f67dde713515d40dc2">
            <Button
              colorScheme="gray"
              borderRadius={"none"}
              w={"100%"}
              mt="1rem"
              fontSize={"0.7rem"}
            >
              <FaGithub size={"1.5rem"} />
            </Button>
          </Link>
          <Button
            colorScheme="#e9ecef"
            borderRadius={"none"}
            border={"0.1px solid #e9ecef"}
            w={"100%"}
            mt="0.5rem"
            fontSize={"0.7rem"}
            bg={"#eceef1"}
          >
            <FcGoogle size={"1.5rem"} />
          </Button>
        </Box>

        <Box width={"70%"} h="90%" border={"0px solid"} m="auto" mt={"4rem"} textAlign="center">
          <Text fontSize={{ base: "2sd", sm: "2xl", md: "2xl" }} fontWeight="700">
            ARE YOU NEW
          </Text>
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "10xs" }}
            mt="1rem"
            color="grey"
            fontWeight="500"
          >
            Enter your email address to proceed with your order
          </Text>
          <Input
            bg={"#eceef1"}
            border="none"
            mt="2.3rem"
            placeholder="E-MAIL"
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
            paddingLeft={"10px"}
            size="xl"
            h="40px"
            fontWeight={500}
          />

          <Box display={"flex"} mt="2rem" alignItems={"center"}>
            <Checkbox border={"3px solid"} size="sm" color="grey" />
            <Text
              textAlign={"left"}
              lineHeight="0.8rem"
              color={"grey"}
              paddingLeft={"0.5rem"}
              fontSize={{ base: "xs", sm: "xs", md: "5md" }}
              fontStyle="italic"
            >
              I consent to recive YOOX newsletters via email.For further information,please consult
              the Privacy Policy.
            </Text>
          </Box>

          <Button
            colorScheme="#e9ecef"
            borderRadius={"none"}
            border={"none"}
            w={"100%"}
            mt="1rem"
            bg={"black"}
            color="white"
            fontSize={"0.8rem"}
          >
            PROCEED WITH YOUR ORDER
          </Button>
          <Text
            color={"grey"}
            mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
            fontSize={"0.6rem"}
            fontWeight={600}
          >
            Want to Checkout faster? Sign up for MYOOX and get speedy checkout <br /> on future
            purchase
          </Text>
          <Button
            colorScheme="#e9ecef"
            borderRadius={"none"}
            border={"0.1px solid #e9ecef"}
            w={"100%"}
            mt="1rem"
            fontSize={"0.8rem"}
            bg={"#eceef1"}
            color="black"
            fontWeight={700}
          >
            REGISTER NOW
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
}
export default Login;
