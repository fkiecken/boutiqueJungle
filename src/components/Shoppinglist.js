import PlantItem from './PlantItem'
import { plantList } from '../datas/plantList'
import { useState } from 'react'
import '../styles/ShoppingList.css'


function Shoppinglist({ cart, updateCart}) {

    const [categorieSelected, SetCategorieChange] = useState('Toutes catégories')

    const categories = ['Toutes catégories']
    for(var i=0; i<plantList.length; i++) {
        var uniqueCat = plantList[i].category
        if(categories.indexOf(uniqueCat) !== -1) {
        } else {
            categories.push(uniqueCat)
        }
    }

    function addToCart(name, price) {
        if(cart.length !== 0) {
            var currentItem = cart.find(plant => plant.name === name)
            if(currentItem != null) {
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )
                updateCart([
                    ...cartFilteredCurrentPlant, 
                    { name, price, amount : currentItem.amount+1}
                ])
            } else {
                updateCart([...cart, {name, price, amount: 1}])
            }
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    function deleteOfCart(name, price) {

        var currentItem = cart.find(plant => plant.name === name)
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        )

        if (currentItem) {
            switch (currentItem.amount) {
                case 0:
                  console.log('Rien a supprimer');
                  break;
                case 1:
                  updateCart(cart.filter(plant => plant.name !== name))
                  break;
                default:
                    updateCart([
                        ...cartFilteredCurrentPlant, 
                        { name, price, amount : currentItem.amount-1}
                    ])
            }   
        } else {
            console.log('Rien a supprimer');
        }
    }


    return(
        <div className='containerShoppingList'>
            <div className='categories'>
                <select                 
                value={categorieSelected} 
                onChange={(e) => SetCategorieChange(e.target.value)}
                >
                {
                    categories.map((categories) => (
                        <option value={categories}>{categories}</option>
                    ))
                } 
                </select>
            </div>
            <ul className='lmj-plant-list'>
            {
                categorieSelected === 'Toutes catégories' ?
                plantList.map(({id, name, isSpecialOffer, cover, light, water, price}) => (
                    <div key={id}>
                        <PlantItem name={name} isSpecialOffer={isSpecialOffer} cover={cover} light={light} water={water} price={price}/>
                        <div className='interactionItem'>
                        <span>Prix : { price } €</span>
                        <button onClick={() => addToCart(name, price)} className='buttonItem'>+</button>
                        <button onClick={() => deleteOfCart(name, price)} className='buttonItem'>-</button>
                        </div>
                    </div>
                )):
                plantList.filter(plant => plant.category===categorieSelected).map(({id, name, isSpecialOffer, cover, light, water, price}) => (
                    <div key={id}>
                        <PlantItem name={name} isSpecialOffer={isSpecialOffer} cover={cover} light={light} water={water} price={price}/>
                        <div className='interactionItem'>
                        <span>Prix : { price } €</span>
                        <button onClick={() => addToCart(name, price)} className='buttonItem'>+</button>
                        <button onClick={() => deleteOfCart(name, price)} className='buttonItem'>-</button>
                        </div>
                    </div>
                ))
            }
            </ul>
        </div>
        
    )
}

export default Shoppinglist