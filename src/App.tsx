import React, {useState} from 'react';
import { productInterface, ProductData} from './utils/productData';
// Routes for home and the shopping cart and storefront. THESE GO IN HERE!
// navbar that lets people go to home and cart MAKE SURE TO LOAD NAVBAR COMPONENT IN EACH ROUTE
// navbar needs state to display how many items are in cart
// array that contains each item to be mapped into the main page / shopping cart
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
// TODO MAKE RESPONSIVE NAVBAR THAT ROUTES TO CHECKOUT AND HOMEPAGE
// TODO TESTED TO LOAD THOSE COMPONENTS

function App() {

  const [currCart, setCurrCart] = useState<productInterface[]>([]);

  const handleAddToCart = (name:string) => () => {
    for(let product of ProductData) {
      if(product.Name === name) {
        return setCurrCart(prevState => [...prevState, product]);
      }
    }
  }
  
  return (
    <div>shopcart

    </div>
  );
}

export default App;
