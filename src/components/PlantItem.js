import CareScale from './CareScale'
import Modal from "./Modal";
import '../styles/CartPlant.css'
import React from 'react';
import useModal from './useModal';


function PlantItem(props) {

    const { isShowing, showModal } = useModal();
    const {id, name, isSpecialOffer, cover, light, water} = props
    var conseilLight = 'null'
    var conseilWater = 'null'

    function alertScale(type) {
        if(type==='light') {
            switch(light) {
                case 1: 
                    conseilLight = 'peu'
                    return conseilLight
                case 2: 
                    conseilLight = 'moderemment'
                    return conseilLight
                case 3: 
                    conseilLight = 'beaucoup'
                    return conseilLight
                default:
                    break
            }
            alert('Cette plante requiert ' + conseilLight + ' de lumière')
        } else {
            switch(water) {
                case 1: 
                    conseilWater = 'peu'
                    return conseilWater
                case 2: 
                    conseilWater = 'moderemment'
                    return conseilWater
                case 3: 
                    conseilWater = 'beaucoup'
                    return conseilWater
                default:
                    break
            }
            alert('Cette plante requiert ' + conseilWater + " d'eau")
        }
    }

    return (
        <span>
            <Modal isShowing={isShowing} hide={showModal} name={name} isSpecialOffer={isSpecialOffer} conseilLight={alertScale('light')} conseilWater={alertScale('water')}/>
            {
                    <li key={id} className='lmj-plant-item'>
                    <span className='titleCartItem'>{ name }</span>
                    {
                        isSpecialOffer != null &&
                        <div className='lmj-sales'>SOLDES</div>
                    }
                    <br/>
                    <img src={require('../assets/' + cover + '.jpg')} alt={id} className='imgCart' onClick={showModal}/>
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