import React, { useState } from 'react'
import { Box, Button, Center, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import {BsFacebook, BsInstagram, BsMessenger , BsYoutube, BsTwitter} from 'react-icons/bs'

function FooterMid() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
    setEmail("");
  }
  return (
    <Box bg='#FAFAFA' p='50px 20px' w='90%' m='auto'>
        <Flex className='footerMid' justifyContent='space-between'>
            <Center>
                <Text mr='8px'>NewsLetter</Text>         
                <form onSubmit={handleSubmit}>
        <Input 
          w='280px'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
            _hover={{background:'#2b2d42'}} 
            bg='blackAlpha.900' 
            minW='90px' 
            color='white'
            type='submit'
        >
            Subscribe
        </Button>
      </form>
            </Center>
            <Center>
                <HStack gap='30px'>
                <Icon boxSize='30px' as={BsFacebook}/>
                <Icon boxSize='30px' as={BsInstagram}/>
                <Icon boxSize='30px' as={BsMessenger}/>
                <Icon boxSize='30px' as={BsYoutube}/>
                <Icon boxSize='30px' as={BsTwitter}/>
                </HStack>
            </Center>
        </Flex>
    </Box>
  )
}

export default FooterMid