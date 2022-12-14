import React from 'react';
import {
  useColorModeValue,
  Box,
  Icon,
  chakra,
  Image,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import Footer from './Footer';
import LetsConnectModal from './LetsConnectModal';
import TestResultsModal2 from './TestResultsModal2';

const Contact = ({ contactRef }) => {
  const bg = useColorModeValue('black', 'gray.800');

  return (
    <section id="About">
      <Box pos="relative" overflow="hidden" bg={bg} mt={10} pt={'120px'}>
        <Box maxW="7xl" mx="auto">
          <Box
            pos="relative"
            pb={{
              base: 8,
              sm: 16,
              md: 20,
              lg: 28,
              xl: 32,
            }}
            maxW={{
              lg: '2xl',
            }}
            w={{
              lg: 'full',
            }}
            zIndex={1}
            bg={bg}
            border="solid 1px transparent"
          >
            {/* <Icon
              display={{
                base: 'none',
                lg: 'block',
              }}
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              h="full"
              w={48}
              color={bg}
              transform="translateX(50%)"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </Icon> */}

            <Box
              mx="auto"
              maxW={{
                base: '7xl',
              }}
              px={{
                base: 4,
                sm: 6,
                lg: 8,
              }}
              mt={{
                base: 10,
                sm: 12,
                md: 16,
                lg: 20,
                xl: 28,
              }}
              ref={contactRef}
            >
              <Box
                w="full"
                textAlign={{
                  sm: 'center',
                  lg: 'left',
                }}
                justifyContent="center"
                alignItems="center"
              >
                <chakra.h1
                  fontSize={{
                    base: '4xl',
                    sm: '5xl',
                    md: '6xl',
                  }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                  color="gray.900"
                  _dark={{
                    color: 'white',
                  }}
                >
                  <chakra.span
                    display={{
                      base: 'block',
                      xl: 'inline',
                    }}
                    fontFamily={'Poppins.700'}
                    fontSize={'40px'}
                    w="full"
                    bgClip="text"
                    bgGradient="linear(to-r, green.400,purple.500)"
                    fontWeight="extrabold"
                    _hover={{
                      bgGradient: 'linear(to-r, purple.500, green.400)',
                    }}
                  >
                    Contact me
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{
                    base: 3,
                    sm: 5,
                    md: 5,
                  }}
                  fontSize={{
                    sm: 'lg',
                    md: 'xl',
                  }}
                  maxW={{
                    sm: 'xl',
                  }}
                  mx={{
                    sm: 'auto',
                    lg: 0,
                  }}
                  color="gray.500"
                >
                  {' '}
                  Hey, I'm Tom! I'm a professional developer and one of the
                  three{' '}
                  <chakra.span fontStyle={'italic'}>
                    founding Software Engineers of{' '}
                    <a
                      href="https://www.leadrpro.com/"
                      target={'_blank'}
                      style={{ color: '#AC6CCC' }}
                    >
                      LeadrPro
                    </a>
                  </chakra.span>
                  <br />
                  <br /> I specialize in building modern, scalable web
                  applications using JavaScript, React, HTML, CSS, PostgreSQL
                  and Node.js
                </chakra.p>

                <chakra.p
                  mt={{
                    base: 3,
                    sm: 5,
                    md: 5,
                  }}
                  fontSize={{
                    sm: 'lg',
                    md: 'xl',
                  }}
                  maxW={{
                    sm: 'xl',
                  }}
                  mx={{
                    sm: 'auto',
                    lg: 0,
                  }}
                  color="gray.500"
                >
                  {' '}
                  {/* <p style={{ marginBottom: '20px' }}>
                    Thanks for visiting my page! I'm always open to new
                    opportunities and would love to hear from you.
                  </p> */}
                  Tom Officer | Full Stack Developer
                  <p>Mount Shasta, California</p>
                  <p>Tom@leadrpro.com</p>
                </chakra.p>

                <Button
                  rounded={'full'}
                  bg={'purple.700'}
                  // bgGradient="linear(to-r, purple.500, green.400)"
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(to-r, green.400, purple.500)',
                    color: 'black',
                  }}
                  mt={'30px'}
                  as="a"
                  href="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/Tom_Officer_Resume_2022_UbRqw_kgu.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1663829604405"
                  // href="https://docs.google.com/document/d/1Vei5e3WSZGjoKwzNdNYVPqP0f9SuH2PY-BJ1hXEGjBE/edit?usp=sharing"
                  target="_blank"
                >
                  Download Resume
                </Button>

                <TestResultsModal2 />
                <Button
                  rounded={'full'}
                  bg={'purple.300'}
                  // bgGradient="linear(to-r, purple.500, green.400)"
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(to-r, green.400, purple.500)',

                    color: 'black',
                  }}
                  mt={'30px'}
                  ml={'20px'}
                >
                  <LetsConnectModal />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          position={{
            lg: 'absolute',
          }}
          top={{
            lg: 0,
          }}
          bottom={{
            lg: 0,
          }}
          right={{
            lg: 0,
          }}
          w={{
            lg: '50%',
          }}
          border="solid 1px transparent"
        >
          {/* ALTERNATE FOOTER PHOTO, ORIGINAL SETTINGS */}
          {/* <Image
            style={{ position: 'relative', bottom: 0, left: 190 }}
            // h={[56, 72, 96, 'full']}
            // w="full"
            h="full"
            fit="cover"
            src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie2_X8ybBe2dt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662508173734"
            alt=""
            loading="lazy"
          /> */}

          <Image
            style={{ position: 'relative', bottom: 0, left: 190 }}
            h={[56, 72, 96, 'full']}
            // w="full"
            // h="800px"
            // fit="cover"
            src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie1_g2mRpUuHe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662507998685"
            alt=""
            loading="lazy"
          />
        </Box>
        <Footer />
      </Box>
    </section>
  );
};

export default Contact;

//line266
