import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'
import Product from '../Product'

const ManageProducts = () => {
	const [products, setProducts] = useState([])
	const [user, loading] = useAuthState(auth)

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
	const productsFiltered = products.filter(
		(product) => product.email === user.email
	)

	return (
		<>
			<h1>manage</h1>
			<h3>Add another product?</h3>
			<Link to='/additem'>Add another product</Link>
			<div className='products'>
				{productsFiltered.map((product) => (
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

export default ManageProducts
