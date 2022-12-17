import React from 'react'
import {Box, Flex, Image, Text} from '@chakra-ui/react'

function FooterThird() {
  return (
    <Box p='0 20px' backgroundColor='#FAFAFA' w='80%' m='auto'>
        <Flex mb='40px' justifyContent='space-between' gap='5px'>
            <Box>
                <Text  fontWeight='bold'>Company Information</Text>
                <Texty text="About us" />
                <Texty text="Top Searches" />
                <Texty text="Privacy Policy" />
                <Texty text="Terms and Conditions" />
                <Texty text="Intellectual Property Policy" />
                <Texty text="Contact Us" />
                <Texty text="Report Security Issue" />
                <Texty text="Sell on Gearbest" />
                <Texty text="Cookies Policy" />
                <Texty text="Gearbest Official Blog" />
                <Texty text="Testimonials" />
            </Box>

            <Box>
                <Text  fontWeight='bold'>Customer Service</Text>
                <Texty text="Shipping Information" />
                <Texty text="My Favorites" />
                <Texty text="FAQ For Newsletter Subscription" />
                <Texty text="My Points" />
                <Texty text="Warranty and Return" />
                <Texty text="Deposit Expansion" />
                <Texty text="FAQ & Support" />
                <Texty text="Sitemap" />
                <Texty text="Gearbest Wallet Instruction" />
                <Texty text="FAQs about COVID-19" />
                
            </Box>
            <Box>
                <Text  fontWeight='bold'>Other Businesses</Text>
                <Texty text="Partnership Programs"/>
                <Texty text="Associate Programs"/>          
            </Box>
            <Box>
            <Text  fontWeight='bold'>Download App</Text>
            <Image w='120px' src='https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526__340.png'></Image>
            </Box>
        </Flex>
            <Text  p='10px 20px' bg='black' color='white' textAlign='center'>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</Text>
    </Box>
  )
}

export default FooterThird


function Texty({text}){
    return(
        <Text _hover={{textDecor:'underline',cursor:'pointer'}}  fontSize='.85rem'>{text}</Text>
    )
}