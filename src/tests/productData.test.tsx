import { ProductData } from "../utils/productData";

describe("Product Data", () => {
    test("Contains all games", () => {
        expect(ProductData.length).toEqual(13)
    })
})