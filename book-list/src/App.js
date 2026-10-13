
import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);

  function addBook(e) {
    e.preventDefault();

    if (!bookName.trim() || !authorName.trim()) {
      return;
    }

    const newBook = {
      id: books.length
        ? Math.max(...books.map((book) => book.id)) + 1
        : 1,
      bookName: bookName.trim(),
      authorName: authorName.trim(),
      publishDate: publishDate,
    };

    setBooks([...books, newBook]);
    clearForm();
  }

  function editBook(book) {
    setEditingId(book.id);
    setBookName(book.bookName);
    setAuthorName(book.authorName);
    setPublishDate(book.publishDate);
  }

  function updateBook(e) {
    e.preventDefault();

    if (!bookName.trim() || !authorName.trim()) {
      return;
    }

    setBooks(
      books.map((book) =>
        book.id === editingId
          ? {
              ...book,
              bookName: bookName.trim(),
              authorName: authorName.trim(),
              publishDate: publishDate,
            }
          : book
      )
    );

    clearForm();
  }

  function clearForm() {
    setBookName('');
    setAuthorName('');
    setPublishDate('');
    setEditingId(null);
  }

  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));

    if (editingId === id) {
      clearForm();
    }
  }

  const filteredBooks = books.filter(
    (book) =>
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.authorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">
        Book List Management App
      </h1>

      <div className="card p-4 mb-4">
        <h3>{editingId === null ? 'Add New Book' : 'Edit Book'}</h3>

        <form onSubmit={editingId === null ? addBook : updateBook}>
          <div className="mb-3">
            <label className="form-label">Book Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter book name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Publish Date</label>
            <input
              type="date"
              className="form-control"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary me-2">
            {editingId === null ? 'Add Book' : 'Update Book'}
          </button>

          {editingId !== null && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearForm}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by book name or author name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Publish Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.length === 0 ? (
              <tr>
                <td colSpan="5">No books found</td>
              </tr>
            ) : (
              filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.bookName}</td>
                  <td>{book.authorName}</td>
                  <td>{book.publishDate || '-'}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm me-2 mb-1"
                      onClick={() => editBook(book)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-sm mb-1"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
