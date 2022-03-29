import { ProductData } from "../utils/productData";
import {getProduct} from '../utils/data'
describe("utilitys", () => {
    test("ProductData Contains all games", () => {
        expect(ProductData.length).toEqual(13)
    });

    test("getProduct returns a product when valid", () => {
        expect(getProduct("Calico").Name).toBe("Calico");
    });

    test("getProduct throws when given invalid data", () => {
        expect(() => {getProduct("")}).toThrowError(Error);
    })
})