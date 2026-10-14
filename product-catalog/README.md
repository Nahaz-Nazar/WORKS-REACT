# Product Catalog Management App

## Description

A React-based electronics product catalog application connected to the MashupStack Product API.

## Features

- View all products
- Search products by name
- Add new products
- Edit existing products
- Delete products
- Display product name, price, category, and quantity
- Responsive user interface

## Technologies Used

- React
- JavaScript
- Axios
- CSS
- REST API

## API

Base URL: https://worksheet-catalogue.mashupstack.com/products

- GET `/products` — Retrieve all products
- GET `/products/{id}` — Retrieve one product
- POST `/products` — Add a product
- PUT `/products/{id}` — Update a product
- DELETE `/products/{id}` — Delete a product

## Installation

1. Open the project folder.
2. Install dependencies:

   `npm install`

3. Start the application:

   `npm start`

4. Open http://localhost:3000 in your browser.

## Product Fields

- name
- price
- category
- quantity