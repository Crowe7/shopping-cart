import React, {useState} from 'react';
import {Routes, Route,} from 'react-router-dom';
import { productInterface, ProductData} from './utils/productData';
import {Navbar} from './components/Navbar';
import Homepage from './components/Homepage';
import Checkout from './components/Checkout';
import { Storefront } from './components/Storefront';
import { v4 as uuid } from 'uuid';

// navbar needs state to display how many items are in cart
// checkout needs to show whats in cart and also allow changes to quantity in popup

// product cards need plus and minus buttons along with being able to type in quantity number
// product cards need a go to cart button

// responsive design on this one along with using grid
// tesing as well

// TODO COMPONENTS:
// APP : STATE IS WHATS IN CART
// NAVBAR : GET NUMBER OF ITEMS IN CART BY USEEFFECT HOOK CHANGING WHEN CART STATE CHANGES. CHECKING ARRAY.LENGTH PASSED BY APP
// HOMEPAGE : PULLS STATE FROM APP
// CHECKOUT GET NUMBER OF ITEMS IN CART AND ALSO HAS ADD TO CART AND REMOVE FUNCTIONS... ALONG WITH TOTAL PRICE 
// CARD : PULLS ADD TO CART FUNCTION FROM APP

// DONT TEST IMPLEMENTATION DETAILS ONLY TEST UI CHANGES 

// TODO TOMMOROW
// TODO MAKE RESPONSIVE NAVBAR
// TODO TEST CLICKS CHANGE DOM ACCORDINGLY TO NEW ROUTE
// TODO ADDING TO CART UPDATES CART ICON ACCORDINGLY 

// 


// <Redirect to="/result" /> or history.push(url) is how to make a button take to a diffrent page 
function App() {

  const [currCart, setCurrCart] = useState<productInterface[]>([]);

  const handleAddToCart = (name:string) => () => {
    for(let product of ProductData) {
      if(product.Name === name) {
        const productToAdd = {...product, ID: uuid()}
        setCurrCart(prevState => [...prevState, productToAdd]);
        break
      }
    }
  }

  const handleRemoveFromCart = (name:string) => () => {
    if(currCart.length < 1) {
      return 
    }
    for(let product of currCart) {
      if(product.Name === name) {
        let ID = product.ID
        setCurrCart(currCart.filter((product)=> (product.ID !== ID)))
        break
      }
    }
  }
  
  return (
      <Routes>
        <Route path='/' element={<Navbar cart={currCart}/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/products' element={<Storefront/>}/>
        </Route>
      </Routes>
  );
}

export default App;
