import React from "react";
import "./Navbar.css";
import image1 from "../assets/logo.png"
import SearchBar from "../Search/SearchBar";

import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Text,
  Icon,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure
} from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ChevronDownIcon,ChevronUpIcon  } from "@chakra-ui/icons";

function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
const [totalItem, setTotalItem] =React.useState(0)
React.useEffect(()=>{
setTotalItem(JSON.parse(localStorage.getItem("totalItem")));
} ,[totalItem])
  return (
    <>
      <section id="Navbar">
        <Box
          p="10px"
          pb="0px"
          width="80%"
          maxw="1200px"
          className="navbarBox"
          display="flex"
          gap="40px"
          justifyContent="space-between"
          // position={'fixed'}
          // top='0px'
          margin="auto"
          // zIndex='10'
          background={"#fff"}
        >
          <Center maxWidth="300px" minW="150px" h="108px">
            <Link to="/">
              <Image
                cursor="pointer"
                w="80%"
                h="250px"
                minW="250px"
                src={image1}
                // "https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
              ></Image>
            </Link>
          </Center>
          <Box className="navSecondBox" flexGrow="60%">
            <Flex p="10px" gap="20px" flexDir="row-reverse">
              <Menu isOpen={isOpen}>
                <MenuButton
                  variant="ghost"
                  mx={1}
                  //py={[1, 2, 2]}
                  px={4}
                  borderRadius={5}
                  _hover={{ bg: "grey.400" }}
                  aria-label="Courses"
                  fontWeight="300"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  Country Website{" "}
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem>Global(English)</MenuItem>
                  <MenuItem>France</MenuItem>
                  <MenuItem>Italy</MenuItem>
                  <MenuItem>Brazil</MenuItem>
                  <MenuItem>Japan</MenuItem>
                  <MenuItem>Portugal</MenuItem>
                </MenuList>
              </Menu>
              <Text fontSize="14px" fontWeight="300" cursor="pointer">
                Language
              </Text>
              <Text fontSize="14px" fontWeight="300" cursor="pointer">
                Support Center
              </Text>
              <Text fontSize="14px" fontWeight="300" cursor="pointer">
                Ship to
              </Text>
              <Text fontSize="14px" fontWeight="300" cursor="pointer">
                Mobile Offer
              </Text>
            </Flex>
            <Flex p="10px" gap="40px" flexDir="row-reverse">
              <Link to="/cart">
                <Center cursor="pointer" gap="10px">
                  <Icon
                    boxSize="1.8rem"
                    as={AiOutlineShoppingCart}
                    className="cartLogo"
                  />
                  <Text fontSize="1.05rem" color="red" ml={-5} mt={-8}>
                    {totalItem}
                  </Text>
                </Center>
              </Link>
              <Link to="/wishlist">
                <Center cursor="pointer" gap="10px">
                  <Icon
                    boxSize="1.8rem"
                    as={AiOutlineHeart}
                    className="favLogo"
                  />
                  <Text fontSize="1.15rem">Favourites</Text>
                </Center>
              </Link>
              <Link to="/login">
                <Center cursor="pointer" gap="10px">
                  <Icon
                    boxSize="1.8rem"
                    as={CgProfile}
                    className="profileLogo"
                  />
                  <Text fontSize="1.05rem">Log In</Text>
                </Center>
              </Link>
              <Flex zIndex="1">
                {/* h="35px" border="2.2px solid yellow" borderRadius="25px" */}
                {/* <Input
              h="100%"
              w="150vw"
              className="NavInput"
              maxW="400px"
              borderLeftRadius="25px"
              borderWidth="0px"
              fontSize="1rem"
              placeholder="Product Tag"
              py="-4px"
            /> */}
                <SearchBar />
                {/* <Button h="100%" borderRadius="30px" color="black.600" backgroundColor='yellow.400'> 
               <Center>
                <Icon boxSize="1.3rem" as={AiOutlineSearch}></Icon>
              </Center>
            </Button> */}
              </Flex>
            </Flex>
          </Box>
          <Box className="NavMenu">
            <Center>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Menu
                </MenuButton>
                <MenuList>
                  <Link to="/signup">
                    <MenuItem>Sign up</MenuItem>
                  </Link>
                  <Link>
                    <MenuItem>Wish List</MenuItem>
                  </Link>
                  <Link to="/cart">
                    <MenuItem>cart</MenuItem>
                  </Link>
                  <Link to="/product">
                    <MenuItem>Mobiles</MenuItem>
                  </Link>
                  <Link>
                    <MenuItem>
                      <Input
                        type="search"
                        placeholder="Search here..."
                        border="2px solid black"
                      />
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Center>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default Navbar;
