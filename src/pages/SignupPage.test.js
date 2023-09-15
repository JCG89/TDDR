/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import SignupPage from './SignupPage';

import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'


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
        const passwordInput = screen.getByLabelText('Password');

        expect(passwordInput.type).toBe('password');
     });
     it('has passwords type for password repeat',()=>{

        render(<SignupPage/>);

        const repeatPasswordInput = screen.getByLabelText('Password Repeat');

        expect(repeatPasswordInput.type).toBe('password');
     });
     it("has Sgn Up Button",()=>{
        render(<SignupPage/>);
        const button  = screen.queryByRole('button', {name: "Sign Up"});
        expect(button).toBeInTheDocument();
     });
     it('has desabled btton', () => {
        render(<SignupPage/>);

        const button= screen.queryByRole('button', {name:'Sign Up'});

        expect(button).toBeDisabled();
     })
    })

    describe('Interactions', () => {
        it('enables button when the password and the repeat password have the same value', () => {
          render(<SignupPage />);
          const passwordInput = screen.getByLabelText('Password');
          const repeatPasswordInput = screen.getByLabelText('Password Repeat');
          userEvent?.type(passwordInput, 'P4ssword');
          userEvent?.type(repeatPasswordInput, 'P4ssword'); 
      
          const button = screen.queryByRole('button', { name:'Sign Up'});
      
          expect(button).not.toBeEnabled();
        });
      });
      
    
})