import { useEffect, useState } from "react";
import { productInterface } from "./productData";

// dummy logged in variable
// const loggedIn = false

// grabs value from local storage
function getLocalStorage(key:string, defaultValue:productInterface[]) {
    const localValue:string | null = localStorage.getItem(key);
    if(!localValue) {
        return defaultValue;
    } else {
        const parsedValue:productInterface[] = JSON.parse(localValue);
        return parsedValue;
    }
}

// custom hook to set localstorage
export function useLoggedOut(key:string, cart: productInterface[]) {
    const [value, setValue] = useState(() => {
        // sets starting value to whatever is in local storage for the cart
        return getLocalStorage(key, cart)
    })
        useEffect(() => {
            // storing current cart
            localStorage.setItem(key, JSON.stringify(cart));
        }, [key, cart]);

        return [value, setValue];
}

// can probably refactor cart state to use useLoggedOut eventually maybe 
export function setStartingCart(key:string):productInterface[] {
    const localCart = getLocalStorage(key, [])
    return localCart
}

// HAVE THIS BE SOMETHING THAT CAN WORK WHEN LOGGED IT IE WE CHECK IF ANYTHING IS IN LOCAL STORAGE AND IF SO PUT THAT INTO LOGGED IN USERS CART
export function localToLoggedInCart(key: string): productInterface[] | null {
    //const localCart = getLocalStorage(key, []);
    // write some stuff here that takes user id for database i suppose then adds localCart to that users cart if theres is empty? might have to pass a user id argument
    // replace local cart with logged cart? or clear local storage
    // call this on user logging in 
    return [] 
}

