import React from 'react'
import { Text, Image, Box, Center, Divider } from '@chakra-ui/react'

const Critic = ({ data, reviews, picks }) => {
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="2px"
      m="4"
      p="8"
      minW="320px"
      minH="200px"
      alignSelf="center">
      <Text fontSize="lg" fontWeight="bold" color="gray.700">
        {data.display_name}
      </Text>

      <Text maxW="500px" noOfLines={4}>
        {data.bio}
      </Text>

      {data.multimedia && (
        <Center m="4">
          <Image
            src={data.multimedia.resource.src}
            borderRadius="full"
            boxSize="150px"
            fit="cover"
          />
        </Center>
      )}
      <Divider my={4}/>
      <Text>
        {data.display_name} has reviewed {reviews} films, and has picked {picks} films.
      </Text>
    </Box>
  )
}

export default Critic
