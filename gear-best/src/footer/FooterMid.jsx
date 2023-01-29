import React from 'react'
import { Box, Button, Center, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import {BsFacebook, BsInstagram, BsMessenger , BsYoutube, BsTwitter} from 'react-icons/bs'

function FooterMid() {
  return (
    <Box bg="#FAFAFA" p="50px 20px" w="90%" m="auto">
      <Flex className="footerMid" justifyContent="space-between">
        <Center>
          <Text mr="8px">NewsLetter</Text>
          <Input placeholder="Enter email" w="280px"></Input>
          <Button
            _hover={{ background: "#2b2d42" }}
            bg="blackAlpha.900"
            minW="90px"
            color="white"
          >
            Subscribe
          </Button>
        </Center>
        <Center>
          <HStack gap="30px">
            <Icon boxSize="30px" as={BsFacebook} />
            <Icon boxSize="30px" as={BsInstagram} />
            <Icon boxSize="30px" as={BsMessenger} />
            <a href="https://www.youtube.com/channel/UCA7wXvToLwOAv5a91DeJXGw">
              <Icon boxSize="30px" as={BsYoutube} />
            </a>
            <Icon boxSize="30px" as={BsTwitter} />
          </HStack>
        </Center>
      </Flex>
    </Box>
  );
}

export default FooterMid