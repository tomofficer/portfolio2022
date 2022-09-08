import React, { useState } from 'react';
import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  chakra,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const Resume = () => {
  //state variables
  const [isHovering, setIsHovering] = useState(false);

  //handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section id="Resume" style={{ background: 'white' }}>
      <Box
        bgColor={'white'}
        mx="auto"
        maxW={{
          base: '7xl',
        }}
        px={{
          base: 4,
          sm: 6,
          lg: 8,
        }}
        // mt={{
        //   base: 10,
        //   sm: 12,
        //   md: 16,
        //   lg: 20,
        //   xl: 28,
        // }}
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
              // bgGradient="linear(to-r, green.400,purple.500)"
              color="black"
              fontWeight="extrabold"
              _hover={{
                bgGradient: 'linear(to-r, purple.500, green.400)',
              }}
            >
              Resume
            </chakra.span>
          </chakra.h1>
        </Box>
      </Box>

      <Box ml={'200px'}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Employment</Th>

                <Th>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    LeadrPro{' '}
                  </a>
                  <p style={{ fontSize: '10px', fontStyle: 'italic' }}>
                    (Full Stack Developer) Nov 2021 - Current
                  </p>
                </Th>

                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>
                  White Dog WoodWorking{' '}
                  <span style={{ fontSize: '10px', fontStyle: 'italic' }}>
                    (Web Developer) Jul 2022 - Current
                  </span>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Experience</Th>
                <Th>YourNextToy.com</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>JavaScriptCodingTips.com</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>GitHub Finder App</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Education</Th>
                <Th>Expression College</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Thinkful</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Certificates</Th>
                <Th>Advanced JavaScript</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>React Front To Back</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>React + Shopify Headless CMS</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Advanced Shopify Theme Dev</Th>
                <Th></Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
      </Box>
    </section>
  );
};

export default Resume;
