import React from 'react';
import Login from './Index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Test for Login Page', () => {
  it('should render login page', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it('should contain form element', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const formElement = await findByTestId('form-element');
    expect(formElement).toBeInTheDocument;
  });

  it('should contain email and password input', async () => {
    const { findAllByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = await findAllByTestId('email-input');
    const passwordInput = await findAllByTestId('password-input');
    expect(emailInput).toBeInTheDocument;
    expect(passwordInput).toBeInTheDocument;
  });
});
