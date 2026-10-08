# React Task Planner

A simple React Task Planner application built using React, Node.js, Vite, and Bootstrap.

## Project Description

This application allows users to add tasks through a form and display them in a task list.

The application uses two React components:

- `App` - Parent component
- `TaskList` - Child component

The parent component manages the task input, task list, and message. The child component displays the tasks and message.

## Features

- Add a new task using an input field.
- Display all added tasks in a list.
- Show an initial message:
  `Add a task to get started!`
- After adding a task, show:
  `Task added: [task name]!`
- Clear the input after adding a task.
- Change the heading background to light blue after a task is added.
- Prevent empty tasks from being added.

## Technologies Used

- React
- JavaScript
- Node.js
- Vite
- Bootstrap
- ESLint

## Components

### App.jsx

`App.jsx` is the parent component.

It manages:

- Task input
- Task list
- Message
- Heading background

React `useState` is used to manage the application state.

Example:

const [task, setTask] = useState(""); const [tasks, setTasks] = useState([]);


### TaskList.jsx

`TaskList.jsx` is the child component.

It receives the following props from `App.jsx`:

tasks message


It displays the tasks using an unordered list:

<ul> {tasks.map((task, index) => ( <li key={index}>{task}</li> ))} </ul>


## Project Structure

task-planner/ │ ├── public/ │ ├── src/ │ ├── App.css │ ├── App.jsx │ ├── TaskList.jsx │ ├── index.css │ └── main.jsx │ ├── .gitignore ├── package.json ├── package-lock.json ├── vite.config.js └── README.md


## Installation

Clone or download the project.

Open the terminal in the project directory:

cd task-planner


Install dependencies:

npm install


Install Bootstrap:

npm install bootstrap


## Run the Application

Start the development server:

npm run dev


The application will be available at:

http://localhost:5173/


## How to Use

1. Open the application.
2. Enter a task in the input box.
3. Click the `Add Task` button.
4. The task will appear in the task list.
5. The message will change to:

Task added: [task name]!


6. The input field will be cleared.
7. The heading background will change to light blue.

## Example

Initially:

React Task Planner

[ Enter a task ]

[ Add Task ]

Add a task to get started!


After adding `Learn React`:

React Task Planner

[ Enter a task ]

[ Add Task ]

• Learn React

Task added: Learn React!


## React Concepts Demonstrated

This project demonstrates:

- React components
- Parent and child components
- Props
- `useState`
- Controlled inputs
- Form handling
- Event handling
- Conditional styling
- Array `.map()`
- Passing data from parent to child

## Parent-Child Data Flow

App.jsx Parent | ┌───────┴────────┐ │ │ tasks message │ │ └───────┬────────┘ | ▼ TaskList.jsx Child | ▼ Display task list and message


## Build for Production

To create a production build:

npm run build


## Preview Production Build

npm run preview


## Author

NAHAZ