import React from 'react';
import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Box,
  Center,
  useColorModeValue,
  Image,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Icon,
  Text,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBitbucket,
} from 'react-icons/fa';
import CodeSampleModal from './CodeSampleModal';
import LetsConnectModal from './LetsConnectModal';

const PrivateRepoModal = () => {
  //code sample data
  const codeSamples = [
    {
      title: 'API Calls',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sit dolorem aut pariatur alias quaerat voluptate veritatis minima, saepe reprehenderit.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/Screen_Shot_2022-09-14_at_11.48.25_PM_uxS638lIO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663224555378',
    },
    {
      title: 'Conditional Rendering',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sit dolorem aut pariatur alias quaerat voluptate veritatis minima, saepe reprehenderit.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/Screen_Shot_2022-09-14_at_11.48.25_PM_uxS638lIO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663224555378',
    },
    {
      title: 'React useEffect Hook',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sit dolorem aut pariatur alias quaerat voluptate veritatis minima, saepe reprehenderit.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/Screen_Shot_2022-09-14_at_11.48.25_PM_uxS638lIO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663224555378',
    },
    {
      title: 'React useState Hook',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sit dolorem aut pariatur alias quaerat voluptate veritatis minima, saepe reprehenderit.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/Screen_Shot_2022-09-14_at_11.48.25_PM_uxS638lIO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663224555378',
    },
  ];

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(180deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Image
        src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/github_Ljbtk34W9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662522137177"
        h={'50px'}
        _hover={{
          transform: 'scale(1.2)',
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent p={0}>
          <ModalCloseButton />
          <ModalBody bgGradient="linear(to-r, red.400, red.100)">
            <Box
              maxW={'500px'}
              w={'full'}
              p={10}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              overflow={'hidden'}
              border="2px solid white"
              borderRadius={'25px'}
              mt={10}
              mb={5}
            >
              <Center flexDirection={'column'}>
                <Icon
                  color="red.500"
                  _dark={{
                    color: 'white',
                  }}
                  h="70px"
                  w="70px"
                  as={FaGithub}
                />
                <ModalHeader color="red.500">
                  Sorry, this is a private repo!
                </ModalHeader>
                <Text textAlign={'center'} color={'gray.500'} mt={0} mb={6}>
                  Unfortunately by law I can't share this repo publicly, but
                  feel free to check out a few code snippets that demonstrate
                  the skills I contributed to this project.
                </Text>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        isActive={isOpen}
                        as={Button}
                        bg="black"
                        color="white"
                        _hover={{
                          transform: 'translateY(-2px)',
                          bg: 'green.400',
                        }}
                        // bgGradient="linear(to-l, green.100, green.300)"
                        // rightIcon={<ChevronDownIcon />}
                      >
                        {isOpen ? 'Hide Code Samples' : 'View Code Samples'}
                      </MenuButton>

                      <MenuList>
                        {codeSamples.map(sample => (
                          <>
                            <MenuItem>
                              <CodeSampleModal sample={sample} />
                            </MenuItem>
                          </>
                        ))}
                        {/* <MenuItem>API Calls</MenuItem>
                        <MenuItem>
                          <CodeSampleModal />
                        </MenuItem>
                        <MenuItem>Conditional Rendering</MenuItem>
                        <MenuItem>React useEffect Hook</MenuItem>
                        <MenuItem>React useState Hook</MenuItem> */}
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PrivateRepoModal;
