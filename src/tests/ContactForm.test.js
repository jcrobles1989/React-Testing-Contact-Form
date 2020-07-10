import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

test('ContactForm accepts user contact info and renders it on the page', async () => {
    
    render(<ContactForm />);
    // type into all three inputs 
    // 1. query for all inputs 
    // 2. run the change event to add text
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    // events with RTL! 
    fireEvent.change(firstNameInput, {target: { value: 'Jose' } });
    fireEvent.change(lastNameInput, {target: { value: 'Robles' } });
    fireEvent.change(emailInput, {target: { value: 'jose@jose.com' } });
    fireEvent.change(messageInput, {target: { value: 'some message' } });

    // click submit button 
    // 1. query for the button 
    // 2. run the click event on the button 
    const submitButton = screen.getByRole('button', {type: /submit/i});

    await act(async () => {
        fireEvent.click(submitButton);
    })

    // assert that user info is rendered on the page
    // 1. query for the user contact info text 
    // 2. assert that it is being rendered 
    
})