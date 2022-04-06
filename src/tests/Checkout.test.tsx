import React, { MouseEventHandler } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Checkout } from '../components/Checkout';


describe("Checkout Page", () => {
    test("Shows empty cart page when cart is empty", () => {
        const history = createMemoryHistory();
        render(
            <Router navigator={history} location={"/checkout"}>
                <App/>
            </Router>
        );

        expect(screen.getByRole('heading', {name: "Your Cart Is Empty!"})).toBeInTheDocument();
    })
    // referenceerror: resizeobserver is not defined when trying to render the component itself after passing in props to it.. i think resize observer is something being used from mantine. cant get checkout to render with props
})

