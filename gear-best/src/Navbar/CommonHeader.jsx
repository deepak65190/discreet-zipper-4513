import React from "react";
import {Box,Flex,Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function CommonHeader(){
    return(
        <Box w='100%' m='auto' fontWeight='bold' fontSize='18px' marginTop='32px'>
            <Flex  justifyContent='space-between' py='8px' px='100px'  bg='#FFDA00'>
                <Link to='/superDeal'>
                <Text fontWeight='bold' color='black'  _hover={{textDecoration:'underline',cursor:'pointer'}}>SUPER DEALS</Text>
                </Link>
                <Link to='/apponly'>
                <Text fontWeight='bold' color='black' _hover={{textDecoration:'underline',cursor:'pointer'}}>APP ONLY</Text>
                </Link>
                <Link to='/new'>
                <Text fontWeight='bold' color='black' _hover={{textDecoration:'underline',cursor:'pointer'}}>NEW ARRIVAL</Text>
                </Link>
            </Flex>
        </Box>
    )
}

export default CommonHeader;