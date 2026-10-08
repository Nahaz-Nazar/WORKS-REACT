# Light Switch App

A small React app that demonstrates component state, props, event handling, and conditional rendering. Click the button to switch the room between dark and bright.

## Features

- The room starts dark and the button displays **Turn ON**.
- Clicking **Turn ON** makes the room bright and changes the button to **Turn OFF**.
- Clicking **Turn OFF** returns the room to dark.

## Built with

- React
- Vite
- JavaScript

## Project structure

```text
light-switch-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── LightSwitch.jsx
│   ├── Room.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting started

From this folder, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
