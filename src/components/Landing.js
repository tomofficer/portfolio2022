import React from 'react';
import {
  useColorModeValue,
  chakra,
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Icon,
  Image,
} from '@chakra-ui/react';

const Landing = () => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <section id="landing">
      <chakra.header>
        <Box
          w="full"
          h="container.lg"
          backgroundImage="url(https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/portfolio1cropped2_btXsravyi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662503760565)"
          bgPos="center"
          bgSize="cover"
          mb={'-100px'}
        >
          <Flex
            align="center"
            pos="relative"
            justify="center"
            boxSize="full"
            bg="blackAlpha.700"
          >
            <Stack
              textAlign="center"
              alignItems="center"
              spacing={6}
              mb={'260px'}
              ml={'120px'}
            >
              <Text
                fontFamily={'Poppins.700'}
                fontSize={'60px'}
                display={{
                  base: 'block',
                  lg: 'inline',
                }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, green.400,purple.500)"
                fontWeight="extrabold"
                _hover={{
                  bgGradient: 'linear(to-l, green.400, purple.500)',
                }}
              >
                Tom Officer
              </Text>
              <Box
                w={{
                  base: 'full',
                  md: 11 / 12,
                  xl: 9 / 12,
                }}
                mx="auto"
                textAlign={{
                  base: 'left',
                  md: 'center',
                }}
              >
                {/* <chakra.h1
                  mb={6}
                  fontSize={{
                    base: '4xl',
                    md: '6xl',
                  }}
                  fontFamily={'Poppins.700'}
                  fontWeight="bold"
                  lineHeight="none"
                  letterSpacing={{
                    base: 'normal',
                    md: 'tight',
                  }}
                  color="gray.900"
                  _dark={{
                    color: 'gray.100',
                  }}
                >
                  Hey, I'm{' '}
                  <Text
                    display={{
                      base: 'block',
                      lg: 'inline',
                    }}
                    w="full"
                    bgClip="text"
                    bgGradient="linear(to-r, green.400,purple.500)"
                    fontWeight="extrabold"
                  >
                    Tom Officer
                  </Text>{' '}
                  welcome to my portfolio
                </chakra.h1> */}
              </Box>
              <Box
                w={{
                  base: 'full',
                  md: 11 / 12,
                  xl: 9 / 12,
                }}
                mx="auto"
                textAlign={{
                  base: 'left',
                  md: 'center',
                }}
              ></Box>
            </Stack>
          </Flex>
        </Box>
      </chakra.header>
    </section>
  );
};

export default Landing;
