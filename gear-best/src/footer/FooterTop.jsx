import React from 'react'
import { Box, HStack, Image, Text, Icon, Center, Divider, Flex } from '@chakra-ui/react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsHandThumbsUp, BsStar} from 'react-icons/bs'
import {MdOutlineLocalShipping} from 'react-icons/md'
import './Footer.css';

function FooterTop() {
  return (
    <section id='footer'>
    <Box bg='#FAFAFA' mt='40px' w='100%' m='auto'>
        {/* <Divider color='black' border='2px solid black' h='2px'/> */}
        <hr  color='black' style={{border:'.4px solid black'}} />
        <Flex className='footerTop' mt='40px' justifyContent='space-between' px='20px'>
            <Box   p='20px' >
                <Center>
                <Image w='200px'mb='15px' src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png'></Image>
                </Center>
                <Text fontWeight='bold' fontSize='.9rem'>AFFORDABILITY QUALITY</Text>
                <Text fontWeight='bold' fontSize='.9rem'>FUN SHOPING</Text>
            </Box>
            <Box>
                <Center className='footerTopCenter'>
                     <Icon boxSize= '2rem' as={AiOutlineHome}/>
                </Center>
                <Text fontWeight='bold' textAlign='center' >High Quality Selection</Text>
                <Text className='footerTopText' textAlign='center'  fontSize='.8rem'>Total product quality control for peace of mind</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='2rem' as={BsHandThumbsUp}/>
                </Center>
                <Text fontWeight='bold' textAlign='center' >Affordable Prices</Text>
                <Text  fontSize='.8rem' textAlign='center' >Factory direct prices for maximum savings</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='2rem' as={MdOutlineLocalShipping}/>
                </Center>
                <Text fontWeight='bold' textAlign='center' >Express Shipping</Text>
                <Text  fontSize='.8rem' textAlign='center' >Fast, reliable delivery from global warehouses</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='1.5rem' as={BsStar}/>
                </Center>
                <Text fontWeight='bold' textAlign='center' >Worry-free After-sales</Text>
                <Text  fontSize='.8rem' textAlign='center' >Instant access to professional support</Text>
            </Box>
        </Flex>
    </Box>
    </section>
  )
}

export default FooterTop