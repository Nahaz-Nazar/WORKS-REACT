# Seller Product Dashboard

## Project Description

The Seller Product Dashboard is a React application that provides user registration and login functionality. Users can register an account and log in using their credentials.

## Features

### 1. Register Page

- Name field
- Email field
- Password field
- Confirm Password field
- Validate required fields
- Check whether Password and Confirm Password match
- Send registration details to the authentication API
- Display success and error messages
- Handle registration errors

### 2. Login Page

- Email field
- Password field
- Validate login inputs
- Authenticate users using the API
- Manage user authentication state
- Display login errors when authentication fails

### 3. State Management

- Redux Toolkit
- React Redux
- Store user email and authentication token
- Update authentication credentials
- Logout functionality
- Clear authentication credentials when logging out

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Redux Toolkit
- React Redux
- REST API
- npm

## API Endpoints

### Register API

**Method:** POST

**URL:**

https://worksheet-auth.mashupstack.com/register

The Register page sends user registration details to the API.

## Project Folder Structure

```text
seller-product-dashboard/
├── public/
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── products/
│   │       └── productSlice.js
│   ├── App.js
│   ├── App.css
│   ├── Login.js
│   ├── Register.js
│   ├── Navbar.js
│   ├── store.js
│   └── index.js
├── package.json
└── README.md
```

*Note: The folder structure above is a reference. Your actual project may contain additional files.*

## Installation and Setup

### Step 1: Open Command Prompt

Open Command Prompt or the VS Code terminal.

### Step 2: Navigate to the Project Folder

```bash
cd /d D:\REACT-Node.js\seller-product-dashboard
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Application

```bash
npm start
```

### Step 5: Open in Browser

Open the following URL:

http://localhost:3000

## Validation

The application should validate the registration form before sending data to the API.

- Name must not be empty.
- Email must be valid.
- Password must not be empty.
- Confirm Password must match Password.
- Invalid inputs should display appropriate error messages.
- API errors should be handled appropriately.

## Testing Checklist

### Register Page

- [ ] Register page displays correctly.
- [ ] Name field is displayed.
- [ ] Email field is displayed.
- [ ] Password field is displayed.
- [ ] Confirm Password field is displayed.
- [ ] Empty required fields are validated.
- [ ] Invalid email is handled.
- [ ] Password mismatch displays an error.
- [ ] Valid registration sends a POST request.
- [ ] Successful registration displays the appropriate message.
- [ ] Registration API errors are handled correctly.

### Login Page

- [ ] Login page displays correctly.
- [ ] Email field is displayed.
- [ ] Password field is displayed.
- [ ] Required fields are validated.
- [ ] Login authentication is tested.
- [ ] Invalid login displays an appropriate error.

### Redux State Management

- [ ] Redux store is configured.
- [ ] Authentication slice is configured.
- [ ] User email is stored correctly.
- [ ] Authentication token is stored correctly.
- [ ] Logout clears authentication credentials.

## Expected Output

The application should provide Register and Login pages with form validation and API integration. Redux Toolkit should manage authentication credentials and logout functionality.

## Error Handling

The application should handle validation errors, registration failures, and login failures without crashing.

If the API returns an error such as `Registration failed (400)`, check the API response and ensure that the request body contains the fields expected by the server.

## Conclusion

The Seller Product Dashboard project demonstrates React form handling, user registration, login functionality, REST API integration, and Redux Toolkit state management.

## Author

NAHAZ
