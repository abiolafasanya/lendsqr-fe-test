import React from 'react';
import { render, cleanup, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import UserPage from '../src/pages/UserPage/UserPage';

describe('Test for UserPage Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render userpage dashboard', async () => {
    render(<MemoryRouter>{<UserPage />}</MemoryRouter>);
  });

  it('should contain userpage document', async () => {
    const { getByTestId } =  render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );
    const ancesstor =  getByTestId('userpage', { exact: true });
    
    expect(ancesstor).toBeInTheDocument();
  });

});
