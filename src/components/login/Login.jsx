import React, { useEffect, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate()

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth)

	useEffect(() => {
		setErrorMessage(error?.message)
	}, [error])

	useEffect(() => {
		user && navigate(`/`, { replace: true })
	}, [user])

	return (
		<div className='centerLoginPage'>
			<div className='loginPage'>
				<h1>Login</h1>

				<form
					onSubmit={async (event) => {
						event.preventDefault()
						await signInWithEmailAndPassword(email, password)
					}}
				>
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
							onBlur={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					{errorMessage && <p>{errorMessage}</p>}
					<br />
					<button type='submit'>Submit</button>
				</form>

				<p>
					Already Registed? <Link to='/registration'>Register</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
