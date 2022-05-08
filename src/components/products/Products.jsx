import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const url = `https://secure-fjord-54361.herokuapp.com/products`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
			})
	}, [])

	const handleDelete = (id) => {
		const proceed = window.confirm('Are you sure you want to delete?')
		if (proceed) {
			console.log('deleting user with id, ', id)
			const url = `https://secure-fjord-54361.herokuapp.com/products/${id}`
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						console.log('deleted')
						const remaining = products.filter((user) => user._id !== id)
						setProducts(remaining)
					}
				})
		}
	}

	return (
		<>
			<h3>Add another product?</h3>
			<Link to='/additem'>Add another product</Link>
			<div className='products'>
				{products.map((product) => (
					<Product
						key={product._id}
						product={product}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</>
	)
}

export default Products
