import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductSummary from '../products/ProductSummary'

const HomeProducts = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const url = `https://secure-fjord-54361.herokuapp.com/products`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
			})
	}, [])

	return (
		<div className='products'>
			{products.slice(0, 6).map((product) => (
				<ProductSummary key={product._id} product={product} />
			))}
			<Link to='./products'>Manage Products</Link>
		</div>
	)
}

export default HomeProducts
