const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
})); // had to use this to get tests to run 

import React from 'react';
import { render, screen } from '@testing-library/react';
import {Navbar} from '../components/Navbar';
import {Routes} from 'react-router-dom'
import { productInterface } from '../utils/productData';
// aria-label='edit'> add that onto label buttons to test
describe('Navbar', () => {

    test("Has checkout page button", () => {
        render(<Navbar/>);
         expect(screen.getByRole("button", {name:"Checkout"})).toBeInTheDocument()
    });

    test("Has products page button", () => {
        render(<Navbar/>);
         expect(screen.getByRole("button", {name:"Products"})).toBeInTheDocument()
    });

    test("Has home page button", () => {
        render(<Navbar/>);
         expect(screen.getByRole("button", {name:"Home"})).toBeInTheDocument()
    });
    test("cart quantity shows up", () => {
        let cartItem = [{Name: "Azul", Price: 40, Img: '', ID: null}]
        render(<Navbar cart={cartItem}/>);
        expect(screen.getByLabelText("Quantity")).toBeInTheDocument()
    });
    test("cart quantity shows correct amount", () => {
        let cartItem = [{Name: "Azul", Price: 40, Img: '', ID: null}]
        render(<Navbar cart={cartItem}/>);
        expect(screen.getByLabelText("Quantity").innerHTML).toMatch("1")
    });
    test("cart quantity removes itself when cart is empty", () => {
        let cartItem:productInterface[] = []
        render(<Navbar cart={cartItem}/>);
        expect(screen.queryByLabelText("Quantity")).not.toBeInTheDocument()
    });
})