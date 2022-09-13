import React from 'react';
import { Flex, Box, chakra, Stack, SimpleGrid, Image } from '@chakra-ui/react';

const BlogBanner = () => {
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
        // borderTop="2px solid black"
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
                lg: 10,
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
                    Want more proof of my skills?
                  </chakra.span>
                  <chakra.span
                    display="block"
                    color="brand.600"
                    _dark={{
                      color: 'gray.500',
                    }}
                  >
                    Don't forget to check out my blog!
                  </chakra.span>
                </chakra.h2>
                <chakra.p
                  fontFamily={'Mulish.300'}
                  fontSize={'16px'}
                  fontWeight="bold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  color="white"
                  _dark={{
                    color: 'gray.100',
                  }}
                  // marginTop="50px"
                >
                  <chakra.p
                    fontSize={{
                      base: '2xl',
                      sm: '4xl',
                    }}
                    mb={4}
                  >
                    I want you to want you hire me before we even talk!
                  </chakra.p>
                  {/* <br />
                  <br /> */}
                  Let me prove to you that I have the skill set you're looking
                  for in your next associate developer hire.
                  <br />
                  <span>
                    Check out my blog where I discuss solutions to everyday
                    challenges presented in modern web development.
                  </span>
                </chakra.p>

                <Stack
                  direction={{
                    base: 'column',
                    sm: 'row',
                  }}
                  spacing={2}
                  mt={7}
                >
                  {/* <Box display="inline-flex" rounded="md" shadow="md">
                    <chakra.a
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
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
                    >
                      Let's go!
                    </chakra.a>
                  </Box> */}
                </Stack>
              </Box>
            </SimpleGrid>
            <Box
              w="300px"
              display="flex"
              flexDirection={'column'}
              alignItems="center"
              justifyContent={'center'}
            >
              <Image src="https://ik.imagekit.io/e16xo45jw/Blog/jsct-logo-white_57YEipdMW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662871696512" />
            </Box>
          </Flex>
        </Box>
      </Flex>
      ;
    </div>
  );
};

export default BlogBanner;
