import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')

  return (
    <Input
      w="300px"
      value={keyword}
      placeholder={'Search'}
      onChange={e => setKeyword(e.target.value)}
    />
  )
}

export default SearchBar
