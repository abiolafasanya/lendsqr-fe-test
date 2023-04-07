import * as ReactDOM from 'react-dom'
import React from 'react'
import Login from '../src/pages/Login'
import "jest"

describe('Login Component tests', () => {
    let container: HTMLDivElement = document.createElement('div');

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Login />, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('should render the login form', () => {
        const inputs = container.querySelectorAll('input')
        expect(inputs.length).toBe(3)
    })
})