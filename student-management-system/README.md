# Student Management System

## Project Description

The Student Management System is a React-based web application that allows users to register, log in, and view a list of students. The application uses Redux Toolkit for authentication state management, React Router DOM for navigation, and Axios for API requests.

## Features

### 1. Register Page

- User registration with Name, Email, and Password.
- Required field validation.
- Sends a POST request to the registration API.
- Displays a registration success message.
- Redirects to the Login page after successful registration.

### 2. Login Page

- Login with Email and Password.
- Required field validation.
- Sends a POST request to the login API.
- Stores the authentication token and user information using Redux Toolkit.
- Persists authentication data in localStorage.
- Redirects to the Student List page after successful login.

### 3. Student List Page

- Displays student information retrieved from the API.
- Shows student ID, student name, and age.
- Displays a loading message while fetching data.
- Displays a message when no students are available.
- Fetches student data using an authenticated API request.

### 4. Protected Routes

- The Student List page is accessible only to authenticated users.
- Unauthenticated users are redirected to the Login page.
- Authentication is maintained after refreshing the browser when the saved token is available.

### 5. Logout

- Allows users to log out of the application.
- Clears authentication data from Redux and localStorage.
- Redirects the user to the Login page.

## Technologies Used

- React
- JavaScript
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- HTML5
- CSS3
- REST API

## API Endpoints

Base URL: `https://worksheet-student.mashupstack.com`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/students` | Retrieve the student list |

The student list request uses the authentication token in the Authorization header.

## Installation and Setup

### Step 1: Open the project folder

```bash
cd /d D:\REACT-Node.js\student-management-system
```

### Step 2: Install dependencies

```bash
npm.cmd install
```

If the required packages are not installed, run:

```bash
npm.cmd install axios @reduxjs/toolkit react-redux react-router-dom
```

### Step 3: Start the application

```bash
npm.cmd start
```

The application will normally open at:

`http://localhost:3000`

## Application Routes

| Route | Description |
|---|---|
| `/register` | User registration page |
| `/login` | User login page |
| `/` | Protected Student List page |

## Testing Checklist

- [ ] Register a new user with valid details.
- [ ] Verify that registration redirects to the Login page.
- [ ] Log in with the registered email and password.
- [ ] Verify that successful login opens the Student List page.
- [ ] Verify that the student list is fetched from the API.
- [ ] Verify that unauthenticated users cannot access the Student List page.
- [ ] Refresh the page and verify authentication persistence.
- [ ] Click Logout and verify redirection to the Login page.
- [ ] Verify that the Student List remains protected after logout.

## Error Handling

- Required field validation prevents empty form submissions.
- Registration and login errors are displayed to the user.
- Student API errors are displayed when student data cannot be loaded.
- Unauthorized API responses trigger logout and redirect to the Login page.

## Author

NAHAZ