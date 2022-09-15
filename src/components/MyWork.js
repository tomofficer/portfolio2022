import { Box, Flex, chakra, Image, Link, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaBitbucket } from 'react-icons/fa';

const MyWork = ({ blogRef }) => {
  //data
  const projects = [
    {
      index: 0,
      title: 'LeadrPro',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      liveLink: 'https://www.leadrpro.com/',
      gitHubLink: 'private',
    },
    {
      index: 1,
      title: 'Your Next Toy',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/chris-hardy-H5Ffv4I5ZMI-unsplash_CMz4Jv9Ql.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663021113717',
      liveLink: 'https://yournexttoy.com',
      gitHubLink: 'https://github.com/tomofficer/best-kids-toys-affiliate',
    },
    {
      index: 2,
      title: 'White Dog Woodworking',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/wdww_Ge3jBVDWu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663020587694',
      liveLink: 'https://whitedogwoodworking.com',
      gitHubLink: 'https://github.com/tomofficer/whitedogwoodworking',
    },
    {
      index: 3,
      title: 'JavaScript Coding Tips Blog',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/claudio-schwarz-i25aqE_YUZs-unsplash_k5SlbiydX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663021962512',
      liveLink: 'https://javascriptcodingtips.com',
      gitHubLink: 'https://github.com/tomofficer/js-coding-tips-blog',
    },
    {
      index: 4,
      title: 'GitHub Finder App',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id aspernatur numquam provident nisi possimus consequatur ut, suscipit officiis et.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/marvin-meyer-SYTO3xs06fU-unsplash_nxxNA9f5M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663020924096',
      liveLink: '',
      gitHubLink: 'https://github.com/tomofficer/github-finder',
    },
  ];

  //check if index is even
  const isEven = num => {
    return num % 2 === 0;
  };

  //JSX RETURN
  return (
    <>
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
                        <a href={project.liveLink} target="_blank">
                          <Box
                            h={{
                              base: 64,
                              lg: 'full',
                            }}
                            rounded={{
                              lg: 'lg',
                            }}
                            // style={{
                            //   backgroundImage:
                            //     "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                            // }}
                            backgroundImage={project.imgPath}
                            bgSize="cover"
                            _hover={{
                              transform: 'scale(1.05)',
                            }}
                          ></Box>
                        </a>
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
                              bgGradient:
                                'linear(to-l, purple.300, purple.500)',
                              transform: 'scale(1.05)',
                            }}
                            href={project.liveLink}
                            target="_blank"
                          >
                            View Live
                          </Link>
                          <a href={project.gitHubLink} target="_blank">
                            <Image
                              src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/github_Ljbtk34W9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662522137177"
                              h={'50px'}
                              _hover={{
                                transform: 'scale(1.2)',
                              }}
                            />
                          </a>
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
                              bgGradient:
                                'linear(to-r, purple.300, purple.500)',
                              transform: 'scale(1.05)',
                            }}
                            href={project.liveLink}
                            target="_blank"
                          >
                            View Live
                          </Link>
                          <a href={project.gitHubLink} target="_blank">
                            <Image
                              src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/github_Ljbtk34W9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662522137177"
                              h={'50px'}
                              _hover={{
                                transform: 'scale(1.2)',
                              }}
                            />
                          </a>
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
                          // style={{
                          //   backgroundImage:
                          //     "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
                          // }}
                          backgroundImage={project.imgPath}
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
        <div
          ref={blogRef}
          style={{ paddingTop: '70px', backgroundColor: '#edf3f8' }}
        ></div>
      </section>
    </>
  );
};

export default MyWork;
