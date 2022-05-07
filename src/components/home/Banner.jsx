import banner from '../../assets/banner.webp'
import './Home.css'

const Banner = () => {
	return (
		<div>
			<figure class='textover'>
				<img src={banner} alt='banner' />
				<figcaption>World Class Casing for every PC</figcaption>
			</figure>
		</div>
	)
}

export default Banner
