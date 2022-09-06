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
} from '@chakra-ui/react';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <Box
        bg="black"
        _dark={{
          bg: 'gray.600',
        }}
      >
        <VStack py={3}>
          <HStack justify="center">
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                // as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                // as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: 'white',
                }}
                h="20px"
                w="20px"
                // as={FaLinkedinIn}
              />
            </Link>
          </HStack>

          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: 'white',
            }}
          >
            &copy;2022 Copyright Tom Officer. All rights reserved
          </Text>
        </VStack>
      </Box>
    </div>
  );
};

export default Footer;
