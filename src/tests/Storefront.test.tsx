import React from 'react';
import { render, screen } from '@testing-library/react';
import { Storefront } from '../components/Storefront';
import {MemoryRouter as MRouter} from 'react-router-dom';
import { ProductData } from '../utils/productData'
describe('Storefront', () => {
    test("displays all links", () => {
        render(
            <MRouter>
                <Storefront/>
            </MRouter>
        );
        const productNumber = ProductData.length
        const buttonElements = screen.getAllByRole("link");
        expect(buttonElements.length).toEqual(productNumber)
    });

    test("displays all images", () => {
        render(
            <MRouter>
                <Storefront/>
            </MRouter>
        );
        const productNumber = ProductData.length
        const imgElements = screen.getAllByAltText(/.*?/);
        expect(imgElements.length).toEqual(productNumber)
    });
    
})