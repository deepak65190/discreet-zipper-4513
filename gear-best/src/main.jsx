import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css';
import  {ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import {Provider} from "react-redux";
import {store} from "./SuperDeal/Redux/store"

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
      <Provider store={store}>
      <App />
     </Provider>
    </ChakraProvider>
   </BrowserRouter>
  </React.StrictMode>
)
