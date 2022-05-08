import { useState } from 'react'
import HandleOrder from './HandleOrder'
import HandleStock from './HandleStock'

const ProductDetailsInfo = ({ product }) => {
	const { name, weight, img, price, warranty } = product
	const { dimension, formFactor, materials, sidePanel } =
		product?.caseSpecification || {}
	const { front, side, rear, top } = product?.fanSupport || {}

	const [quantity, setQuantity] = useState(0)
	const [addStock, setAddStock] = useState(false)

	return (
		<>
			<div className='product-details-info'>
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
						<p>
							Product Available: {quantity === 0 ? product?.quantity : quantity}
						</p>
						{addStock ? (
							<HandleStock product={product} setQuantity={setQuantity} />
						) : (
							<HandleOrder product={product} setQuantity={setQuantity} />
						)}
						<p>Want to add stock instead? </p>
						<button onClick={() => setAddStock(true)}>Click here</button>
						{/* <HandleOrder product={product} setQuantity={setQuantity} />
						<HandleStock product={product} setQuantity={setQuantity} /> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetailsInfo
