import React, { useRef } from 'react';
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
import Landing from './components/Landing';
import Header from './components/Header';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import Resume from './components/Resume';
import BlogBanner from './components/BlogBanner';
import LetsConnectModal from './components/LetsConnectModal';

function App() {
  //useRef

  const scrollToResumeRef = useRef();
  const scrollToMyWorkRef = useRef();
  const scrollToContactRef = useRef();
  const scrollToBlogRef = useRef();

  //scroll handlers
  const scrollToResumeHandle = () => {
    scrollToResumeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMyWorkHandle = () => {
    scrollToMyWorkRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactHandle = () => {
    scrollToContactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBlogHandle = () => {
    scrollToBlogRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <div style={{ backgroundColor: 'black' }}>
        <Header
          resumeHandle={scrollToResumeHandle}
          myWorkHandle={scrollToMyWorkHandle}
          contactHandle={scrollToContactHandle}
          blogHandle={scrollToBlogHandle}
        />
        <Landing resumeRef={scrollToResumeRef} />
        <Resume myWorkRef={scrollToMyWorkRef} />
        <MyWork blogRef={scrollToBlogRef} />
        <BlogBanner contactRef={scrollToContactRef} />

        <Contact />
      </div>
    </ChakraProvider>
  );
}

export default App;
