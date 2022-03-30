import React from 'react';
import { render, screen } from '@testing-library/react';
import {Product} from '../components/Product';
import {Router, useNavigate, useParams} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
describe("Product page", () => {
    test("Page returns error if bad data is given", () => {
        const history = createMemoryHistory();
        render(
            <Router navigator={history} location={"/products/BADDATA"}>
                <App/>
            </Router>
        );

        expect(screen.getByRole('heading', {name: "error"})).toBeInTheDocument();
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
})
