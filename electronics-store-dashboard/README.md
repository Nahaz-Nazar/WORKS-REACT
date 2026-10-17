# Electronics Store Dashboard

## Project Description

The Electronics Store Dashboard is a React-based web application that allows users to register, log in, and access a protected dashboard to view electronic products. The application uses Redux Toolkit for state management, React Router DOM for navigation, and Axios for API requests.

## Features

### 1. Register Page

- Name field
- Email field
- Password field
- Confirm Password field
- Required field validation
- Password and Confirm Password matching validation
- User registration using an API
- Registration success and error messages

### 2. Login Page

- Email and password fields
- Required field validation
- User login using an API
- Authentication state management
- Redirect to the dashboard after successful login
- Error handling for invalid login credentials

### 3. Electronics Store Dashboard

- Protected dashboard access
- Display electronic products
- Fetch product data using API requests
- Manage product data using Redux Toolkit
- Redirect unauthenticated users to the Login page

### 4. Authentication

- Manage authentication using Redux Toolkit
- Store user email and authentication token in Redux state
- Protect dashboard routes
- Logout functionality
- Restrict dashboard access after logout

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- Redux Toolkit
- React Redux
- React Router DOM
- REST API

## Project Structure

```text
electronics-store-dashboard/
├── public/
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── products/
│   │       └── productSlice.js
│   ├── App.js
│   ├── Login.js
│   ├── Register.js
│   ├── Navbar.js
│   ├── store.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

*Note: The file structure should match the actual files in the project.*

## API Endpoints

### Registration API

**Method:** POST

```text
https://worksheet-auth.mashupstack.com/register
```

### Login API

**Method:** POST

```text
https://worksheet-auth.mashupstack.com/login
```

### Product API

The application uses Axios to fetch electronic product data from the product API configured in the project.

## Installation and Setup

### Step 1: Open the Project Folder

Open Command Prompt or the VS Code terminal and execute:

```bat
cd /d D:\REACT-Node.js\electronics-store-dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Application

```bash
npm start
```

### Step 4: Open the Application

Open the following URL in your browser:

```text
http://localhost:3000
```

If the terminal displays a different port, use the URL shown in the terminal.

## Testing Checklist

### Registration Tests

- [ ] Register a new user with valid details.
- [ ] Verify required field validation.
- [ ] Verify password and confirm password matching.
- [ ] Verify successful registration.
- [ ] Verify registration error handling.

### Login Tests

- [ ] Log in with valid credentials.
- [ ] Verify invalid login credentials display an error.
- [ ] Verify successful login redirects to the dashboard.

### Dashboard Tests

- [ ] Verify unauthenticated users cannot access the dashboard.
- [ ] Verify authenticated users can access the dashboard.
- [ ] Verify electronic products are displayed.
- [ ] Verify product data is stored in Redux Toolkit state.
- [ ] Verify product API errors are handled appropriately.

### Logout Tests

- [ ] Verify the logout button works correctly.
- [ ] Verify logout clears authentication state.
- [ ] Verify the user is redirected to the Login page.
- [ ] Verify dashboard access is blocked after logout.

## Expected Output

The application should display the Register and Login pages. Users should be able to register and log in using valid credentials. After successful authentication, users should be able to access the protected Electronics Store Dashboard and view available electronic products.

Unauthenticated users should be redirected to the Login page. After logout, users should no longer be able to access the protected dashboard.

## Author

**JESIFAR**
