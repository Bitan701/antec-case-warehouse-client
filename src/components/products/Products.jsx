import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const url = `http://localhost:5000/products`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
			})
	}, [])

	return (
		<div className='products'>
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	)
}

export default Products
