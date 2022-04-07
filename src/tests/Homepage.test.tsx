import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../components/Homepage';
import {MemoryRouter as Router} from 'react-router-dom'

describe('Homepage', () => {

    test("renders image", () => {
        render(
            <Router>
                <Homepage/>
            </Router>
        );
        expect(screen.getByAltText(
            "Group Of Creative Friends Sitting At Wooden Table. People Having Fun While Playing Board Game"
        
        )).toBeInTheDocument()
    })
    test("renders products button", () => {
        render(
            <Router>
                <Homepage/>
            </Router>
        );
        expect(screen.getByRole("link", {name: "View Products"})).toBeInTheDocument()
    })
})

