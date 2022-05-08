import other from '../../assets/other.jpg'
import cooler from '../../assets/upcomming.gif'
import './Home.css'

const OtherProductLink = () => {
	return (
		<div className='others'>
			<a href='https://www.antec.com/' target='_blank'>
				<figure className='textover'>
					<img src={other} alt='banner' />
				</figure>
			</a>

			<h2>Our upcomming products</h2>
			<figure className='textover'>
				<img src={cooler} alt='banner' />
			</figure>
		</div>
	)
}

export default OtherProductLink
