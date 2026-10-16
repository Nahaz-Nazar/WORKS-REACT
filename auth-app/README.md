# React Register and Login App

## Project Description

This is a basic React application that allows users to register and log in using API requests. It contains separate Register and Login pages.

## Features

### Register Page
- Collects Name, Email, and Password.
- Sends a POST request to the Register API.
- Displays a success alert when registration is successful.
- Redirects the user to the Login page after successful registration.
- Displays an error message if registration fails.

### Login Page
- Collects Email and Password.
- Sends a POST request to the Login API.
- Displays a success alert when login is successful.
- Prints the received authentication token in the browser console.
- Displays an error message if login fails.

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- React Router DOM
- Fetch API

## API Endpoints

**Register API**

`https://worksheet-auth.mashupstack.com/register`

Method: `POST`

Example request body:

```json
{
  "user_name": "John Doe",
  "email": "johndoe@gmail.com",
  "password": "Password123"
}
```

**Login API**

`https://worksheet-auth.mashupstack.com/login`

Method: `POST`

Example request body:

```json
{
  "email": "johndoe@gmail.com",
  "password": "Password123"
}
```

## Project Structure

```text
auth-app/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Register.js
│   ├── Login.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation and Setup

1. Open Command Prompt.
2. Navigate to the project directory:

```cmd
cd /d D:\REACT-Node.js\auth-app
```

3. Install dependencies:

```cmd
npm.cmd install
npm.cmd install react-router-dom
```

4. Start the React application:

```cmd
npm.cmd start
```

5. Open the application in your browser:

`http://localhost:3000`

## Application Pages

- Register Page: `http://localhost:3000/register`
- Login Page: `http://localhost:3000/login`

## Testing

- Register a user with a name, email, and password.
- Verify the registration success alert.
- Verify redirection to the Login page.
- Log in using the registered credentials.
- Verify the login success alert.
- Open the browser Developer Tools and check the Console for the authentication token.
- Test invalid inputs and verify error handling.

## Expected Results

- Successful registration displays **Registration Successful**.
- Successful registration redirects to the Login page.
- Successful login displays **Successfully Logged In**.
- The authentication token is printed in the browser console when provided by the API.
- Failed API requests display an error message.

## Notes

- Successful API responses depend on the API server and valid user credentials.
- The application requires an internet connection to communicate with the APIs.
- The exact error message depends on the API response.
