import React from 'react';
import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ModalFooter,
  ModalBody,
  Box,
  Center,
  useColorModeValue,
  Image,
  Flex,
  Avatar,
  Stack,
  Heading,
  Link,
  Icon,
  VisuallyHidden,
  Input,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBitbucket,
} from 'react-icons/fa';

const LetsConnectModal = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        rounded={'full'}
        bg={'transparent'}
        color={'white'}
        _hover={{
          bgGradient: 'linear(to-r, green.400, purple.500)',

          color: 'black',
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Let's Connect!
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent p={0}>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Center>
                <Box
                  maxW={'370px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  overflow={'hidden'}
                  border="2px solid white"
                  borderRadius={'25px'}
                  mt={8}
                >
                  <Image
                    h={'190px'}
                    w={'full'}
                    src={
                      'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/rob-sarmiento-5xa0SI9JmmY-unsplash_wEHv7Zio1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663057107754'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: 'lg',
                      }}
                      size={'2xl'}
                      src={
                        'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie1_g2mRpUuHe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662507998685'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading
                        fontSize={'2xl'}
                        fontWeight={500}
                        fontFamily={'body'}
                      >
                        Tom Officer
                      </Heading>
                      <Text color={'gray.500'}>Full Stack Developer</Text>
                      <Text color={'gray.500'}>Mt. Shasta, California</Text>
                      <Text color={'gray.500'}>Tom@leadrpro.com</Text>
                      <Text color={'gray.500'}>(530) 925-9482</Text>
                    </Stack>

                    <Stack
                      direction={'row'}
                      justify={'center'}
                      spacing={6}
                      mt={6}
                    >
                      <Stack spacing={0} align={'center'}>
                        <Link
                          href="https://www.linkedin.com/in/tomofficer/"
                          target="_blank"
                        >
                          <Icon
                            color="blue.600"
                            _dark={{
                              color: 'white',
                            }}
                            _hover={{
                              color: 'blue.300',
                              transform: 'scale(1.2)',
                            }}
                            h="35px"
                            w="35px"
                            as={FaLinkedin}
                          />
                        </Link>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Link
                          href="https://github.com/tomofficer"
                          target="_blank"
                        >
                          <Icon
                            color="blue.600"
                            _dark={{
                              color: 'white',
                            }}
                            _hover={{
                              color: 'blue.300',
                              transform: 'scale(1.2)',
                            }}
                            h="35px"
                            w="35px"
                            as={FaGithub}
                          />
                        </Link>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Link
                          href="https://instagram.com/javascriptcodingtips?igshid=YmMyMTA2M2Y="
                          target="_blank"
                        >
                          <Icon
                            color="blue.600"
                            _dark={{
                              color: 'white',
                            }}
                            _hover={{
                              color: 'blue.300',

                              transform: 'scale(1.2)',
                            }}
                            h="35px"
                            w="35px"
                            as={FaInstagram}
                          />
                        </Link>
                      </Stack>
                    </Stack>

                    {/* <VisuallyHidden>Your Email</VisuallyHidden>
                    <Center>
                      <Text color={'gray.500'} mt={4}>
                        Subscribe to my blog
                      </Text>
                    </Center>
                    <Input
                      mt={2}
                      size="md"
                      type="email"
                      placeholder="Enter your email"
                      required
                      bgColor={'gray.200'}
                    />
                    <Button
                      w={'full'}
                      mt={2}
                      bg={useColorModeValue('#151f21', 'gray.900')}
                      backgroundColor={'blue.600'}
                      color="white"
                      rounded={'md'}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                        bgGradient: 'linear(to-r, blue.200, blue.500)',
                      }}
                    >
                      Subscribe
                    </Button> */}
                  </Box>
                </Box>
              </Center>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LetsConnectModal;
