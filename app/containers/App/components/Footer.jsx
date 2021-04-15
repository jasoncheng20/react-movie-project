import React from 'react'
import { Center, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <Center
        w="100%"
        zIndex="sticky"
        pos="fixed"
        bottom="0px"
        bg="white"
        h="60px">
        <Text fontWeight="bold">Footer</Text>
      </Center>
    </footer>
  )
}

export default Footer
