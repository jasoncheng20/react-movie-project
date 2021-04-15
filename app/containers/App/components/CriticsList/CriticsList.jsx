import React, { useState, useEffect } from 'react'
import { Spinner, SimpleGrid } from '@chakra-ui/react'
import Critic from './Critic'

const CriticsList = () => {
  const [loading, setLoading] = useState(true)
  const [criticData, setCriticData] = useState([])
  const [reviewData, setReviewData] = useState([])

  const getData = async () => {
    const criticPromise = fetch('static/critics.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const reviewPromise = fetch('static/movie-reviews.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const [criticResponse, reviewResponse] = await Promise.all([
      criticPromise,
      reviewPromise,
    ])
    const [criticData, reviewData] = await Promise.all([
      criticResponse.json(),
      reviewResponse.json(),
    ])
    setCriticData(criticData)
    setReviewData(reviewData)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  let display = loading ? (
    <Spinner />
  ) : (
    criticData.map(critic => (
      <Critic
        data={critic}
        key={critic.display_name}
        reviews={
          reviewData.filter(
            review => review.byline === critic.display_name.toUpperCase()
          ).length
        }
        picks={reviewData.filter(
          review =>
            review.byline === critic.display_name.toUpperCase() &&
            review.critics_pick === 1
        ).length}
      />
    ))
  )

  return <SimpleGrid columns={4}>{display}</SimpleGrid>
}

export default CriticsList
