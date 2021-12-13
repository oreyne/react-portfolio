import { useState } from 'react'

const SearchBar = ({ searching, onlyStock, search }) => {
  return (
    <div>
      <fieldset>
        <input type="text" onChange={searching} value={search} />
        <input type="checkbox" onChange={onlyStock} />
      </fieldset>
    </div>
  )
}

export default SearchBar
