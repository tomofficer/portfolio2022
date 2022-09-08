import React from 'react';
import {
  useColorModeValue,
  chakra,
  Box,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

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
          // opacity={'80%'}
        >
          <Flex
            align="center"
            pos="relative"
            justify="center"
            boxSize="full"
            // bg="blackAlpha.700"
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
              <span>
                {' '}
                <chakra.p
                  color="gray.500"
                  position="relative"
                  mt={'-40px'}
                  ml={'360px'}
                >
                  <Typewriter
                    color="white"
                    onInit={typewriter => {
                      typewriter

                        .typeString('Full Stack Developer | Software Engineer ')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('React.js | JavaScript | HTML | CSS ')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Node.js | Express | Knex | PostgreSQL ')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Agile Scrum Development | Asana | Jira ')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Test Driven Development | Mocha | Chai ')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Adobe Photoshop CS6 | Figma | FigJam ')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          'Former Audio Engineer | Pro Tools | Logic Pro'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Let's connect! ")
                        .pauseFor(1000)
                        .start();
                    }}
                  />
                </chakra.p>
              </span>

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
