# Personal Website – React

## Project Description

This project is a simple personal website developed using React. It contains three pages: Home, About, and Contact. React Router is used for navigation, and Bootstrap is used for styling.

Each page displays a unique heading and includes a **Show Enthusiasm** button. When the button is clicked, the message changes and the heading background becomes light blue.

## Technologies Used

- React
- JavaScript
- React Router DOM
- Bootstrap
- CSS
- HTML

## Project Structure

```text
personal-website/
├── public/
├── src/
│   ├── App.js
│   ├── Navbar.js
│   ├── router.js
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Features

- Navigation links for Home, About, and Contact.
- Separate functional components for each page.
- React Router DOM for page navigation.
- Active navbar link highlighted in blue.
- Bootstrap cards for page content.
- Show Enthusiasm button on every page.
- Button click updates the message to `Hello from React! I love this page!`.
- Heading background changes to light blue after clicking the button.

## Installation

Open CMD and navigate to the project folder,
Install the required packages:

```bash
npm install react-router-dom bootstrap
```

## Run the Project

Start the React development server:

```bash
npm start
```

Open the following URL in your browser:

```text
http://localhost:3000
```

## Expected Output

### Home Page

- Heading: This is the Home Page
- Initial message: Click the button to see my enthusiasm!
- Button: Show Enthusiasm

### About Page

- Heading: This is the About Page
- Initial message: Click the button to see my enthusiasm!
- Button: Show Enthusiasm

### Contact Page

- Heading: This is the Contact Page
- Initial message: Click the button to see my enthusiasm!
- Button: Show Enthusiasm

### After Clicking Show Enthusiasm

The message changes to:

```text
Hello from React! I love this page!
```

The heading background changes to light blue.

## Conclusion

This project demonstrates React functional components, page navigation using React Router DOM, Bootstrap styling, CSS customization, and button click events.
