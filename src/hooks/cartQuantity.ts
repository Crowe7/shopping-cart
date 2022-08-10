import { useEffect, useState } from "react";
import { productInterface } from "../utils/productData";

export function useCartQuantity(cart: productInterface[] | undefined) {
    const [CartQuantity, setCartQuantity] = useState(cart?.length)

    useEffect(() => {
      setCartQuantity(cart?.length)
    }, [cart])

    return CartQuantity;
}
