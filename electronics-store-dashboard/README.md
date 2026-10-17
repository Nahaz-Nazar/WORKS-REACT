# Electronics Store Dashboard

A React application for registering and logging in, then viewing electronics products from the Mashup Stack API. This project is located in the `electronics-store-dashboard` folder of the `works-react` repository.

## Features

- Register with a user name, email, and password.
- Log in and keep the email and authentication token in Redux state.
- View products on a dashboard available to authenticated users.
- Log out to clear the authentication and product state.
- Show loading, empty, and error states for product requests.

## Tech stack

- React and React Router
- Redux Toolkit and React Redux
- Axios
- CSS

## API

The app uses `https://worksheet-product.mashupstack.com`:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/register` | Register an account |
| `POST` | `/login` | Log in and receive an authentication token |
| `GET` | `/product` | Load the product list |

## Run locally

From the `works-react` repository root, open a terminal and run:

```bash
cd electronics-store-dashboard
npm install
npm start
```

The development server normally opens at [http://localhost:3000](http://localhost:3000). If it reports a different port, use the URL shown in the terminal.

## Available scripts

Run these commands from the `electronics-store-dashboard` folder:

```bash
npm start
npm test
npm run build
```

## Routes

| Route | Description |
| --- | --- |
| `/register` | Create an account |
| `/login` | Log in |
| `/products` | View products; redirects to login when unauthenticated |
| `/` | Redirects to `/products` when logged in, otherwise to `/login` |

## Project structure

```text
electronics-store-dashboard/
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── products/
│   │       └── productSlice.js
│   ├── App.js
│   ├── App.css
│   ├── Login.js
│   ├── Navbar.js
│   ├── ProductList.js
│   ├── Register.js
│   └── index.js
├── package.json
└── README.md
```

## Product information

The dashboard displays each product's ID, name, description, price, and quantity when those values are returned by the API.

## Author

NAHAZ
