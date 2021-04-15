import React from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import CriticsList from '../../components/CriticsList/CriticsList'
import { Box, Heading } from '@chakra-ui/react'

function CriticsPage() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Critics" />
      </Helmet>
      <main>
        <Box mt="60px" p="20px">
          <Heading fontSize="xl" fontWeight="bold">
            Meet the Critics
          </Heading>
          <CriticsList />
        </Box>
      </main>
    </div>
  )
}

export default CriticsPage
