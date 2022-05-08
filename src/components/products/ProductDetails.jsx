import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState({})
	const [quantity, setQuantity] = useState(0)

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
				event.target.reset()
			})
	}

	return (
		<div>
			<h2>You are about to book: {product.product?.name}</h2>
			<h2>Updating User: {product?.product?.name}</h2>
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
				<input type='submit' value='Update User' />
			</form>
			{/* <div className='text-center'>
				<Link to='/checkout'>
					<button className='btn btn-primary'>Proceed Checkout</button>
				</Link>
			</div> */}
		</div>
	)
}

export default ProductDetails
