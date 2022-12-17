import React from 'react'
import { Box } from '@chakra-ui/react'
import FooterTop from './FooterTop'
import FooterMid from './FooterMid'
import FooterThird from './FooterThird'


function Footer() {
  return (
    <Box >
        <FooterTop/>
        <FooterMid/>
        <FooterThird/>
    </Box>
  )
}

export default Footer