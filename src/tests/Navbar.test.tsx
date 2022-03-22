const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
})); // had to use this to get tests to run 

import React from 'react';
import { render, screen } from '@testing-library/react';
import {Navbar} from '../components/Navbar';
import {Routes} from 'react-router-dom'
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