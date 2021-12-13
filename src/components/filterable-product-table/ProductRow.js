const ProductRow = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <span>{product.price}</span>
    </div>
  )
}

export default ProductRow
