import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import MyWork from './components/MyWork';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <div style={{ backgroundColor: 'black' }}>
        <Header />
        <Landing />
        <MyWork />
        <About />

        {/* <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}></VStack>
          </Grid>
        </Box> */}
        {/* <Footer /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
