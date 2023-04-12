import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import User from '../src/pages/User/Index';

describe('Test for User Profile Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render user profile dashboard E.G /user/1', async () => {
    render(<MemoryRouter>{<User />}</MemoryRouter>);
  });

  it('should contain user document',  () => {
    const { getByTestId } =  render(
      <MemoryRouter>
        <User />
      </MemoryRouter>
    );
    const ancesstor = getByTestId('user-profile', { exact: true });
    
    expect(ancesstor).toBeInTheDocument();
  });

});
