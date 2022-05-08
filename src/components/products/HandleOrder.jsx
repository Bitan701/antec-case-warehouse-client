import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const HandleOrder = ({ product }) => {
	const { productId } = useParams()
	const [quantity, setQuantity] = useState(0)
	console.log(product.quantity)
	console.log(quantity)

	const handleUpdateUser = (event) => {
		event.preventDefault()

		const order = event.target.order.value
		const quantityUpdate = parseInt(product?.quantity) - parseInt(order)

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
				event.target.reset()
				setQuantity(product?.quantity - 1)
			})
	}

	return (
		<div>
			<h1>Quantity: {quantity === 0 ? product?.quantity : quantity}</h1>
			<form onSubmit={handleUpdateUser}>
				<input type='number' name='order' required />
				<br />
				<input type='submit' value='Order Product' />
			</form>
		</div>
	)
}

export default HandleOrder
