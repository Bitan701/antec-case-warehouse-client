import { useNavigate } from 'react-router-dom'
import './Product.css'

const ProductSummary = ({ product }) => {
	const { _id, name, weight, img, price, warranty, quantity, supplier } =
		product

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

			<div className='product-others' style={{ textAlign: 'center' }}>
				<hr />
				<p>Weight: {weight} </p>
				<p>Warranty: {warranty} </p>
				<p>Supplier: {supplier} </p>
				<p>Quantity: {quantity} </p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<button onClick={() => navigateToServiceDetail(_id)}>
					Product Details
				</button>
			</div>
		</div>
	)
}

export default ProductSummary
