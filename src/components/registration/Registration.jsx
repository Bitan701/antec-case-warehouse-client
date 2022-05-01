import React, { useEffect, useState } from 'react'
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Registration = () => {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rePassword, setRePassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate()

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth)
	const [updateProfile] = useUpdateProfile(auth)

	useEffect(() => {
		setErrorMessage(error?.message)
	}, [error])

	useEffect(() => {
		user && navigate(`/`, { replace: true })
	}, [user])

	return (
		<div className='centerLoginPage'>
			<div className='loginPage'>
				<h1>Register</h1>

				<form
					onSubmit={async (event) => {
						event.preventDefault()
						await createUserWithEmailAndPassword(email, password)
						await updateProfile({ displayName })
					}}
				>
					<div className='field'>
						<label>Name:</label> <br />
						<input
							type='text'
							onBlur={(e) => setDisplayName(e.target.value)}
							required
						/>
					</div>

					<div className='field'>
						<label>Email:</label> <br />
						<input
							type='email'
							onBlur={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className='field'>
						<label>Password:</label> <br />
						<input
							type='password'
							onBlur={(e) => setRePassword(e.target.value)}
							required
						/>
					</div>

					<div className='field'>
						<label>Confirm Password:</label> <br />
						<input
							type='password'
							onBlur={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					{errorMessage && <p>{errorMessage}</p>}
					<br />
					<button type='submit'>Submit</button>
				</form>

				<p>
					Already Registed? <Link to='/login'>Login</Link>
				</p>
			</div>
		</div>
	)
}

export default Registration
