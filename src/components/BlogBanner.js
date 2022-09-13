import React from 'react';
import {
  Flex,
  Box,
  chakra,
  Stack,
  SimpleGrid,
  Image,
  Center,
} from '@chakra-ui/react';

const BlogBanner = ({ contactRef }) => {
  return (
    <div>
      <Flex
        bgGradient="linear(to-r, purple.600, white)"
        _dark={{
          bg: '#3e3e3e',
        }}
        w="full"
      >
        <Box
          py={10}
          _dark={{
            bg: 'gray.800',
          }}
          borderRadius="20px"
          mx="auto"
          maxW={{
            base: '7xl',
          }}
          // px={{
          //   base: 4,
          //   sm: 6,
          //   lg: 8,
          // }}
        >
          <Flex direction={'row'}>
            <SimpleGrid
              maxW="7xl"
              // w={{
              //   md: '3xl',
              //   lg: '5xl',
              // }}

              alignItems="center"
              columns={{
                base: 2,
                lg: 2,
                xl: 3,
              }}
              spacing={4}
              mx="auto"
              py={{
                base: 12,
                lg: 12,
              }}
              // px={{
              //   base: 4,
              //   lg: 8,
              // }}
              display={{
                lg: 'flex',
              }}
            >
              <Stack direction={'row'}>
                <Box>
                  <chakra.h2
                    fontSize={{
                      base: '3xl',
                      sm: '4xl',
                    }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    color="white"
                    _dark={{
                      color: 'gray.100',
                    }}
                    mb={6}
                    w="full"
                    // textAlign={{
                    //   sm: 'center',
                    //   lg: 'left',
                    // }}
                  >
                    <chakra.h2
                      display="block"
                      fontSize={'45px'}
                      // overflow="visible"
                      // position="absolute"
                    >
                      I have what it takes to be{' '}
                      <chakra.span color="purple.600">
                        {' '}
                        your next developer.
                      </chakra.span>
                    </chakra.h2>
                    {/* <chakra.span fontSize={'35px'}>
                      Let me show you.
                    </chakra.span> */}
                  </chakra.h2>
                  <chakra.p
                    fontFamily={'Mulish.300'}
                    fontSize={'17px'}
                    fontWeight="bold"
                    letterSpacing="tight"
                    // lineHeight="shorter"
                    color="black"
                    _dark={{
                      color: 'gray.100',
                    }}
                  >
                    <span>
                      Check out my blog where I share my solutions to common
                      challenges presented in modern web development.
                    </span>

                    <br />
                    <span>
                      Check out my behavioral assessment results from Indeed and
                      let's see if we're a good fit for eachother.
                    </span>
                  </chakra.p>

                  <Stack
                    direction={{
                      base: 'column',
                      sm: 'row',
                    }}
                    spacing={2}
                    mt={10}
                  >
                    <Box rounded="md">
                      <chakra.a
                        alignItems="center"
                        justifyContent="center"
                        px={6}
                        py={2}
                        mr={6}
                        border="solid transparent"
                        fontWeight="bold"
                        w="full"
                        rounded="md"
                        // borderRadius={'50px'}
                        _light={{
                          bg: 'white',
                          color: 'black',
                        }}
                        bg="brand.600"
                        _dark={{
                          bg: 'brand.500',
                        }}
                        _hover={{
                          transform: 'scale(1.1)',

                          _light: {
                            bg: 'black',
                            color: 'white',
                          },
                          _dark: {
                            bg: 'brand.600',
                          },
                        }}
                        href="http://tomofficer.com"
                        target="_blank"
                      >
                        My Blog
                      </chakra.a>
                      <chakra.a
                        alignItems="center"
                        justifyContent="center"
                        px={6}
                        py={2}
                        mr={6}
                        border="solid transparent"
                        fontWeight="bold"
                        w="full"
                        rounded="md"
                        // borderRadius={'50px'}
                        _light={{
                          bg: 'white',
                          color: 'black',
                        }}
                        bg="brand.600"
                        _dark={{
                          bg: 'brand.500',
                        }}
                        _hover={{
                          transform: 'scale(1.1)',

                          _light: {
                            bg: 'black',
                            color: 'white',
                          },
                          _dark: {
                            bg: 'brand.600',
                          },
                        }}
                        href="http://tomofficer.com"
                        target="_blank"
                      >
                        Assessments
                      </chakra.a>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </SimpleGrid>
            <Box
              w="220px"
              mt={2}
              mb={0}
              pt={8}
              ml={20}
              _hover={{ transform: 'scale(1.15)' }}
            >
              <a href="https://tomofficer.com" target="_blank">
                <Image src="https://ik.imagekit.io/e16xo45jw/Blog/jsct-logo-white_57YEipdMW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662871696512" />
              </a>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <div ref={contactRef}></div>
    </div>
  );
};

export default BlogBanner;
