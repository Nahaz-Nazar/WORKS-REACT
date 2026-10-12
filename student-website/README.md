# Student Website

## Description
A simple React website that displays a list of student names. When a student name is clicked, the website navigates to a new page and displays a personalized welcome message.

## Features
- Displays a list of student names on the home page.
- Clicking a student name navigates to that student's page.
- Displays a welcome message in the format `Welcome, [student name]!`.
- Uses route parameters to display the selected student's name.
- Includes a button to navigate directly to Riya's page.
- Uses `useNavigate()` for programmatic navigation.
- Uses `useParams()` to read the student name from the URL.

## Technologies Used
- React.js
- JavaScript
- React Router DOM
- HTML
- CSS

## React Router Concepts
- `BrowserRouter` — enables routing.
- `Routes` and `Route` — define application routes.
- `Link` — navigates to a selected student's page.
- `useParams()` — retrieves the student name from the URL.
- `useNavigate()` — navigates to Riya's page when the button is clicked.

## Routes
- `/` — Home page with the student list.
- `/student/Alexa` — displays `Welcome, Alexa!`.
- `/student/Alexai` — displays `Welcome, Alexai!`.
- `/student/Riya` — displays `Welcome, Riya!`.
- `/student/Rahul` — displays `Welcome, Rahul!`.

## How to Run the Project

1. Open Command Prompt.
2. Navigate to the project folder:

   ```cmd
   cd /d D:\REACT-Node.js\student-website
   ```

3. Install dependencies if needed:

   ```cmd
   npm install
   ```

4. Start the application:

   ```cmd
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## Project Structure

```text
student-website/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Author
NAHAZ