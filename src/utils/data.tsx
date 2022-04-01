import { ProductData, productInterface } from "./productData";

export function getProduct(name:string | undefined):productInterface {
    if(name){
    const Product = ProductData.filter(product => product.Name === name)[0];
    return Product
    }
    throw new Error("PRODUCT DOES NOT EXIST");
    
}