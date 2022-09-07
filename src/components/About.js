import React from 'react';
import {
  useColorModeValue,
  Box,
  Icon,
  chakra,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import Footer from './Footer';

const About = () => {
  const bg = useColorModeValue('black', 'gray.800');

  return (
    <section id="About">
      <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
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
            <Icon
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
            </Icon>
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
                  {/* <chakra.span
                  display={{
                    base: 'block',
                    xl: 'inline',
                  }}
                  color="brand.600"
                  _dark={{
                    color: 'brand.400',
                  }}
                >
                  online business
                </chakra.span> */}
                </chakra.h1>
                {/* <chakra.p
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
                Hi, my name's Tom!
              </chakra.p> */}
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
                  Hey, I'm Tom! I'm an experienced software engineer proficient
                  in React, JavaScript, HTML, CSS and Node.js
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
                  {/* Thanks for visiting my page! I'm always open to new
                  opportunities and would love to hear from you. */}
                  Tom Officer | Full Stack Developer
                  <p>Mount Shasta, California</p>
                  <p>tom@leadrpro.com</p>
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
                >
                  Download Resume
                </Button>
                <Button
                  rounded={'full'}
                  bg={'purple.300'}
                  // bgGradient="linear(to-r, purple.500, green.400)"
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(to-l, green.400, purple.500)',

                    color: 'black',
                  }}
                  mt={'30px'}
                  ml={'20px'}
                >
                  Let's connect!
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
          <Image
            style={{ position: 'relative', bottom: 0, left: 200 }}
            h={[56, 72, 96, 'full']}
            // w="full"
            // h="full"
            // fit="cover"
            src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie2_X8ybBe2dt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662508173734"
            alt=""
            loading="lazy"
          />
        </Box>
        <Footer />
      </Box>
    </section>
  );
};

export default About;

//line266
