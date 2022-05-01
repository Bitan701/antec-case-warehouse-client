import CustomLink from '../../custom/CustomLink'
import './Navbar.css'

const Navbar = () => {
	return (
		<div className='navbar'>
			<p>title</p>
			<div className='navbar-links'>
				<CustomLink to='./'>home</CustomLink>
				<CustomLink to='./blog'>blog</CustomLink>
				<CustomLink to='./about'>about</CustomLink>
				<CustomLink to='./login'>login</CustomLink>
			</div>
		</div>
	)
}

export default Navbar
