import CustomLink from '../../custom/CustomLink'
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import auth from '../../firebase.init'

import { Link } from 'react-router-dom'

const Navbar = () => {
	const [user, loading] = useAuthState(auth)

	return (
		<div className='navbar'>
			<p>Antec</p>
			<div className='navbar-links'>
				<CustomLink to='./'>home</CustomLink>
				<CustomLink to='./blog'>blog</CustomLink>
				<CustomLink to='./about'>about</CustomLink>
				<CustomLink to='./products'>products</CustomLink>
				{user ? (
					<>
						<Link to='./manage'>My-Items</Link>
						<p style={{ cursor: 'pointer' }} onClick={() => signOut(auth)}>
							log-out
						</p>
					</>
				) : (
					<CustomLink to='./login'>login</CustomLink>
				)}
			</div>
		</div>
	)
}

export default Navbar
