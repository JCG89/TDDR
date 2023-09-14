/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import SignupPage from './SignupPage';

import {render, screen} from '@testing-library/react'


describe('Sign Up Page', () => {

    describe("Layout", () => {
        it("has header", () => {
        render(<SignupPage />);

        const header = screen.queryByRole("heading", {name:"Sign Up"});
       expect(header).toBeInTheDocument();
    });
    it("has username input", () => {

        render(<SignupPage/>);

        const input = screen.getByPlaceholderText('username');
        expect(input).toBeInTheDocument()
    });

    it('has email input', () => {
       render(<SignupPage/>);

        const input = screen.getByPlaceholderText('email');
        expect(input).toBeInTheDocument();
    })
    })

    
    
})