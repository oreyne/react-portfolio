import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = ({ data }) => {
  return (
    <div>
      <ProductCategoryRow category={'Electronics'} />
      {data.map((product) => {
        return <ProductRow key={product.id} product={product} />
      })}

    </div>
  )
}

export default ProductTable
