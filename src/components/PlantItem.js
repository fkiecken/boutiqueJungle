import CareScale from './CareScale'
import '../styles/CartPlant.css'

function PlantItem(props) {

    const {id, name, isSpecialOffer, cover, light, water} = props

    function alertScale(type) {
        var conseil = 'null'
        if(type==='light') {
            switch(light) {
                case 1: 
                    conseil = 'peu'
                    break
                case 2: 
                    conseil = 'moderemment'
                    break
                case 3: 
                    conseil = 'beaucoup'
                    break
                default:
                    break
            }
            alert('Cette plante requiert ' + conseil + ' de lumière')
        } else {
            switch(water) {
                case 1: 
                    conseil = 'peu'
                    break
                case 2: 
                    conseil = 'moderemment'
                    break
                case 3: 
                    conseil = 'beaucoup'
                    break
                default:
                    break
            }
            alert('Cette plante requiert ' + conseil + " d'eau")
        }

    }

    return (
        <span>
            {
                    <li key={id} className='lmj-plant-item'>
                    <span className='titleCartItem'>{ name }</span>
                    {
                        isSpecialOffer != null &&
                        <div className='lmj-sales'>SOLDES</div>
                    }
                    <br/>
                    <img src={require('../assets/' + cover + '.jpg')} alt={id} className='imgCart'/>
                    <br/>
                    <div className='plantDetail'>
                        <span onClick={() => alertScale('light')}><CareScale careType='light' scaleValue={light}/></span>
                        <span onClick={() => alertScale('water')}><CareScale careType='water' scaleValue={water}/></span>                                      
                    </div>
                    </li>
            }
        </span>
    )

}

export default PlantItem