import { useState } from 'react'
import SearchBar from './../filterable-product-table/SearchBar'
import ProductTable from './../filterable-product-table/ProductTable'

const FilterableProductTable = () => {

  const [ search, setSearch ] = useState('')
  const [ temporal, setTemporal ] = useState([])
  const [ allData, setAllData ] = useState([
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", id:"1"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", id:"2"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", id:"3"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch", id:"4"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5", id:"5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7", id:"6"}
  ])

  const onlyStock = (e) => {
    setTemporal(allData.filter((product) => e.currentTarget.checked === product.stocked))
  }

  const searching = (e) => {
    setSearch(e.target.value)
    setTemporal(allData.filter((product) => product.name.includes(e.target.value)))
  }

  return (
    <div>
      <SearchBar searching={searching} onlyStock={onlyStock} search={search} />
      <ProductTable data={temporal} />
    </div>
  )
}

export default FilterableProductTable
