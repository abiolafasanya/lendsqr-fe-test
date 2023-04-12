import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import React from 'react';
import { MemoryRouter } from 'react-router';

describe('should render app', () => {
  it('Should render application', () => {
    const content = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    content
      .findByTestId('form-element')
      .then((form) => {
        console.log(form);
        expect(form).toContainHTML;
      })
      .catch((error) => console.log(error));
  });
});
