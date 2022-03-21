import React from 'react';
import { render, screen } from '@testing-library/react';
import {Navbar} from '../components/Navbar';
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
})