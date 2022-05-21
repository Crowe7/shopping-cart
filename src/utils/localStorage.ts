import { useState } from "react";
import { productInterface } from "./productData";

// dummy logged in variable
const loggedIn = false

// grabs value from local storage
function getLocalStorage(key:string, defaultValue:string) {
    const localValue:string | null = localStorage.getItem(key);
    if(!localValue) {
        return defaultValue;
    } else {
        const parsedValue:string = JSON.parse(localValue);
        return parsedValue;
    }
}

// CHECK IF LOGGED IN FIRST BEFORE SAVING ANYTHING... IF LOGGED IN DO NOT SAVE.
export function useLoggedOut(cart: productInterface[]) {
    const [value, setValue] = useState(() => {

    })
    if(!loggedIn) {
        
    }
}

// HAVE THIS BE SOMETHING THAT CAN WORK WHEN LOGGED IT IE WE CHECK IF ANYTHING IS IN LOCAL STORAGE AND IF SO PUT THAT INTO LOGGED IN USERS CART
export function loadCurrCart(): productInterface[] {
    return []// maybe have this just return whats in local storage to use?
}

