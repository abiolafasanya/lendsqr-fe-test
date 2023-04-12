# LendSqr Assessments for frontend engineer

### Live Preview link
[Netlify link to LendSqr Assessment](https://abiola-fasanya-lendsqr.netlify.app/)


## Documentation for the Login Component

### Overview
The `Login` component is responsible for rendering a login page that allows users to log in to the system. 

### Props
The `Login` component does not receive any props.

### State
The `Login` component contains the following state:
* `showPassword`: A boolean value that determines whether the password input field should show the password or not.
* `success`: A boolean value that determines whether the login was successful or not.
* `error`: A boolean value that determines whether an error occurred during login or not.

### Methods

#### handleLogin(e: React.FormEvent<HTMLFormElement>)
This method handles the submission of the login form by retrieving the user's email and password from the form, and then sending this information to the server for validation. If the validation is successful, the user is navigated to the dashboard page. If the validation fails, an appropriate message is displayed to the user.

### Dependencies
The `Login` component makes use of the following dependencies:
* `React`
* `useEffect`: To handle side effects after initial render.
* `useState`: To create stateful values.
* `UseAuth`:  A custom hook that provides authentication functionality.
* `Link`: To navigate between pages within the application.
* `useNavigate`: To programmatically navigate to another page.
* `Helmet`: To update the metadata of the webpage.
* `AlertMsg`: A custom component that displays alerts to users regarding the status of their login attempt.

### Styling
The `Login` component makes use of CSS Modules to locally scope its styles.

### Usage
To use the `Login` component, simply import it into your project and render it as appropriate. 
```javascript
import Login from './path/to/login';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
```

## Documentation for the UserPage Component

### Overview
The `UserPage` component is responsible for rendering a page that displays information about users of the system.

### Props
The `UserPage` component does not receive any props.

### State
The `UserPage` component contains the following state:
* `users`: An array of objects representing the users of the system.
* `loading`: A boolean value that determines whether the data is still being fetched from the API or not.

### Methods
The `UserPage` component contains the following methods:

#### fetchUsers()
This method is used to fetch user data from an API. It sends a `GET` request to the server and returns the result as an array of user objects.

### Dependencies
The `UserPage` component makes use of the following dependencies:
* `React`
* `useEffect`: To handle side effects after initial render.
* `useState`: To create stateful values.
* `Helmet`: To update the metadata of the webpage.
* `IUser`: A custom type that defines the structure of a user object.
* `InfoCard`: An array of objects containing information about users, used to populate the `Card` components.
* `Card`: A custom component that renders information in a visually appealing way.
* `DataView`: A custom component that displays data in a tabular format.
* `Facebook`: A third-party component that displays a loading animation.

### Styling
The `UserPage` component makes use of CSS Modules to locally scope its styles.

### Usage
To use the `UserPage` component, simply import it into your project and render it as appropriate. 
```javascript
import UserPage from './path/to/userpage';

function App() {
  return (
    <div>
      <UserPage />
    </div>
  );
}

export default App;
```
## Documentation for the User Detail Page Component

### Overview
The `Index` component is responsible for rendering a page that displays detailed information about a single user of the system.
# Documentation for Login page Component Test

### Overview
This test checks for the presence of essential elements in the Login component. The test renders the Login component and verifies that it contains a form element, email and password input fields.

### Dependencies
The Login Page Test file requires the following dependencies:
* `React`
* `@testing-library/jest-dom`: Provides custom jest matchers used in the test.
* `render`: A function from `@testing-library/react` used to render the component to be tested.
* `MemoryRouter`: A component from `react-router-dom` used to wrap the component to be tested and simulate routing behavior.

### Test Suites
The Login Page Test file contains one test suite:

#### Test for Login Page
This test suite has the following test cases:
* `should render login page`: This test case simply ensures that the Login component can be rendered without crashing.
* `should contain form element`: This test case confirms the presence of the form element in the Login component.
* `should contain email and password input`: This test case confirms the presence of email and password input fields in the Login component.

### Usage
To use the Login Page Test file in your project, simply import it into a relevant test file and run the tests.

```javascript
import React from 'react';
import Login from './Index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Test for Login Page', () => {

  it('should render login page', async () => {
    render(<MemoryRouter>{<Login />}</MemoryRouter>);
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
```
### Props
The `Index` component does not receive any props.

### State
The `Index` component contains the following state:
* `user`: An object representing the details of a single user of the system.
* `loading`: A boolean value that determines whether the data is still being fetched from the API or not.
* `error`: A boolean value that determines whether an error occurred while fetching data from the API.
* `message`: A string that provides feedback to the user about the status of the request.

### Methods
The `Index` component contains the following method:

#### fetchUser()
This method is used to fetch the details of a single user from an API. It sends a `GET` request to the server and returns the result as an object representing a user.

### Dependencies
The `Index` component makes use of the following dependencies:
* `React`
* `useEffect`: To handle side effects after initial render.
* `useState`: To create stateful values.
* `Link`: To navigate to other pages in the application.
* `useLocation`: To extract the id of the user whose details are to be displayed.
* `DetailHeader`: A custom component that displays header information about the user.
* `DetailTab`: A custom component that displays tabular information about the user.
* `IUser`: A custom type that defines the structure of a user object.
* `ContentLoader`, `Facebook`: Third-party components that display a loading animation.

### Styling
The `Index` component makes use of CSS Modules to locally scope its styles.

### Usage
To use the `Index` component, simply import it into your project and render it as appropriate. 
```javascript
import Index from './path/to/index';

function App() {
  return (
    <div>
      <Index />
    </div>
  );
}

export default App;
```
# Documentation for Login page Component Test

### Overview
This test checks for the presence of essential elements in the Login component. The test renders the Login component and verifies that it contains a form element, email and password input fields.

### Dependencies
The Login Page Test file requires the following dependencies:
* `React`
* `@testing-library/jest-dom`: Provides custom jest matchers used in the test.
* `render`: A function from `@testing-library/react` used to render the component to be tested.
* `MemoryRouter`: A component from `react-router-dom` used to wrap the component to be tested and simulate routing behavior.

### Test Suites
The Login Page Test file contains one test suite:

#### Test for Login Page
This test suite has the following test cases:
* `should render login page`: This test case simply ensures that the Login component can be rendered without crashing.
* `should contain form element`: This test case confirms the presence of the form element in the Login component.
* `should contain email and password input`: This test case confirms the presence of email and password input fields in the Login component.

### Usage
To use the Login Page Test file in your project, simply import it into a relevant test file and run the tests.

```javascript
import React from 'react';
import Login from './Index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Test for Login Page', () => {

  it('should render login page', async () => {
    render(<MemoryRouter>{<Login />}</MemoryRouter>);
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
```