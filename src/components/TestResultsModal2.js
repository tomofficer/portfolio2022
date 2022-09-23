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

const TestResultsModal = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(300deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        rounded={'full'}
        bg={'purple.700'}
        // bgGradient="linear(to-r, purple.500, green.400)"
        color={'white'}
        _hover={{
          bgGradient: 'linear(to-r, green.400, purple.500)',
          color: 'black',
        }}
        mt={'30px'}
        ml={'20px'}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        View MyTest Results
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
                      'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash_15unCX6ia.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663063103055'
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
                    <Stack spacing={0} align={'center'} mb={2}>
                      <Heading
                        fontSize={'2xl'}
                        fontWeight={500}
                        fontFamily={'body'}
                      >
                        Tom Officer
                      </Heading>
                    </Stack>

                    <Center>
                      <Text color={'gray.500'} mt={0} mb={6}>
                        View My Test Results On Indeed
                      </Text>
                    </Center>

                    <a
                      href="https://share.indeedassessments.com/attempts/7524160c0862ebb65aad7199ee1e5703eed53dc074545cb7"
                      target="_blank"
                    >
                      <Button
                        w={'full'}
                        mt={0}
                        mb={1}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        backgroundColor={'black'}
                        color="white"
                        rounded={'md'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                          bgGradient: 'linear(to-r, blue.200, blue.500)',
                        }}
                      >
                        Software Development Fit
                      </Button>
                    </a>

                    <a
                      href="https://share.indeedassessments.com/attempts/9762b4da0a2417f8a0c03399cbf8ecc5eed53dc074545cb7"
                      target="_blank"
                    >
                      <Button
                        w={'full'}
                        mt={2}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        backgroundColor={'black'}
                        color="white"
                        rounded={'md'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                          bgGradient: 'linear(to-r, blue.200, blue.500)',
                        }}
                      >
                        Attention To Detail
                      </Button>
                    </a>
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

export default TestResultsModal;
