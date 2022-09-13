import React from 'react';
import { Flex, Box, chakra, Stack, Link, Image } from '@chakra-ui/react';

const BlogBanner2 = () => {
  return (
    <div>
      <Flex
        bgGradient="linear(to-r, purple.600, white)"
        _dark={{
          bg: '#3e3e3e',
        }}
        // p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          justify="center"
          // bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          w="full"
        >
          <Box
            // w={{
            //   base: 'full',
            //   md: '75%',
            //   lg: '50%',
            // }}
            px={4}
            py={20}
            textAlign={{
              base: 'left',
              md: 'center',
            }}
          >
            <chakra.span
              fontSize={{
                base: '3xl',
                sm: '4xl',
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="gray.900"
              _dark={{
                color: 'gray.100',
              }}
              mb={6}
              color="white"
            >
              {' '}
              <chakra.h2
                display="block"
                fontSize={'55px'}

                // position="absolute"
              >
                I have what it takes to be{' '}
                <chakra.span color="purple.600">
                  {' '}
                  your next developer.
                </chakra.span>
              </chakra.h2>
              <chakra.span fontSize={'45px'}>Let me show you.</chakra.span>
            </chakra.span>
            <Stack
              justifyContent={{
                base: 'left',
                md: 'center',
              }}
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing={2}
              mt={10}
            >
              <Box rounded="md">
                <Link
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  _light={{
                    color: 'white',
                  }}
                  bg="brand.600"
                  _dark={{
                    bg: 'brand.500',
                  }}
                  _hover={{
                    bg: 'brand.700',
                    _dark: {
                      bg: 'brand.600',
                    },
                  }}
                >
                  Get started
                </Link>
              </Box>
              <Box maxW={'250px'}>
                <a href="https://tomofficer.com" target="_blank">
                  <Image src="https://ik.imagekit.io/e16xo45jw/Blog/jsct-logo-white_57YEipdMW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662871696512" />
                </a>
              </Box>
              <Box ml={3} rounded="md">
                <Link
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="brand.600"
                  bg="white"
                  _hover={{
                    bg: 'brand.50',
                  }}
                >
                  Learn more
                </Link>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default BlogBanner2;
