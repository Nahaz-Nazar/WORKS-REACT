# Student Auth Dashboard

## Project Description

Student Auth Dashboard is a React-based web application that provides user registration, login, authentication, and protected access to a students list.

The application uses Redux Toolkit to manage authentication state, React Router DOM for page navigation, Axios to communicate with the REST API, and localStorage to persist the user's login session.

## Features

### 1. User Registration
- Register a new user with User Name, Email, and Password.
- Validate required fields.
- Send registration details to the API.
- Display a success message after successful registration.
- Redirect to the Login page after registration.

### 2. User Login
- Login using Email and Password.
- Validate required fields.
- Send login credentials to the API.
- Store the user's email and authentication token.
- Navigate to the Students List page after successful login.

### 3. Authentication Management
- Manage authentication state using Redux Toolkit.
- Store user information in localStorage.
- Restore the saved login session after refreshing the page.
- Use `AutoLogin.js` to restore authentication state.

### 4. Protected Routes
- Use `checkAuth(Component)` to protect the Students List page.
- Allow access only to authenticated users.
- Redirect unauthenticated users to the Login page.

### 5. Students List
- Fetch student data from the API.
- Send the authentication token with the request.
- Display student information, including name and age.

### 6. Logout
- Remove the user from Redux authentication state.
- Clear saved user information from localStorage.
- Redirect to the Login page.

## Technologies Used

- React
- JavaScript
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- HTML
- CSS
- REST API
- localStorage

## API Endpoints

**Base URL:** `https://worksheet-student.mashupstack.com`

| HTTP Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/students` | Retrieve the students list |

### Registration Request

```json
{
  "user_name": "Alice Smith",
  "email": "alice.test@example.com",
  "password": "Password123"
}
```

### Login Request

```json
{
  "email": "alice.test@example.com",
  "password": "Password123"
}
```

### Students List Request

The authentication token is sent in the request header:

```text
Authorization: Bearer <token>
```

## Project Folder Structure

```text
student-auth-dashboard/
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── components/
│   │   ├── AutoLogin.js
│   │   └── checkAuth.js
│   ├── features/
│   │   └── auth/
│   │       └── authSlice.js
│   ├── pages/
│   │   ├── Register.js
│   │   ├── Login.js
│   │   └── StudentList.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Installation and Setup

### Step 1: Navigate to the project folder

Open Command Prompt and run:

```cmd
cd /d D:\REACT-Node.js\student-auth-dashboard
```

### Step 2: Install dependencies

```cmd
npm.cmd install
```

Install the required packages if they are not already available:

```cmd
npm.cmd install axios @reduxjs/toolkit react-redux react-router-dom
```

### Step 3: Start the application

```cmd
npm.cmd start
```

### Step 4: Open in the browser

```text
http://localhost:3000
```

## Testing Checklist

- [ ] Register a new user.
- [ ] Verify that successful registration redirects to Login.
- [ ] Log in with valid credentials.
- [ ] Verify that login opens the Students List page.
- [ ] Verify that the email and token are saved in localStorage.
- [ ] Verify that the students list loads from the API.
- [ ] Refresh the page and verify that the session is restored.
- [ ] Log out and verify that the Login page appears.
- [ ] Open the protected route without logging in.
- [ ] Verify that unauthenticated users are redirected to Login.

## Expected Result

The application should allow users to register and log in, display the students list only to authenticated users, restore saved authentication after a page refresh, and clear the session after logout.

## Author

**NAHAZ
