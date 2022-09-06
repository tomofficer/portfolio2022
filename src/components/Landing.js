import React from 'react';
import {
  useColorModeValue,
  chakra,
  Box,
  Flex,
  Stack,
  Heading,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Landing = () => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <div>
      <chakra.header>
        <Box
          w="full"
          h="container.lg"
          backgroundImage="url(https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/portfolio1cropped_vY_CBq_Kv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662493718865)"
          bgPos="center"
          bgSize="cover"
        >
          <Flex
            align="center"
            pos="relative"
            justify="center"
            boxSize="full"
            bg="blackAlpha.700"
          >
            <Stack textAlign="center" alignItems="center" spacing={6}></Stack>
          </Flex>
        </Box>
      </chakra.header>
    </div>
  );
};

export default Landing;
