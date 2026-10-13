# Book List Management App

## Project Description

The Book List Management App is a React application used to manage book details. Users can add new books, view book information, edit existing books, delete books, and search for books by book name or author name.

## Features

- Add a new book.
- View books in a table.
- Edit and update book details.
- Delete books from the list.
- Search by book name or author name.
- Enter the book's publication date.
- Display "No books found" when there are no matching results.
- Responsive layout using Bootstrap.

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Bootstrap

## Project Structure

```text
book-list/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation and Setup

1. Open the project folder in VS Code.
2. Open the terminal.
3. Navigate to the project directory:

   ```bash
   cd D:\REACT-Node.js\book-list
   ```

4. Install the dependencies:

   ```bash
   npm.cmd install
   ```

5. Install Bootstrap if it is not already installed:

   ```bash
   npm.cmd install bootstrap
   ```

6. Start the application:

   ```bash
   npm.cmd start
   ```

7. Open the application in your browser:

   `http://localhost:3000`

## Sample Book Details

| ID | Book Name | Author Name | Publish Date |
|---|---|---|---|
| 1 | The Alchemist | Paulo Coelho | 2009-11-22 |
| 2 | Wings of Fire | A.P.J. Abdul Kalam | 1999-01-01 |

## How to Use

1. Enter the book name, author name, and publication date.
2. Click **Add Book** to add a book.
3. Click **Edit** to modify an existing book.
4. Click **Update Book** to save the changes.
5. Click **Delete** to remove a book.
6. Use the search field to find books by name or author.

## Data Storage

Book details are stored in React state. The list is not permanently stored, so refreshing the browser resets the book list.

## Expected Result

The application displays a book entry form, a search field, and a table containing book details with Edit and Delete actions.

## Conclusion

This project demonstrates React functional components, the useState hook, event handling, form handling, list rendering, searching, and basic CRUD operations.
