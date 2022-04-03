import React from 'react';
import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import userEvent from '@testing-library/user-event';
describe("Product page", () => {
    test("Page returns error if bad data is given", () => {
        const history = createMemoryHistory();
        render(
            <Router navigator={history} location={"/products/BADDATA"}>
                <App/>
            </Router>
        );

        expect(screen.getByRole('heading', {name: "Oops! We couldnt find that product!"})).toBeInTheDocument();
    })
    test("Page returns product with correct data", () => {
        const history = createMemoryHistory();
        render(
            <Router navigator={history} location={"/products/Calico"}>
                <App/>
            </Router>
        );

        expect(screen.getByRole('heading', {name: "Calico"})).toBeInTheDocument();
    })
    test("Clicking add to cart updates cart properly", () => {
        const history = createMemoryHistory();
        render(
            <Router navigator={history} location={"/products/Calico"}>
                <App/>
            </Router>
        );
        const button = screen.getByRole("button", {name:"Add To Cart"});
        userEvent.dblClick(button);
        expect(screen.getByLabelText("Quantity").innerHTML).toMatch("2")
    })
})
// expect(screen.getByLabelText("Quantity")).toBeInTheDocument()