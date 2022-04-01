import React from 'react';
import {render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import {Navbar} from '../components/Navbar';
import {MemoryRouter as MRouter} from 'react-router-dom'
import { productInterface } from '../utils/productData';
import userEvent from '@testing-library/user-event'
// aria-label='edit'> add that onto label buttons to test
describe('Navbar', () => {

    test("Has checkout page button", () => {
        render(
            <MRouter>
                <Navbar/>
            </MRouter>
        );
         expect(screen.getByRole("link", {name:"Checkout"})).toBeInTheDocument()
    });

    test("Has products page button", () => {
        render(
            <MRouter>
                <Navbar/>
            </MRouter>
        );
         expect(screen.getByRole("link", {name:"Products"})).toBeInTheDocument()
    });

    test("Has home page button", () => {
        render(
            <MRouter>
                <Navbar/>
            </MRouter>
        );
         expect(screen.getByRole("link", {name:"Home"})).toBeInTheDocument()
    });
    test("cart quantity shows up", () => {
        let cartItem = [{Name: "Azul", Price: 40, Img: '', ID: "q"}]
        render(
            <MRouter>
                <Navbar cart={cartItem}/>
            </MRouter>
        );
        expect(screen.getByLabelText("Quantity")).toBeInTheDocument()
    });
    test("cart quantity shows correct amount", () => {
        let cartItem = [{Name: "Azul", Price: 40, Img: '', ID: "q"}]
        render(
            <MRouter>
                <Navbar cart={cartItem}/>
            </MRouter>
        );
        expect(screen.getByLabelText("Quantity").innerHTML).toMatch("1")
    });
    test("cart quantity removes itself when cart is empty", () => {
        let cartItem:productInterface[] = []
        render(
            <MRouter>
                <Navbar cart={cartItem}/>
            </MRouter>
        );
        expect(screen.queryByLabelText("Quantity")).not.toBeInTheDocument()
    });

})
