import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
})