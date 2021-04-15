import React from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { Box, Heading } from '@chakra-ui/react'
import ReviewList from '../../components/ReviewList/ReviewList'

function HomePage() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        <Box mt="60px" p="10px">
          <Heading fontSize="xl" fontWeight="bold" m={3}>
            Movie Reviews
          </Heading>
          <ReviewList />
        </Box>
      </main>
    </div>
  )
}

export default HomePage
