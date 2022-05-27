import React, { useState } from 'react';
import '../styles/App.css';
import Banner from './Banner'
import Cart from './Cart';
import Shoppinglist from './Shoppinglist';
import Footer from './Footer';

function App() {

  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem('cart')))
  if(JSON.stringify(cart) == 'undefined') {
    updateCart([])
  }

  return (

    <React.Fragment>    
      <Banner/>
      <Cart cart={cart} updateCart={updateCart}/>
      <Shoppinglist cart={cart} updateCart={updateCart}/>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
