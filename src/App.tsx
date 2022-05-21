import React, {useState} from 'react';
import {Routes, Route,} from 'react-router-dom';
import { productInterface, ProductData} from './utils/productData';
import {Navbar} from './components/Navbar';
import Homepage from './components/Homepage';
import {Checkout} from './components/Checkout';
import { Storefront } from './components/Storefront';
import { v4 as uuid } from 'uuid';
import {Product} from './components/Product';
import { setStartingCart, useLoggedOut } from './utils/localStorage';

function App() {
  const initCart: productInterface[] = setStartingCart("cart");

  const [currCart, setCurrCart] = useState<productInterface[]>(initCart);

  // custom hook to handle local storage for current cart
  // will use setLocalCart for clearing when user logs out of account
  const [localCart, setLocalCart] = useLoggedOut("cart", currCart);
 
  

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

  const removeAllSameItems = (name:string) => () => {
    setCurrCart(currCart.filter((product) => (product.Name !== name)))
  }


  const handleClearCart = () => {
    setCurrCart([]);
  }

  const cartValue = currCart.reduce(
    (prevProduct, currProduct) => prevProduct + currProduct.Price, 0
  );

  const getTotalItemValue = (name:string) => {
    let itemToTotal = currCart.filter((product) => (product.Name === name));
    return itemToTotal.reduce(
      (prevProduct, currProduct) => prevProduct + currProduct.Price, 0
    );
  }
  
  return (
      <Routes>
        <Route path='/' element={<Navbar cart={currCart}/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/checkout' element={<Checkout cart={currCart} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} clearCart={handleClearCart} value={cartValue} itemValue={getTotalItemValue} removeAllSameItems={removeAllSameItems}/>}/>
          <Route path='/products' element={<Storefront/>}/>
          <Route path="/products/:productID" element={<Product value={cartValue} addToCart={handleAddToCart}/>}/>
        </Route>
      </Routes>
  );
}

export default App;

// TODO

/*

ADD LOCAL STORAGE FOR CURR ITEMS IN CART

FUNCTION NEEDS TO CHECK IF PERSON IS SIGNED IN FIRST

MAKE A DUMMY SIGN IN FUNCTION TO BE IMPLEMENTED LATER

*/