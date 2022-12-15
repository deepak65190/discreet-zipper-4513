import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { store } from './SuperDeal/Redux/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
)
