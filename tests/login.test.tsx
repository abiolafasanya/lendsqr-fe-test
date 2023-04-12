import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import Login from '../src/pages/Login/Index';

describe('Test for Login Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render login page', async () => {
    render(<MemoryRouter>{<Login />}</MemoryRouter>);
  });

  it('should contain form element', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const formElement = getByTestId('form-element', { exact: true });
    const loginBtn = getByTestId('login-btn', { exact: true });
    console.log(
      'Btn Text ===> \n ----->>> result: ',
      loginBtn.innerHTML,
      ' <<<------'
    );
    expect(formElement).toBeInTheDocument();
    expect(formElement).toContainElement(loginBtn);
  });

  it('should contain email input', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = getByTestId('email-input', { exact: true });
    expect(emailInput).toBeInTheDocument();
  });

  it('should contain password input', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const passwordInput = getByTestId('password-input', { exact: true });
    expect(passwordInput).toBeInTheDocument;
  });
});
