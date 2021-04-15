import React, { useState, useEffect } from 'react'
import {
  Button,
  Box,
  Spinner,
  Grid,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import Review from './Review'
import { compareValues } from '../../../../utils/functions/compareValues'
import { getData } from '../../../../utils/functions/getData'
import { FiChevronDown } from 'react-icons/fi'

const ReviewList = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [displayNumber, setDisplayNumber] = useState(20)
  const [categorySorted, setCategorySorted] = useState('')

  useEffect(async () => {
    const data = await getData('static/movie-reviews.json')
    setData(data)
    setOriginalData(data)
    setLoading(false)
  }, [])

  const sortByCategory = (category, sortedCategory) => {
    const order =
      sortedCategory === category || category === 'critics_pick'
        ? 'desc'
        : 'asc'
    const sortFlag = sortedCategory === '' ? category : ''
    const sortedData = data.sort(compareValues(category, order))
    setData(sortedData)
    setCategorySorted(sortFlag)
  }

  const handleDisplayButton = number => {
    setDisplayNumber(displayNumber + number)
  }

  const handleInput = e => {
    const filteredData = originalData.filter(review =>
      review.display_title.toUpperCase().includes(e.target.value.toUpperCase())
    )
    setData(filteredData)
  }

  const handleCriticsPickFilter = () => {
    const filteredData = originalData.filter(
      reviews => reviews.critics_pick === 1
    )
    setData(filteredData)
  }

  const handleRatingFilter = rating => {
    const filteredData = originalData.filter(
      reviews => reviews.mpaa_rating === rating
    )
    setData(filteredData)
  }

  const reviewDisplay = loading ? (
    <Spinner />
  ) : (
    <Grid templateColumns="repeat(4, 1fr)" gap="2">
      {data.map(
        (review, i) => i < displayNumber && <Review data={review} key={i} />
      )}
    </Grid>
  )

  return (
    <Box m={3}>
      <HStack spacing={4}>
        <Button
          colorScheme="blue"
          onClick={() => {
            sortByCategory('display_title', categorySorted)
          }}>
          Sort by Movie Title
        </Button>
        <Button
          colorScheme="purple"
          onClick={() => {
            sortByCategory('publication_date', categorySorted)
          }}>
          Sort by Date of Publication
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="red"
            rightIcon={<FiChevronDown />}>
            Filter by Rating
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleRatingFilter('PG')}>PG</MenuItem>
            <MenuItem onClick={() => handleRatingFilter('PG-13')}>
              PG-13
            </MenuItem>
            <MenuItem onClick={() => handleRatingFilter('R')}>R</MenuItem>
          </MenuList>
        </Menu>
        <Button colorScheme="yellow" onClick={handleCriticsPickFilter}>
          Critics Pick
        </Button>

        <Button colorScheme="green" onClick={() => setData(originalData)}>
          Remove filters
        </Button>
        <Input w="300px" placeholder={'Search'} onChange={handleInput} />
      </HStack>
      {reviewDisplay}
      <HStack spacing={4}>
        <Button
          colorScheme="red"
          onClick={() => handleDisplayButton(-10)}
          disabled={displayNumber <= 20}>
          Display fewer
        </Button>
        <Button
          colorScheme="green"
          onClick={() => handleDisplayButton(10)}
          disabled={displayNumber >= 50 || data.length < 21}>
          Display more
        </Button>
      </HStack>
    </Box>
  )
}

export default ReviewList
