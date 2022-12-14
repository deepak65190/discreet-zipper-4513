import React from 'react'
import { Text,Box,Flex, HStack, Image,Grid,GridItem } from '@chakra-ui/react'
import Carousel from './Carousal';
import './Category.css';

function Hero() {
  return (
    <>
    <Box  className='heroNone' w="80%" margin="auto">
        <Flex justifyContent={'center'}>
            <Box display={['none','none','block']} height='560px' overflow='auto' bg='#ECF6FF' w='20%' minW='130px'>
                <Text h='40px' boxSizing='border-box' bg='black' p='3px 0' color='white' textAlign='center' fontWeight='bold' fontSize='1.45rem'>Category</Text>
                <Texty text="Consumer Electronics"/>
                <Texty text="Industrial & Scientific"/>
                <Texty text="Cell Phones & Accessories"/>
                <Texty text="Appliances"/>
                <Texty text="Outdoors, Fitness & Sports"/>
                <Texty text="Computers, Tablets & Office"/>
                <Texty text="Health & Personal Care"/>
                <Texty text="Home Improvement & Tools"/>
                <Texty text="Drones, Toys & Hobbies"/>
                <Texty text="Home & Garden"/>
                <Texty text="Motor's & Car Electronics"/>
                <Texty text="Men's Fashion"/>
                <Texty text="Watches & Jewellery"/>
                <Texty text="GearBest Promotion"/>
                <Texty text="Home & Garden"/>
                <Texty text="Motor's & Car Electronics"/>
                <Texty text="Men's Fashion"/>
                <Texty text="Watches & Jewellery"/>
                <Texty text="GearBest Promotion"/>
            </Box>
            <Box w='80%'>
                <Flex  justifyContent='space-between' py='8px' px='100px'  bg='#FFDA00'>
                    <Text fontWeight='bold' color='black'>SUPER DEALS</Text>
                    <Text fontWeight='bold' color='black'>APP ONLY</Text>
                    <Text fontWeight='bold' color='black'>NEW ARRIVAL</Text>
                </Flex>
                <Box>
                    <Box padding='24px'>
                   <Carousel/>
                    </Box>

                {/* <Flex w='100%' m='auto' justifyContent='space-between'>
                 <Image width='25%'  cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/8823/ortur_master3_230%C3%97120_en.jpg'></Image>
                 <Image width='25%' cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg'></Image>
                 <Image width='25%' cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg'></Image>                   
                 <Image  width='25%' cursor='pointer'src='https://uidesign.gbtcdn.com/GB/image/6080/230x120.jpg?imbypass=true'></Image>
                </Flex> */}
                
                </Box>
                
            </Box>
            
        </Flex>
    <Grid templateColumns='repeat(4, 1fr)' gap={3}>
        <Image width='100%'  cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/8823/ortur_master3_230%C3%97120_en.jpg'></Image>
        <Image width='100%' cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg'></Image>
        <Image width='100%' cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg'></Image>                   
        <Image  width='100%' cursor='pointer'src='https://uidesign.gbtcdn.com/GB/image/6080/230x120.jpg?imbypass=true'></Image>
    </Grid>
    </Box>
    <Box  className='heroTop' mt='-60px' padding='24px'>
        <Carousel/>
    </Box>

    </>
  )
}

export default Hero


function Texty({text}){
    return(
        <Text fontSize='.96rem' textAlign="left"  ml='20px' padding='4.5px 0 '  _hover={{fontWeight:'600',cursor:'pointer'}}>{text}</Text>
    )
}