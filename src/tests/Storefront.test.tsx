import React from 'react';
import { render, screen } from '@testing-library/react';
import { Storefront } from '../components/Storefront';
import {MemoryRouter as MRouter} from 'react-router-dom'
describe('Storefront', () => {
    test("displays all cards", () => {
        render(
            <MRouter>
                <Storefront/>
            </MRouter>
        );
        const buttonElements = screen.getAllByRole("link");
        expect(buttonElements.length).toEqual(13)
    })
})