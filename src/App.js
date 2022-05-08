import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Home from './components/home/Home'
import Login from './components/login/Login'
import AddProduct from './components/products/AddProduct'
import ProductDetails from './components/products/ProductDetails'
import Products from './components/products/Products'
import ManageProducts from './components/products/signed/ManageProducts'
import Registration from './components/registration/Registration'
import RequireAuth from './custom/RequireAuth'
import Navbar from './shared/Navbar/Navbar'
import NotFound from './shared/notFound/NotFound'

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/blog' element={<Blog />}></Route>
				<Route path='/products/:productId' element={<ProductDetails />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route
					path='/products'
					element={
						<RequireAuth>
							<Products />
						</RequireAuth>
					}
				></Route>
				<Route
					path='/manage'
					element={
						<RequireAuth>
							<ManageProducts />
						</RequireAuth>
					}
				></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route path='/additem' element={<AddProduct />}></Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</>
	)
}

export default App
