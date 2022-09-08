import React from 'react';
import {
  Box,
  Stack,
  Flex,
  Image,
  HStack,
  Link,
  Divider,
  VStack,
  Icon,
  Text,
  color,
  Center,
} from '@chakra-ui/react';
import { FaFacebookF, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <Box
        bg="transparent"
        _dark={{
          bg: 'gray.600',
        }}
        position="relative"
      >
        <VStack py={4}>
          <HStack justify="center">
            <Link>
              <Icon
                color="purple.700"
                _dark={{
                  color: 'white',
                }}
                _hover={{ color: 'green.300' }}
                h="35px"
                w="35px"
                as={FaLinkedin}
              />
            </Link>
            <Link>
              <Icon
                color="purple.700"
                _dark={{
                  color: 'white',
                }}
                _hover={{ color: 'green.300' }}
                h="35px"
                w="35px"
                as={FaGithub}
              />
            </Link>

            <Link>
              <Icon
                color="purple.700"
                _dark={{
                  color: 'white',
                }}
                _hover={{ color: 'green.300' }}
                h="35px"
                w="35px"
                as={FaInstagram}
              />
            </Link>
          </HStack>
          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: 'white',
            }}
            color={'gray.500'}
          >
            &copy;2022 Copyright Tom Officer. All rights reserved
          </Text>
        </VStack>{' '}
      </Box>
    </div>
  );
};

export default Footer;
