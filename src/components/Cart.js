import '../styles/Cart.css'
import { useEffect, useState } from 'react'

function Cart({ cart, updateCart}) {

    const [isOpen, setIsOpen] = useState(true)
    var totalCart = 0
    var nbItemInCart = 0
    if(JSON.stringify(cart) !== 'undefined') {
        cart.map(({name, price, amount}, index) => (
            totalCart = totalCart + (price * amount)
        ))
        cart.forEach(element => nbItemInCart = nbItemInCart + element.amount)
    } else {
        nbItemInCart = 0
    }

    useEffect(() => {
        document.title = "BoutiqueJungle (" + nbItemInCart + ")"
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, nbItemInCart])

    return isOpen ? (
        <div className='cartContainer'>
            <div className='outer'><button className={isOpen ? 'inner' : 'buttonOpen'} onClick={() => setIsOpen(false)}></button></div>
            <span className='titleCart'>PÄNIER</span>
            <div className='contentCart'><br/>
            {JSON.stringify(cart) !== 'null' &&
            cart.map(({name, price, amount}, index) => (
                    <div key={(price * Math.random())}>
                        <b>{name}</b> Qté : <b>{amount}</b>
                    </div>
            ))}
            {
                JSON.stringify(cart) === '[]' &&
                <span>Votre panier est vide !<br/></span>
            }
                <br/>
                Total : <b>{ totalCart }</b> € <br/>
                Nombre d'article(s) : <b>{ nbItemInCart }</b>
                <br/><br/>
                <button className='resetCartButton' onClick={() => updateCart([])}>Vider le panier</button>
            </div>
        </div>
    ) : (
        <button className={isOpen ? 'buttonClose' : 'buttonOpen'} onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    )
}

export default Cart