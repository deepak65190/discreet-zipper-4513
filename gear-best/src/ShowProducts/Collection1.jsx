import React from 'react'
import { Box, Center, Flex, Grid, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'

//import { Link } from 'react-router-dom'
import {BsFillHandbagFill} from "react-icons/bs"


function Collection() {

   // Data for each child box
   const arr = [
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16675/goods_thumb_220-v3/40531eb61b7a.jpg",
         text: "Nimble Tech Store"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16456/goods_thumb_220-v3/67f17c7e8795.jpg",
         text: "Ortur Official Store"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16384/goods_thumb_220-v1/c29e4f319b14.jpg",
         text: "Asseao Go Store"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16585/goods_thumb_220-v1/70f4656ec542.jpg",
         text: "Eight Hour Store"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/d7a90e41e9e6.jpg",
         text: "Clearance Sale"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v7/b87b9802f084.jpg",
         text: "Variety of Laptops"
      },
   ]

   const childs = arr.map(ele=>{
      return (
         <Unit key={ele.text} data={ele}/>
      )
   })


  return (
   <section id='collection'>
    <Box m='5 0px 0' my='40px' w="80%" margin="auto" >
        <HStack ml='15px' gap='28px' >
        <Icon boxSize='30px' as={BsFillHandbagFill} />
        <Text fontSize='1.5rem' fontWeight="bold"> COLLECTION</Text>
        </HStack>
        <Grid gridTemplateColumns={['repeat(2,fr)','repeat(3,1fr)','repeat(6,1fr)']} gap='20px' padding='24px' >
            {childs}   
        </Grid>

    </Box>
    </section>
  )
}

export default Collection


function Unit({data}){

   return(
      // <Link to='/products'>
         <Box cursor='pointer'  boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' >
                <Image margin='auto' w='160px' src={data.url}></Image>
                <Center height='60px'>{data.text}</Center>
             </Box>
      // </Link>
   )
}

// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;