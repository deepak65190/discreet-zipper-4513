import React from 'react'
import { Box, Center, Flex, Grid, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'
import {GrDiamond} from 'react-icons/gr'
import { Link } from 'react-router-dom'


function Collection2() {
  return (
    <Box m='50px 0'  w="90%" margin="auto">
        <HStack ml='15px' gap='28px'>
        <Icon boxSize='30px' as={GrDiamond} />
        <Text fontSize='1.5rem' fontWeight='bold'> NEW</Text>
        </HStack>
        <Grid gridTemplateColumns={['repeat(1,fr)','repeat(2,1fr)','repeat(4,1fr)']} gap='30px'  padding='24px'>

            <Single  url='https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16680/goods_thumb_220-v1/72d44f808ecb.jpg' price='44.99' text='Drones' />
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16678/goods_thumb_220-v1/03e5b6e88f0a.jpg' price='70' text='Tablets'/>
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16661/goods_thumb_220-v1/be4c02a13483.jpg' price='27.99' text='Mobiles'/>
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16675/goods_thumb_220-v1/e93e97cf8445.jpg' price='299.00' text='Gaming'/>

        </Grid>

    </Box>
  )
}

export default Collection2


function Single({url,price,text}){
    let num = +(price) + 100
    return(
        <Link to='/products'>
          <Box boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'  cursor='pointer' >
                <Image pt='10px' ml='20px' w='55px' src="https://cdn-icons-png.flaticon.com/128/6213/6213166.png"/>
                <Image margin='auto'  w='160px' src={url}></Image>
               <Center><Text fontSize='1.13rem' fontWeight='bold' > {text}</Text></Center> 
               <Center><Text fontSize='1.33rem' fontWeight='bold' color='red.500' >$ {price}</Text></Center> 
               <Center><Text textDecor='line-through' fontSize='1.33rem' fontWeight='bold' color='red.500' >$ {num}</Text></Center> 
                
        </Box>
        </Link>
    )
}

// box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
// https://img.icons8.com/color/2x/discount--v3.gif