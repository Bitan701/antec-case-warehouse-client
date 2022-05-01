import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Registration from './components/registration/Registration'
import Navbar from './shared/Navbar/Navbar'

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/blog' element={<Blog />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/registration' element={<Registration />}></Route>
			</Routes>
		</>
	)
}

export default App
