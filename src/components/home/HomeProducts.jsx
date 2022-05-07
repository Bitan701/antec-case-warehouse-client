import React, { useEffect, useState } from 'react'
import Product from '../products/Product'

const HomeProducts = () => {
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
			{products.slice(0, 6).map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	)
}

export default HomeProducts
