import { useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({ product, handleDelete }) => {
	const { _id, name, weight, img, price, warranty } = product
	const { dimension, formFactor, materials, sidePanel } =
		product.caseSpecification
	const { front, side, rear, top } = product.fanSupport

	const navigate = useNavigate()

	const navigateToServiceDetail = (id) => {
		navigate(`/products/${id}`)
	}

	return (
		<div className='product'>
			<div className='product-top'>
				<img src={img} alt={name} width={300} />
				<p>Name: {name} </p>
				<p>Price: {price} </p>
			</div>
			<div className='product-specification'>
				<hr />
				<p style={{ textAlign: 'center' }}>Product Specifications: </p>
				<p>Dimension: {dimension} </p>
				<p>Form Factor: {formFactor} </p>
				<p>Materials: {materials} </p>
				<p>Side Panel: {sidePanel} </p>
			</div>
			<div className='product-fan'>
				<hr />
				<p style={{ textAlign: 'center' }}>Product Fan: </p>
				<p>Top: {top} </p>
				<p>Front: {front} </p>
				<p>Side: {side} </p>
				<p>Rear: {rear} </p>
			</div>
			<div className='product-others' style={{ textAlign: 'center' }}>
				<hr />
				<p>Weight: {weight} </p>
				<p>Warranty: {warranty} </p>
			</div>
			<button onClick={() => navigateToServiceDetail(_id)}>Book: {name}</button>
			<button onClick={() => handleDelete(product._id)}>
				Delete this Item
			</button>
		</div>
	)
}

export default Product
