import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommandations from './Recommandations'

function Banner() {

    return (

        <div className='bannerContainer'>
            <div className='bannerTitle'>
                <img src={logo} alt='La boutique jungle' className='bannerLogo'/>
            </div>
        <Recommandations/>
        </div>

    )
}

export default Banner