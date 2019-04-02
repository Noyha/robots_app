import React from 'react'
import { Input } from 'reactstrap'

const SearchBar = ({ handelChange }) => {
  return (
      <Input 
        type="search" 
        placeholder="Search for robot..." 
        onChange={ handelChange } 
        />
  )
}

export default SearchBar
