import React from 'react';
import { Flex, Box, chakra, Stack, SimpleGrid, Image } from '@chakra-ui/react';

const BlogBanner = ({ contactRef }) => {
  return (
    <div>
      <Flex
        bgGradient="linear(to-r, purple.300, purple.600)"
        _dark={{
          bg: '#3e3e3e',
        }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          _dark={{
            bg: 'gray.800',
          }}
          borderRadius="20px"
        >
          <Flex direction={'row'}>
            <SimpleGrid
              maxW="7xl"
              w={{
                md: '3xl',
                lg: '4xl',
              }}
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
                >
                  <chakra.span display="block">
                    I have the skill set you're looking for in your next hire.
                  </chakra.span>
                  <chakra.span
                    display="block"
                    color="brand.600"
                    _dark={{
                      color: 'gray.500',
                    }}
                  ></chakra.span>
                </chakra.h2>
                <chakra.p
                  fontFamily={'Mulish.300'}
                  fontSize={'17px'}
                  fontWeight="bold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  color="white"
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
                    Check out my behavioral assessment results on Indeed and
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
                      py={4}
                      mr={6}
                      border="solid transparent"
                      fontWeight="bold"
                      w="full"
                      rounded="md"
                      _light={{
                        bg: 'black',
                        color: 'white',
                      }}
                      bg="brand.600"
                      _dark={{
                        bg: 'brand.500',
                      }}
                      _hover={{
                        transform: 'scale(1.1)',

                        _light: {
                          bg: 'purple.600',
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
                      py={4}
                      mr={6}
                      border="solid transparent"
                      fontWeight="bold"
                      w="full"
                      rounded="md"
                      _light={{
                        bg: 'black',
                        color: 'white',
                      }}
                      bg="brand.600"
                      _dark={{
                        bg: 'brand.500',
                      }}
                      _hover={{
                        transform: 'scale(1.1)',

                        _light: {
                          bg: 'purple.600',
                          color: 'white',
                        },
                        _dark: {
                          bg: 'brand.600',
                        },
                      }}
                      href="http://tomofficer.com"
                      target="_blank"
                    >
                      My Results
                    </chakra.a>
                  </Box>
                </Stack>
              </Box>
            </SimpleGrid>

            <Box
              w="275px"
              mt={10}
              mb={10}
              display="flex"
              flexDirection={'column'}
              alignItems="center"
              justifyContent={'center'}
              ml="45px"
              _hover={{ transform: 'scale(1.1)' }}
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
