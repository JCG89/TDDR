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
    it("has username label", () => {

        render(<SignupPage/>);

        const label = screen.getByLabelText('Username');
        expect(label).toBeInTheDocument()
    });

    it('has email label', () => {
       render(<SignupPage/>);

        const label = screen.getByLabelText('Email');
        expect(label).toBeInTheDocument();
    });
     it("has passwords label", () => {
        render(<SignupPage/>);
        const label = screen.getByLabelText('Password');

        expect(label).toBeInTheDocument();
     });

     it("has passwords type",()=>{

        render(<SignupPage/>);
        const type = screen.getByLabelText('Password');

        expect(type.type).toBe('password');
     })
    })

    
    
})