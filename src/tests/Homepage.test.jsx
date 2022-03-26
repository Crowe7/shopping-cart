import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Homepage from '../components/Homepage';
import {MemoryRouter as Router} from 'react-router-dom'

describe('Homepage', () => {

    test("renders page", () => {
        render(
            <Router>
                <Homepage/>
            </Router>
        );
        expect(screen.getByAltText(
            "Group Of Creative Friends Sitting At Wooden Table. People Having Fun While Playing Board Game"
        
        )).toBeInTheDocument()
    })
})

