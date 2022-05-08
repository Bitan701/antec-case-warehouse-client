import React from 'react'

const AddProduct = () => {
	const handleSubmit = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const dimension = ''
		const formFactor = event.target.formFactor.value
		const materials = event.target.materials.value
		const sidePanel = ''
		const motherboardSize = ''
		const weight = event.target.weight.value
		const warranty = event.target.warranty.value
		const packageSize = ''
		const front = ''
		const side = ''
		const rear = ''
		const top = ''
		const link = ''
		const img = event.target.img.value
		const price = event.target.price.value
		const quantity = event.target.quantity.value
		const supplier = ''
		const sold = ''

		const user = {
			name,
			caseSpecification: {
				dimension,
				formFactor,
				materials,
				sidePanel,
				motherboardSize,
			},
			weight,
			warranty,
			packageSize,
			fanSupport: {
				front,
				side,
				rear,
				top,
			},
			link,
			img,
			price,
			quantity,
			supplier,
			sold,
		}

		// send data to the server
		fetch('https://secure-fjord-54361.herokuapp.com/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('success', data)
				alert('users added successfully!!!')
				event.target.reset()
			})
	}

	return (
		<div>
			<h1>Hello</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' placeholder='Name' required />
				<br />
				<input
					type='text'
					name='formFactor'
					placeholder='formFactor'
					required
				/>
				<br />
				<input type='text' name='materials' placeholder='materials' required />
				<br />
				<input type='text' name='img' placeholder='img' required />
				<br />
				<input type='number' name='weight' placeholder='weight' required />
				<br />
				<input type='number' name='warranty' placeholder='warranty' required />
				<br />
				<input type='number' name='price' placeholder='price' required />
				<br />
				<input type='number' name='quantity' placeholder='quantity' required />
				<br />
				<input type='submit' value='Delivered' />
			</form>
		</div>
	)
}

export default AddProduct
