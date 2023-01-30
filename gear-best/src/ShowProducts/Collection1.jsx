import React from 'react'
import { Box, Center, Flex, Grid, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'

//import { Link } from 'react-router-dom'
import {BsFillHandbagFill} from "react-icons/bs"


function Collection() {

   // Data for each child box
   const arr = [
      {
         url : "https://www.gearbest.com/u_file/2212/14/products/702271c92e.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
         text: "Nimble Tech Store"
      },
      {
         url : "https://www.gearbest.com/u_file/2212/14/products/0472ef5a40.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
         text: "Ortur Official Store"
      },
      {
         url : "https://www.gearbest.com/u_file/2212/15/products/91f260cb45.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
         text: "Asseao Go Store"
      },
      {
         url : "https://www.gearbest.com/u_file/2212/14/products/0c6cdf40da.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
         text: "Eight Hour Store"
      },
      {
         url : "https://www.gearbest.com/u_file/2212/15/products/9e684bc2e9.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
         text: "Clearance Sale"
      },
      {
         url : "https://www.gearbest.com/u_file/2212/15/products/SKU-01-Standard-bffc.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
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