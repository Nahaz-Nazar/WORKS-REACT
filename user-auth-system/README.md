# User Auth System

## Project Description

User Auth System is a React application that provides user registration and login functionality using the MashupStack Authentication API.

The application includes Register and Login pages with form validation, API integration, and a navigation bar.

## Features

### Register Page
- Collects Name, Email, Password, and Confirm Password.
- Validates that all fields are filled.
- Checks whether Password and Confirm Password match.
- Sends a POST request to the registration API.
- Displays **"Registration Successful"** when registration succeeds.
- Automatically redirects to the Login page after successful registration.

### Login Page
- Collects Email and Password.
- Sends a POST request to the login API.
- Displays **"Successfully Logged In"** when login succeeds.
- Prints the received token in the browser console.

### Navbar
- Displays Register and Login links on both pages.
- Uses a dark background and white text.
- Changes link color on hover.
- Highlights the active page link.

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- React Router DOM
- Fetch API

## API Endpoints

**Register**

`POST https://worksheet-auth.mashupstack.com/register`

Example request body:

```json
{
  "user_name": "Alex",
  "email": "Alex@gmail.com",
  "password": "Alex1@23"
}
```

**Login**

`POST https://worksheet-auth.mashupstack.com/login`

Example request body:

```json
{
  "email": "johndoe@gmail.com",
  "password