import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'

const HandleStock = ({ product, setQuantity }) => {
	const { productId } = useParams()

	const [delivered, setDelivered] = useState(false)
	console.log(product.quantity)

	const handleUpdateUser = (event) => {
		event.preventDefault()

		const order = event.target.order.value
		const quantityUpdate = parseInt(product?.quantity) + parseInt(order)

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
				setQuantity(quantityUpdate)
				setDelivered(true)
			})
	}

	return (
		<div className='order-container'>
			{delivered ? (
				<></>
			) : (
				<form onSubmit={handleUpdateUser}>
					<input type='number' name='order' required />
					<br />
					<input type='submit' value='Add Stock' />
				</form>
			)}
		</div>
	)
}

export default HandleStock
