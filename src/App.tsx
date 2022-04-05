import React, {useEffect, useState} from 'react';
import {Routes, Route,} from 'react-router-dom';
import { productInterface, ProductData} from './utils/productData';
import {Navbar} from './components/Navbar';
import Homepage from './components/Homepage';
import {Checkout} from './components/Checkout';
import { Storefront } from './components/Storefront';
import { v4 as uuid } from 'uuid';
import {Product} from './components/Product';

// checkout needs to show whats in cart and also allow changes to quantity in popup

// product cards need plus and minus buttons along with being able to type in quantity number
// product cards need a go to cart button

// responsive design on this one along with using grid
// tesing as well

// TODO COMPONENTS:
// APP : STATE IS WHATS IN CART
// HOMEPAGE : PULLS STATE FROM APP
// CHECKOUT GET NUMBER OF ITEMS IN CART AND ALSO HAS ADD TO CART AND REMOVE FUNCTIONS... ALONG WITH TOTAL PRICE 
// CARD : PULLS ADD TO CART FUNCTION FROM APP

// DONT TEST IMPLEMENTATION DETAILS ONLY TEST UI CHANGES 

// TODO TOMMOROW
    // FINISH CART!
    // TEST IT!
    // STYLE IT!
    // REPSONSIVE!
// 

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
    // reverse loop to preserve cart add order
    for(let i = currCart.length - 1; i >=0; i--) {
      if(currCart[i].Name === name) {
        let ID = currCart[i].ID
        setCurrCart(currCart.filter((product)=> (product.ID !== ID)))
        break
      }
    }
  }

  const handleClearCart = () => {
    setCurrCart([]);
  }

  const cartValue = currCart.reduce(
    (prevProduct, currProduct) => prevProduct + currProduct.Price, 0
  );
  
  return (
      <Routes>
        <Route path='/' element={<Navbar cart={currCart}/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/checkout' element={<Checkout cart={currCart} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} clearCart={handleClearCart} value={cartValue}/>}/>
          <Route path='/products' element={<Storefront/>}/>
          <Route path="/products/:productID" element={<Product value={cartValue} addToCart={handleAddToCart}/>}/>
        </Route>
      </Routes>
  );
}

export default App;
