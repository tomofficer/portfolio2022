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

const CodeSampleModal = ({ sample }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(250deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Text
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {sample.title}
      </Text>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <Box>
          <ModalContent p={0}>
            <ModalCloseButton />

            <Center flexDirection={'column'}>
              <ModalHeader color="red.500">{sample.title}</ModalHeader>
              <Text textAlign={'center'} color={'gray.500'} mt={0} mb={6}>
                {sample.description}
              </Text>

              <Image src={sample.imgPath} />
            </Center>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};

export default CodeSampleModal;
