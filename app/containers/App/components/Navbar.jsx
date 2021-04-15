import React from 'react'
import SearchBar from './ReviewList/SearchBar'

import {
  Box,
  Link,
  Flex,
  Center,
  HStack,
  Spacer,
  Icon,
  Text,
} from '@chakra-ui/react'
import { FaHome, FaPenNib } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
      <Box
        w="100%"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        h="60px"
        p="16px"
        transition="all 0.25s"
        bg="black"
        color="white">
        <Center h="100%">
          <Flex justify="space-evenly" align="center" w="40%">
            <Link href="/home">
              <Icon as={FaHome} />
              <Text p={2} display="inline">
                Home
              </Text>
            </Link>
            <Link href="/critics">
              <Icon as={FaPenNib} />
              <Text p={2} display="inline">
                Critics
              </Text>
            </Link>
          </Flex>
        </Center>
      </Box>
    </nav>
  )
}

export default Navbar
