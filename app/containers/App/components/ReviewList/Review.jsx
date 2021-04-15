import React from 'react'
import {
  Text,
  Box,
  Link,
  Image,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { FaAward } from 'react-icons/fa'

const ReviewModalContent = ({ data }) => (
  <ModalContent>
    <ModalHeader>
      <Text fontSize="xl" fontWeight="extrabold" color="blue.400">
        {data.display_title}
        {data.critics_pick === 1 && (
          <Icon as={FaAward} boxSize="24px" color="yellow.400" />
        )}
      </Text>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody mb="6px">
      <Text fontWeight="bold">
        {data.headline}
        {data.mpaa_rating && (
          <Text color="red.400">Rated {data.mpaa_rating}</Text>
        )}
      </Text>
      {data.multimedia.src && (
        <Image
          src={data.multimedia.src}
          borderRadius="6px"
          h="250px"
          my="8px"
          mx="auto"
        />
      )}
      <Text my={5}>
        {data.summary_short}{' '}
        <Link color="blue.400" href={data.link.url} isExternal>
          <Text display="inline" fontSize="md">
            See more...
          </Text>
        </Link>
      </Text>
      <Text fontStyle="italic">Review written: {data.publication_date}</Text>
      <Text fontStyle="italic">by {data.byline}</Text>
    </ModalBody>
  </ModalContent>
)

const Review = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="8px"
      m="4"
      p="4"
      maxW="320px"
      minH="324px"
      alignSelf="center"
      cursor="pointer"
      onClick={onOpen}>
      {data.multimedia.src && (
        <Image
          src={data.multimedia.src}
          borderRadius="6px"
          h="200px"
          my="8px"
        />
      )}
      <Text fontSize="lg" fontWeight="extrabold" color="blue.400">
        {data.display_title}
        {data.critics_pick === 1 && (
          <Icon as={FaAward} boxSize="16px" color="yellow.400" />
        )}
      </Text>
      {data.mpaa_rating && (
        <Text color="red.400">Rated {data.mpaa_rating}</Text>
      )}
      <Text fontStyle="italic">Review written: {data.publication_date}</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ReviewModalContent data={data} />
      </Modal>
    </Box>
  )
}

export default Review
