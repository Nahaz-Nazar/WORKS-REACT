Sure 👍 You can put this in your **`README.md`** file.

```
# Light Switch React App

A simple React application demonstrating **parent-child components**, **state**, and **props**.

## Project Description

This app has two components:

- `Room` - Parent component that controls whether the room is bright or dark.
- `LightSwitch` - Child component that contains the ON/OFF button.

## Features

- Initially, the room is dark.
- The button initially displays `Turn ON`.
- Clicking `Turn ON`:
  - Changes the room to `The room is bright`
  - Changes the button to `Turn OFF`
- Clicking `Turn OFF`:
  - Changes the room to `The room is dark`
  - Changes the button to `Turn ON`

## Technologies Used

- React
- JavaScript
- Node.js
- Vite
- ESLint

## Project Structure
```

light-switch-app/ │ ├── src/ │ ├── App.jsx │ ├── Room.jsx │ ├── LightSwitch.jsx │ ├── App.css │ ├── index.css │ └── main.jsx │ ├── public/ ├── package.json ├── vite.config.js └── README.md

```

## Components

### Room

`Room` is the parent component.

It manages the light state using React's `useState`:
```

const \[isOn, setIsOn\] = useState(false);

```

It displays:
```

The room is dark

```

when `isOn` is `false`.

It displays:
```

The room is bright

```

when `isOn` is `true`.

### LightSwitch

`LightSwitch` is the child component.

It receives two props from `Room`:
```

isOn onToggle

```

The button text changes depending on the value of `isOn`:
```

{isOn ? "Turn OFF" : "Turn ON"}

```

## How It Works

The parent component (`Room`) owns the state.
```

Room │ │ props ▼ LightSwitch │ │ click ▼ onToggle() │ ▼ Room state changes │ ▼ UI updates

```

## Installation

Clone or download the project.

Open the project folder in a terminal:
```

cd light-switch-app

```

Install dependencies:
```

npm install

```

## Run the Application

Start the development server:
```

npm run dev

```

Then open the URL shown in the terminal, usually:
```

http://localhost:5173

```

## Build for Production

To create a production build:
```

npm run build

```

## Preview Production Build
```

npm run preview


## Learning Concepts

This project demonstrates:

- React components
- Parent and child components
- `useState`
- Props
- Event handling
- Conditional rendering
- Passing functions from parent to child
- State management

Save this as:

```
README.md
```

at the **root of your project**, alongside `package.json`.