import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/index.js'
import "@fontsource/ubuntu"; 
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme= {theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
