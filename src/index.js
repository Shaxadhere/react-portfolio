import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AppRouter from './routes/index.js';
import reportWebVitals from './reportWebVitals';
import "@fontsource/roboto";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: localStorage.getItem('systemColorMode') || false,
};

const theme = extendTheme({
  fonts,
  config,
});


root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();