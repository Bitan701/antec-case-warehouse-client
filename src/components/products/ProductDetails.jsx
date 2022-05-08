import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Product.css'

const ProductDetails = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState({})
	const [quantity, setQuantity] = useState(0)
	const [updated, setUpdated] = useState(false)
	const [restock, setRestock] = useState(false)

	useEffect(() => {
		const url = `https://secure-fjord-54361.herokuapp.com/products/${productId}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProduct(data))
	}, [])

	const handleUpdateUser = (event) => {
		event.preventDefault()

		const order = event.target.order.value
		const quantityUpdate =
			parseInt(product?.product?.quantity) - parseInt(order)

		const updatedUser = { quantity: quantityUpdate }

		// send data to the server
		const url = `https://secure-fjord-54361.herokuapp.com/products/${productId}`
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updatedUser),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('success', data)
				setQuantity(updatedUser.quantity)
				setUpdated(true)
				event.target.reset()
			})
	}

	return (
		<div className='details-product'>
			<div className='product'>
				<div className='product-top'>
					<img
						src={product.product?.img}
						alt={product.product?.name}
						width={300}
					/>
					<p>Name: {product.product?.name} </p>
					<p>Price: {product.product?.price} </p>
				</div>
				<div className='product-specification'>
					<hr />
					<p style={{ textAlign: 'center' }}>Product Specifications: </p>
					<p>Dimension: {product.product?.caseSpecification.dimension} </p>
					<p>Form Factor: {product.product?.caseSpecification.formFactor} </p>
					<p>Materials: {product.product?.caseSpecification.materials} </p>
					<p>Side Panel: {product.product?.caseSpecification.sidePanel} </p>
				</div>
				<div className='product-fan'>
					<hr />
					<p style={{ textAlign: 'center' }}>Product Fan: </p>
					<p>Top: {product.product?.fanSupport.top} </p>
					<p>Front: {product.product?.fanSupport.front} </p>
					<p>Side: {product.product?.fanSupport.side} </p>
					<p>Rear: {product.product?.fanSupport.rear} </p>
				</div>
				<div className='product-others' style={{ textAlign: 'center' }}>
					<hr />
					<p>Weight: {product.product?.weight} </p>
					<p>Warranty: product.product?.{product.product?.warranty} </p>
				</div>
				<br />
				{updated ? (
					<p>
						Product available:{' '}
						{quantity === 0 ? product.product?.quantity : quantity}
					</p>
				) : (
					<form onSubmit={handleUpdateUser}>
						<input
							type='number'
							name='order'
							placeholder={`product available: ${
								quantity === 0 ? product.product?.quantity : quantity
							}`}
							required
						/>
						<br />
						<input type='submit' value='Order Product' />
					</form>
				)}
			</div>
		</div>
	)
}

export default ProductDetails
