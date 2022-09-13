import React, { useRef, useState, useEffect } from 'react';
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

import WelcomeModal from './components/WelcomeModal';

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

  //modal logic
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeModal(true);
    }, 3000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div style={{ backgroundColor: 'black' }}>
        {showWelcomeModal && <WelcomeModal />}
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
