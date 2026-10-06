# Personal Information and Hobbies - React

This project is a simple React application that displays personal information and favorite hobbies.

It includes a Bootstrap card for personal details, two hobby lists using a `for` loop and `map()`, and an interactive button to display a message.

## Features

* Displays personal information
* Name stored in a variable
* Age stored in a variable
* Student status stored as a boolean
* Bootstrap card used to display personal details
* Displays three favorite hobbies
* One hobby list is generated using a normal `for` loop
* Another hobby list is generated using the `map()` method
* Bootstrap-styled "Show Enthusiasm" button
* Initial message:
  `Click the button to see my enthusiasm!`
* Button click changes the message to:
  `Hello from React! I love my hobbies!`
* Heading background color changes to `lightblue` after clicking the button
* Uses `document.getElementById()` to update the message and heading

## Technologies Used

* React
* JavaScript
* Bootstrap
* CSS

## Project Structure

text
hobbies-card/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── README.md


## Personal Information

The application uses the following example details:

text
Name: Nahaz
Age: 20
Student: true


## Favorite Hobbies

The three favorite hobbies are:

* Reading
* Hiking
* Coding

The hobbies are displayed in two separate lists:

1. Using a normal `for` loop
2. Using the `map()` method

## Interactive Button

The application contains a button labeled:

text
Show Enthusiasm


Initially, the message is:

text
Click the button to see my enthusiasm!


After clicking the button, it changes to:

text
Hello from React! I love my hobbies!


The heading background color also changes to:

text
lightblue


## Installation

Open the terminal inside the `hobbies-card` project folder.

Install the project dependencies:

bash
npm install


Install Bootstrap:

bash
npm install bootstrap


## Run the Application

Start the React development server:

bash
npm start


If port 3000 is already in use, choose `Y` when React asks to run the application on another port.

## Output

The application displays:

text
Personal Information and Hobbies

Personal Information
Name: Nahaz
Age: 20
Student: true

Favorite Hobbies - For Loop
Reading
Hiking
Coding

Favorite Hobbies - map()
Reading
Hiking
Coding

[ Show Enthusiasm ]

Click the button to see my enthusiasm!


After clicking the button:

text
Hello from React! I love my hobbies!

## Author

Nahaz
