# Profile Viewer

## Description
A simple React Profile Viewer application that displays a welcome message and allows the user to log in as Alice.

## Features
- Displays **Welcome, Guest!** when the page opens.
- Includes a **Login as Alice** button.
- Changes the welcome message to **Welcome, Alice!** when the button is clicked.
- Uses the `useState()` hook to manage the username.
- Uses the `useEffect()` hook to display a console message when the username changes.
- Uses `useRef()` to prevent the console message from appearing on the initial render.

## Technologies Used
- React.js
- JavaScript
- CSS
- HTML

## Output
**Initial Message:** Welcome, Guest!

**Button:** Login as Alice

**After Clicking:** Welcome, Alice!

**Browser Console:**
```text
User changed to Alice
```

## How to Run the Project
1. Open the project folder in Command Prompt.
2. Install dependencies if needed:

   ```bash
   npm install
   ```

3. Start the React application:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Project Structure
