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
  const handleMouseEnter = id => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  //employment data
  const employment = [
    {
      company: 'LeadrPro',
      jobTitle: 'Full Stack Developer',
      location: 'Remote, California',
      date: 'Nov 2021 - Current',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
        'Helped develop functional databases and servers to support scalability on the backend',
      ],
    },
    {
      company: 'White Dog Woodworking',
      jobTitle: 'Front End Developer',
      location: 'Remote, California',
      date: 'Nov 2021 - Current',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
        'Helped develop functional databases and servers to support scalability on the backend',
      ],
    },
  ];

  //experience data
  const experience = [
    {
      company: 'Your Next Toy.com',
      jobTitle: 'Front End Developer',
      location: 'Remote, California',
      date: 'Aug 2022',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
        'Helped develop functional databases and servers to support scalability on the backend',
      ],
    },
    {
      company: 'JavaScript Coding Tips.com',
      jobTitle: 'Front End Developer',
      location: 'Remote, California',
      date: 'Sep 2022',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
        'Helped develop functional databases and servers to support scalability on the backend',
      ],
    },
    {
      company: 'GitHub Finder App',
      jobTitle: 'Full Stack Developer',
      location: 'Remote, California',
      date: 'Sep 2021 ',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
        'Helped develop functional databases and servers to support scalability on the backend',
      ],
    },
  ];

  //education data
  const education = [
    {
      school: 'Thinkful',
      programTitle: 'Software Engineering Program',
      location: 'Remote, California',
      date: 'Apr 2021 - Jan 2022',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
      ],
    },
    {
      school: 'Expression College',
      programTitle: 'Bachelor Of Applied Science, Audio Engineering',
      location: 'Remote, California',
      date: 'Feb 2012 - Dec 2015',
      descriptions: [
        'Developed a full stack web application to host video demos for Saas companies',
        'Built out a visually appealing front end by translating designer wire-frames into Jsx code',
      ],
    },
  ];

  //certificate data
  const certificates = [
    {
      title: 'Advanced JavaScript',
      school: 'Udemy',
      date: 'Nov 2021',
      description:
        'Developed a full stack web application to host video demos for Saas companies',
    },
    {
      title: 'React Front To Back',
      school: 'Udemy',
      date: 'Nov 2021',
      description:
        'Developed a full stack web application to host video demos for Saas companies',
    },
    {
      title: 'React + Shopify (Headless CMS)',
      school: 'Udemy',
      date: 'Sep 2021',
      description:
        'Developed a full stack web application to host video demos for Saas companies',
    },
    {
      title: 'Advanced Shopify Theme Development : Liquid + Vue.js',
      school: 'Udemy',
      date: 'Sep 2021',
      description:
        'Developed a full stack web application to host video demos for Saas companies',
    },
  ];

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
                <Th fontSize={'18px'} position={'relative'}>
                  Employment
                </Th>

                <Th>
                  {/* {employment.map(job => (
                    <>
                      <a
                        href="https://www.leadrpro.com/"
                        target={'_blank'}
                        style={{
                          color: isHovering ? 'blue' : '',
                          fontSize: '14px',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Box mt={'20px'}>
                          {job.company}{' '}
                          <span style={{ fontStyle: 'italic' }}>
                            • {job.jobTitle} •
                          </span>{' '}
                        </Box>
                      </a>
                      <p
                        style={{
                          fontSize: '12px',
                          fontStyle: 'italic',
                          marginLeft: '40px',
                          paddingBottom: '5px',
                          paddingTop: '5px',
                        }}
                      >
                        ({job.location}) {job.date}
                      </p>
                      {job.descriptions.map(description => (
                        <>
                          <p
                            style={{
                              fontSize: '10px',
                              marginLeft: '100px',
                            }}
                          >
                            •{description}
                          </p>
                        </>
                      ))}
                    </>
                  ))} */}

                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    LeadrPro{' '}
                    <span style={{ fontStyle: 'italic' }}>
                      • Full Stack Developer •
                    </span>{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Remote, California) Nov 2021 - Current
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Developed a full stack web application to host video demos
                    for SaaS companies
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Built out a visually appealing front end by translating
                    designer wire-frames into JSX code
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Helped develop functional databases and servers to support
                    scalability on the back-end
                  </p>

                  <a
                    href="https://www.whitedogwoodworking.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    White Dog Woodworking{' '}
                    <span style={{ fontStyle: 'italic' }}>
                      • Front End Developer •
                    </span>{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Remote, California) Jul 2022 - Current (Contract)
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Spearheaded custom website from wireframe design to
                    production level deployment
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Used industry best practices to write clean front-end code
                    using JavaScript, HTML + CSS
                  </p>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Experience</Th>
                <Th>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Your Next Toy.com{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Affiliate Marketing Website) Sep 2022
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Spearheaded custom website from wireframe design to
                    production level deployment
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Developed using React.js, Chakra UI, JavaScript, HTML and
                    CSS
                  </p>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    JavaScript Coding Tips.com{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Programming Blog Website) Sep 2022
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Modern developer blog focused on industry best practices
                    for JavaScript and React.js
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Developed using React.js, Chakra UI, JavaScript, HTML and
                    CSS
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Implemented fetch calls to the Contentful API to store and
                    retrieve blog data
                  </p>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    GitHub Finder App{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Full Stack Web App) Dec 2021
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Full stack web application developed with React.js,
                    Express.js, MongoDb and Node.js
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Implemented API fetch calls to retrieve, display and store
                    data from the GitHub API
                  </p>
                </Th>

                <Th></Th>
              </Tr>
            </Thead>

            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Education</Th>

                <Th>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Thinkful{' '}
                    <span style={{ fontStyle: 'italic' }}>
                      • Software Engineering Program •
                    </span>
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Remote, California) Apr 2021 - Jan 2022
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •9 Month mentorship from a senior software engineer
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Meeting twice weekly to learn industry standards in both
                    front and back-end technologies
                  </p>
                  <a
                    href="https://www.whitedogwoodworking.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Expression College{' '}
                    <span style={{ fontStyle: 'italic' }}>
                      • Bachelor Of Applied Science, Audio Engineering •
                    </span>{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Emeryville, California) Feb 2012 - Dec 2015
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Spearheaded custom website from wireframe design to
                    production level deployment
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Used industry best practices to write clean front-end code
                    using JavaScript, HTML + CSS
                  </p>{' '}
                </Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Certificates</Th>
                <Th>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Advanced JavaScript{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Udemy) Nov 2021
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Developed using React.js, Chakra UI, JavaScript, HTML and
                    CSS
                  </p>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    React Front To Back{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Udemy) Nov 2021
                  </p>

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Developed using React.js, Chakra UI, JavaScript, HTML and
                    CSS
                  </p>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    React + Shopify (Headless CMS){' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Udemy) Sep 2021
                  </p>

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Developed using React.js, Chakra UI, JavaScript, HTML and
                    CSS
                  </p>
                  <a
                    href="https://www.leadrpro.com/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Advanced Shopify Theme Development : Liquid + Vue.js{' '}
                  </a>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Udemy) Sep 2021
                  </p>

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Developed using React.js, Chakra UI, JavaScript, HTML and
                    CSS
                  </p>
                </Th>
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
