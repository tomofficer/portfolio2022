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
  Icon,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';

const Resume = ({ myWorkRef }) => {
  //state variables
  const [isHovering, setIsHovering] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  //handlers
  const handleMouseEnter = id => {
    setCurrentId(id);
    // setIsHovering(true);
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
      <div></div>
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
                bgGradient: 'linear(to-l, green.400, purple.500)',
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
                  <chakra.header fontSize="14px">
                    Full Stack Developer{' '}
                    <span style={{ fontStyle: 'italic' }}>• LeadrPro </span>{' '}
                  </chakra.header>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                  >
                    (Remote, California) Nov 2021 - Current (Full Time)
                  </p>
                  {/* TEMP REMOVED EYE ICON UNTIL PROJECT IS FINALIZED */}

                  {/* <a href="https://www.leadrpro.com/" target={'_blank'}>
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a> */}
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
                  <chakra.header fontSize="14px">
                    Front End Developer{' '}
                    <span style={{ fontStyle: 'italic' }}>
                      • White Dog Woodworking
                    </span>{' '}
                  </chakra.header>

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
                  {/* TEMP REMOVED EYE ICON UNTIL PROJECT IS FINALIZED */}
                  {/* <span>
                    <a
                      href="https://www.whitedogwoodworking.com/"
                      target={'_blank'}
                    >
                      <Icon
                        position={'absolute'}
                        ml={'10px'}
                        as={FaEye}
                        _hover={{ color: 'blue.500' }}
                        h="13px"
                        w="15px"
                      />
                    </a>
                  </span> */}
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
                  <chakra.header fontSize={'14px'}>
                    Front End Developer{' '}
                    {/* <span style={{ fontStyle: 'italic' }}> •</span>{' '} */}
                    <span style={{ fontStyle: 'italic' }}>
                      • Your Next Toy
                    </span>{' '}
                  </chakra.header>

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

                  {/* TEMP REMOVED EYE ICON UNTIL PROJECT IS FINALIZED */}

                  {/* <a href="https://www.yournexttoy.com/" target={'_blank'}>
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a> */}
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Developed a modern, responsive frontend using React,
                    JavaScript, HTML and CSS
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Tested, debugged and deployed 10,000+ lines of code and
                    optimized for SEO and accessibility
                  </p>

                  <chakra.header fontSize={'14px'}>
                    Web Developer{' '}
                    {/* <span style={{ fontStyle: 'italic' }}> •</span>{' '} */}
                    <span style={{ fontStyle: 'italic' }}>
                      • JavaScript Coding Tips
                    </span>{' '}
                  </chakra.header>

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
                  {/* TEMP REMOVED EYE ICON UNTIL PROJECT IS FINALIZED */}

                  {/* <a
                    href="https://www.javascriptcodingtips.com/"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a> */}

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Built out a modern, responsive frontend from scratch using
                    React, HTML and CSS
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Implemented fetch calls to the Contentful API to store and
                    retrieve data from the backend
                  </p>

                  <chakra.header fontSize={'14px'}>
                    Software Engineer{' '}
                    {/* <span style={{ fontStyle: 'italic' }}> •</span>{' '} */}
                    <span style={{ fontStyle: 'italic' }}>
                      • GitHub Finder App
                    </span>{' '}
                  </chakra.header>

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
                  {/* TEMP REMOVED EYE ICON UNTIL PROJECT IS FINALIZED */}

                  {/* <a
                    href="https://githubfinder41987.netlify.app/"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a> */}
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
                <Th fontSize={'18px'}>Technical Skills</Th>
                <Th>
                  <a
                    href="https://www.udemy.com/certificate/UC-9537e18e-dd7c-4002-9e9b-50d8518936cd/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Frontend Skills{' '}
                  </a>

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '40px',
                      marginBottom: '20px',
                    }}
                  >
                    •JavaScript | React | HTML | CSS | Next.js | Vue.js |
                    Shopify : Liquid | Bootstrap | Gatsby.js | Chakra UI
                  </p>
                  <a
                    href="https://www.udemy.com/certificate/UC-9537e18e-dd7c-4002-9e9b-50d8518936cd/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Backend Skills{' '}
                  </a>

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '40px',
                      marginBottom: '20px',
                    }}
                  >
                    •Node.js | Express.js | Knex.js | PostgreSQL | MongoDB |
                    Separation of concerns | RESTful API's
                  </p>
                  <a
                    href="https://www.udemy.com/certificate/UC-9537e18e-dd7c-4002-9e9b-50d8518936cd/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Soft Skills{' '}
                  </a>
                  {/* <div ref={myWorkRef}></div> */}
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '40px',
                      marginBottom: '20px',
                    }}
                  >
                    •Critical problem solving | Self management | Empathy |
                    Communication | Creativity | Self-awareness
                  </p>
                  <a
                    href="https://www.udemy.com/certificate/UC-2d46e76f-3c8b-4ded-b80b-ce25c769bbe2/"
                    target={'_blank'}
                    style={{
                      color: isHovering ? 'blue' : '',
                      fontSize: '14px',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Miscellaneous{' '}
                  </a>

                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '40px',
                      marginBottom: '20px',
                    }}
                  >
                    •SEO | d3.js | Mailchimp |Contentful | MouseFlow | Git |
                    Figma | Adobe Photoshop | Asana | Postman | Jira
                  </p>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Education</Th>

                <Th>
                  <chakra.header fontSize={'14px'}>
                    Software Engineering Program{' '}
                    <span style={{ fontStyle: 'italic' }}>• Thinkful </span>
                  </chakra.header>
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
                  <a
                    href="https://ik.imagekit.io/v66nb6oaq/Certificates/Thinkful-certificate_AzyLoiXVN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663217660714"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Learned industry standards & best practices in both
                    frontend and backend technology
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Practiced modern Agile SCRUM development using JavaScript,
                    React, Express and Node.js
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Developed, designed & deployed numerous production level
                    full stack web applications
                  </p>
                  <chakra.header fontSize={'14px'}>
                    Bachelor Of Applied Science, Audio Engineering{' '}
                    <span style={{ fontStyle: 'italic' }}>
                      • Expression College
                    </span>{' '}
                  </chakra.header>
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
                  {/* <a href="https://www.leadrpro.com/" target={'_blank'}>
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a> */}
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                    }}
                  >
                    •Learned industry standards in professional studio
                    recording, live sound & post-production
                  </p>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Learned modern recording techniques, production skills,
                    sound design, acoustics,
                    <br />{' '}
                    <span style={{ paddingLeft: '5px' }}>
                      MIDI systems, mixing, mastering and digital editing
                    </span>
                  </p>{' '}
                </Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Thead>
              <Tr>
                <Th fontSize={'18px'}>Certificates</Th>
                <Th>
                  <chakra.header fontSize={'14px'}>
                    Advanced JavaScript{' '}
                  </chakra.header>
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
                  <a
                    href="https://www.udemy.com/certificate/UC-9537e18e-dd7c-4002-9e9b-50d8518936cd/"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Deep dive into JS fundamentals using Async and Object
                    Oriented Programming
                  </p>
                  <chakra.header fontSize={'14px'}>
                    React Front To Back{' '}
                  </chakra.header>
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
                  <a
                    href="https://www.udemy.com/certificate/UC-2d46e76f-3c8b-4ded-b80b-ce25c769bbe2/"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Learned Modern React 16.8+ Including Hooks, Context API,
                    Full Stack MERN & Redux
                  </p>

                  <chakra.header fontSize={'14px'}>
                    React + Shopify (Headless CMS){' '}
                  </chakra.header>
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
                  <a
                    href="https://www.udemy.com/certificate/UC-0890bf55-645f-47ac-9a9f-2792437deb60/"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Built a Headless Shopify Storefront using the Shopify API,
                    React Hooks and Context API
                  </p>
                  <chakra.header fontSize={'14px'}>
                    Advanced Shopify Theme Development : Liquid + Vue.js{' '}
                  </chakra.header>
                  <p
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginLeft: '40px',
                      paddingBottom: '5px',
                      paddingTop: '5px',
                    }}
                    ref={myWorkRef}
                  >
                    (Udemy) Sep 2021
                  </p>
                  <a
                    href="https://www.udemy.com/certificate/UC-9f51f7d0-29b6-42b2-8c43-eef5b7404787/"
                    target={'_blank'}
                  >
                    <Icon
                      position={'absolute'}
                      ml={'10px'}
                      as={FaEye}
                      _hover={{ color: 'blue.500' }}
                      h="13px"
                      w="15px"
                    />
                  </a>
                  <p
                    style={{
                      fontSize: '10px',
                      marginLeft: '100px',
                      marginBottom: '20px',
                    }}
                  >
                    •Learned to build Shopify themes using Liquid, JavaScript,
                    and Vue.js v3.0 from scratch
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
