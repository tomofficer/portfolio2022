import { Box, Center, Flex, chakra, Image, Link, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const MyWork = () => {
  //data
  const projects = [
    {
      index: 0,
      title: 'LeadrPro',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath: '',
      liveLink: 'https://www.leadrpro.com/',
      gitHubLink: '',
    },
    {
      index: 1,
      title: 'Your Next Toy',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath: '',
      gitHubLink: '',
    },
    {
      index: 2,
      title: 'White Dog Woodworking',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath: '',
      gitHubLink: '',
    },
    {
      index: 3,
      title: 'GitHub Finder',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath: '',
      gitHubLink: '',
    },
  ];

  //check if index is even
  const isEven = num => {
    return num % 2 === 0;
  };

  return (
    <section id="#MyWork">
      <div style={{ backgroundColor: '#edf3f8' }}>
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
                // bgGradient="linear(to-r, green.400,purple.500)"
                color="black"
                fontWeight="extrabold"
                _hover={{
                  bgGradient: 'linear(to-r, purple.500, green.400)',
                }}
              >
                My Work
              </chakra.span>
            </chakra.h1>
          </Box>
        </Box>

        <Box>
          {projects.map(project => (
            <>
              {isEven(project.index) && (
                <Flex
                  bg="#edf3f8"
                  _dark={{
                    bg: '#3e3e3e',
                  }}
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    bg="white"
                    _dark={{
                      bg: 'gray.800',
                    }}
                    mx={{
                      lg: 8,
                    }}
                    display={{
                      lg: 'flex',
                    }}
                    maxW={{
                      lg: '5xl',
                    }}
                    shadow={{
                      lg: 'lg',
                    }}
                    rounded={{
                      lg: 'lg',
                    }}
                  >
                    <Box
                      w={{
                        lg: '50%',
                      }}
                    >
                      <Box
                        h={{
                          base: 64,
                          lg: 'full',
                        }}
                        rounded={{
                          lg: 'lg',
                        }}
                        bgSize="cover"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                        }}
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                      ></Box>
                    </Box>

                    <Box
                      py={12}
                      px={6}
                      maxW={{
                        base: 'xl',
                        lg: '5xl',
                      }}
                      w={{
                        lg: '50%',
                      }}
                    >
                      <chakra.h2
                        fontSize={{
                          base: '2xl',
                          md: '3xl',
                        }}
                        color="gray.800"
                        _dark={{
                          color: 'white',
                        }}
                        fontWeight="bold"
                      >
                        {project.title}{' '}
                        <chakra.span
                          color="brand.600"
                          _dark={{
                            color: 'brand.400',
                          }}
                        ></chakra.span>
                      </chakra.h2>
                      <chakra.p
                        mt={4}
                        color="gray.600"
                        _dark={{
                          color: 'gray.400',
                        }}
                      >
                        {project.description}
                      </chakra.p>

                      <Box
                        mt={8}
                        display="flex"
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                      >
                        <Link
                          bg="gray.900"
                          color="gray.100"
                          px={5}
                          py={3}
                          fontWeight="semibold"
                          rounded="lg"
                          _hover={{
                            bgGradient: 'linear(to-l, green.400,purple.500)',
                            transform: 'scale(1.05)',
                          }}
                          href={project.liveLink}
                          target="_blank"
                        >
                          View Live
                        </Link>
                        <Image
                          src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/github_Ljbtk34W9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662522137177"
                          h={'50px'}
                          _hover={{
                            transform: 'scale(1.2)',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              )}
              {isEven(project.index) === false && (
                <Flex
                  bg="#edf3f8"
                  _dark={{
                    bg: '#3e3e3e',
                  }}
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    bg="white"
                    _dark={{
                      bg: 'gray.800',
                    }}
                    mx={{
                      lg: 8,
                    }}
                    display={{
                      lg: 'flex',
                    }}
                    maxW={{
                      lg: '5xl',
                    }}
                    shadow={{
                      lg: 'lg',
                    }}
                    rounded={{
                      lg: 'lg',
                    }}
                  >
                    <Box
                      py={12}
                      px={6}
                      maxW={{
                        base: 'xl',
                        lg: '5xl',
                      }}
                      w={{
                        lg: '50%',
                      }}
                    >
                      <chakra.h2
                        fontSize={{
                          base: '2xl',
                          md: '3xl',
                        }}
                        color="gray.800"
                        _dark={{
                          color: 'white',
                        }}
                        fontWeight="bold"
                      >
                        {project.title}{' '}
                        <chakra.span
                          color="brand.600"
                          _dark={{
                            color: 'brand.400',
                          }}
                        ></chakra.span>
                      </chakra.h2>
                      <chakra.p
                        mt={4}
                        color="gray.600"
                        _dark={{
                          color: 'gray.400',
                        }}
                      >
                        {project.description}
                      </chakra.p>

                      <Box
                        mt={8}
                        display="flex"
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                      >
                        <Link
                          bg="gray.900"
                          color="gray.100"
                          px={5}
                          py={3}
                          fontWeight="semibold"
                          rounded="lg"
                          _hover={{
                            bgGradient: 'linear(to-l, green.400,purple.500)',
                            transform: 'scale(1.05)',
                          }}
                          href={project.liveLink}
                          target="_blank"
                        >
                          View Live
                        </Link>
                        <Image
                          src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/github_Ljbtk34W9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662522137177"
                          h={'50px'}
                          _hover={{
                            transform: 'scale(1.2)',
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      w={{
                        lg: '50%',
                      }}
                    >
                      <Box
                        h={{
                          base: 64,
                          lg: 'full',
                        }}
                        rounded={{
                          lg: 'lg',
                        }}
                        bgSize="cover"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                        }}
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Flex>
              )}
            </>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default MyWork;
