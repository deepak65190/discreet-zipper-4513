import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css';
import  {ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base:'0px',
  md: '600px',
  lg: '900px',

}
const theme = extendTheme({ breakpoints })



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <ChakraProvider theme={theme}>
     <App />
    </ChakraProvider>
   </BrowserRouter>
  </React.StrictMode>
)
