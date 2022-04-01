import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {MemoryRouter as MRouter} from 'react-router-dom';
describe("App", () => {
    test("contains navbar", () => {
        render(
            <MRouter>
                <App/>
            </MRouter>
        );
        expect(screen.getByRole("link", {name: "Checkout"})).toBeInTheDocument()
    })
    
    test("contains homepage", () => {
        render(
            <MRouter>
                <App/>
            </MRouter>
        );
        expect(screen.getByRole("link", {name: "View Products"})).toBeInTheDocument()
    })
})
