import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import RichLink from "next/link";
const Links = [
  {
    name: "Men",
    path: "/men",
  },
  {
    name: "Women",
    path: "/women",
  },
  {
    name: "KIDS",
    path: "/kids",
  },
  {
    name: "DESIGN+ART",
    path: "/designArt",
  },
];

const NavLink = ({ children }) => (
  <Link
    as={RichLink}
    px={2}
    py={1}
    rounded={"md"}
    fontWeight="600"
    _hover={{
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children.path}
  >
    {children.name}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      position={"sticky"}
      top="0"
      zIndex={"1000"}
    >
      <Flex
        w={"85%"}
        m="auto"
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.name}>{link}</NavLink>
          ))}
        </HStack>
        <RichLink href={"/"}>
          <Box ml={{ base: "none", md: -32 }}>
            <Image
              src="https://www.psdstamps.com/wp-content/uploads/2022/04/grunge-exclusive-label-png.png"
              width={"48"}
            />
          </Box>
        </RichLink>
        <HStack alignItems={"center"} spacing={8}>
          <BiSearch fontSize="25px" cursor={"pointer"} />
          <AiOutlineHeart fontSize="25px" cursor={"pointer"} />
          <RichLink href={"/cart"}>
            <BsBag fontSize="25px" cursor={"pointer"} />
          </RichLink>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={2} alignItems="center">
            {Links.map((link) => (
              <NavLink key={link.name}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
