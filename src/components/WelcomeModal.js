import React, { useEffect } from 'react';
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Center,
  useDisclosure,
  useColorModeValue,
  ModalFooter,
} from '@chakra-ui/react';

const WelcomeModal = () => {
  useEffect(() => {
    setOverlay(<OverlayOne />);
    onOpen();
  }, []);

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
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent p={0}>
          <ModalCloseButton />
          <ModalBody>
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
            ></Box>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WelcomeModal;
