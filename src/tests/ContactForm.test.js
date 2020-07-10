import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

test('ContactForm accepts user contact info and renders it on the page', () => {
    render(<ContactForm />);
    // type into all three inputs 
    // 1. query for all inputs 
    // 2. run the change event to add text
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);

    
    // events with RTL! 


    // click submit button 
    // 1. query for the button 
    // 2. run the click event on the button 


    // assert that user info is rendered on the page
    // 1. query for the user contact info text 
    // 2. assert that it is being rendered 
})