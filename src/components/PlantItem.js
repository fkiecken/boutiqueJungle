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
                    alert('Cette plante requiert ' + conseilLight + ' de lumière')
                    return conseilLight
                case 2: 
                    conseilLight = 'moderemment'
                    alert('Cette plante requiert ' + conseilLight + ' de lumière')
                    return conseilLight
                case 3: 
                    conseilLight = 'beaucoup'
                    alert('Cette plante requiert ' + conseilLight + ' de lumière')
                    return conseilLight
                default:
                    break
            }
        } else {
            switch(water) {
                case 1: 
                    conseilWater = 'peu'
                    alert('Cette plante requiert ' + conseilWater + " d'eau")
                    return conseilWater
                case 2: 
                    conseilWater = 'moderemment'
                    alert('Cette plante requiert ' + conseilWater + " d'eau")
                    return conseilWater
                case 3: 
                    conseilWater = 'beaucoup'
                    alert('Cette plante requiert ' + conseilWater + " d'eau")
                    return conseilWater
                default:
                    break
            }
        }
    }

    return (
        <span>
            <Modal key={id} isShowing={isShowing} hide={() => showModal()} name={name} isSpecialOffer={isSpecialOffer} conseilLight={() => alertScale('light')} conseilWater={() => alertScale('water')}/>
            {
                    <li key={id} className='lmj-plant-item'>
                    <span className='titleCartItem'>{ name }</span>
                    {
                        isSpecialOffer != null &&
                        <div className='lmj-sales'>SOLDES</div>
                    }
                    <br/>
                    <img src={require('../assets/' + cover + '.jpg')} alt={id} className='imgCart' onClick={() => showModal()}/>
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