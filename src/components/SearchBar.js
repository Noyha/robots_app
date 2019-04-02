import React from 'react'
import { Input } from 'reactstrap'

const SearchBar = ({ HandelChange }) => {
  return (
      <Input 
        type="search" 
        placeholder="Enter robot name..." 
        onChange={HandelChange} 
        />
  )
}

export default SearchBar
