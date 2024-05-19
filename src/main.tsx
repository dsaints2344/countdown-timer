import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const colors = {
  primary: {
    grayishBlue: "hsl(237, 18%, 59%)",
    softRed: "hsl(345, 95%, 68%)",
  },
  neutral: {
    white: "hsl(0, 0%, 100%)",
    darkDesaturatedBlue: "hsl(236, 21%, 26%)",
    veryDarkBlue: "hsl(235, 16%, 14%)",
    veryDarkMostlyBlackBlue: "hsl(234, 17%, 12%)",
  },
};

const customTheme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);