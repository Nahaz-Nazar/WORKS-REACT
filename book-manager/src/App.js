import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'https://worksheet-library.mashupstack.com/books';

function App() {
  const emptyForm = {
    title: '',
    author: '',
    published_year: '',
    genre: '',
  };

  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Get books from API
  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Failed to load books.');
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setBooks(data);
      } else if (Array.isArray(data.books)) {
        setBooks(data.books);
      } else if (Array.isArray(data.data)) {
        setBooks(data.data);
      } else {
        setBooks([]);
      }

      setError('');
    } catch (err) {
      setError(err.message || 'Unable to load books.');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Create or update a book
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage('');
    setError('');

    const payload = {
      title: formData.title.trim(),
      author: formData.author.trim(),
      published_year: Number(formData.published_year),
      genre: formData.genre.trim(),
    };

    // Reject empty values, including whitespace-only text
    if (
      !payload.title ||
      !payload.author ||
      !formData.published_year ||
      !payload.genre
    ) {
      setError('Please fill out this field.');
      return;
    }

    if (
      !Number.isInteger(payload.published_year) ||
      payload.published_year < 1
    ) {
      setError('Please enter a valid published year.');
      return;
    }

    setLoading(true);

    try {
      const isEditing = editingId !== null;

      const response = await fetch(
        isEditing
          ? `${API_URL}/${encodeURIComponent(editingId)}`
          : API_URL,
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(
          isEditing
            ? 'Failed to update book.'
            : 'Failed to create book.'
        );
      }

      setMessage(
        isEditing
          ? 'Book updated successfully!'
          : 'Book created successfully!'
      );

      setFormData(emptyForm);
      setEditingId(null);

      await fetchBooks();
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // Edit book
  const handleEdit = (book) => {
    const id = book.id ?? book._id;

    if (id === undefined || id === null) {
      setError('Book ID not found.');
      return;
    }

    setEditingId(id);

    setFormData({
      title: book.title ?? '',
      author: book.author ?? '',
      published_year: book.published_year ?? '',
      genre: book.genre ?? '',
    });

    setMessage('');
    setError('');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setMessage('');
    setError('');
  };

  // Delete book
  const handleDelete = async (book) => {
    const id = book.id ?? book._id;

    if (id === undefined || id === null) {
      setError('Book ID not found.');
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this book?'
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(id)}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete book.');
      }

      if (String(editingId) === String(id)) {
        setEditingId(null);
        setFormData(emptyForm);
      }

      setMessage('Book deleted successfully!');

      await fetchBooks();
    } catch (err) {
      setError(err.message || 'Unable to delete book.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Book Manager App</h1>
        <p>Manage your library books in one place</p>
      </header>

      <main>
        <section className="form-section">
          <h2>
            {editingId !== null ? 'Edit Book' : 'Add New Book'}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Book Title</label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter book title"
                value={formData.title}
                onChange={handleChange}
                required
                onInvalid={(event) =>
                  event.currentTarget.setCustomValidity(
                    'Please fill out this field.'
                  )
                }
                onInput={(event) =>
                  event.currentTarget.setCustomValidity('')
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author Name</label>
              <input
                id="author"
                type="text"
                name="author"
                placeholder="Enter author name"
                value={formData.author}
                onChange={handleChange}
                required
                onInvalid={(event) =>
                  event.currentTarget.setCustomValidity(
                    'Please fill out this field.'
                  )
                }
                onInput={(event) =>
                  event.currentTarget.setCustomValidity('')
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="published_year">Published Year</label>
              <input
                id="published_year"
                type="number"
                name="published_year"
                placeholder="Enter published year"
                min="1"
                step="1"
                value={formData.published_year}
                onChange={handleChange}
                required
                onInvalid={(event) => {
                  const input = event.currentTarget;

                  input.setCustomValidity(
                    input.validity.valueMissing
                      ? 'Please fill out this field.'
                      : 'Please enter a valid published year.'
                  );
                }}
                onInput={(event) =>
                  event.currentTarget.setCustomValidity('')
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input
                id="genre"
                type="text"
                name="genre"
                placeholder="Enter book genre"
                value={formData.genre}
                onChange={handleChange}
                required
                onInvalid={(event) =>
                  event.currentTarget.setCustomValidity(
                    'Please fill out this field.'
                  )
                }
                onInput={(event) =>
                  event.currentTarget.setCustomValidity('')
                }
              />
            </div>

            <div className="form-actions">
              <button type="submit" disabled={loading}>
                {loading
                  ? 'Please wait...'
                  : editingId !== null
                  ? 'Update Book'
                  : 'Add Book'}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {message && (
            <p className="success-message" role="status">
              {message}
            </p>
          )}

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}
        </section>

        <section className="list-section">
          <h2>All Books</h2>

          {books.length === 0 ? (
            <p className="empty-message">No books found</p>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Published Year</th>
                    <th>Genre</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {books.map((book, index) => (
                    <tr key={book.id ?? book._id ?? index}>
                      <td>{book.id ?? book._id ?? '—'}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.published_year}</td>
                      <td>{book.genre}</td>
                      <td className="action-buttons">
                        <button
                          type="button"
                          className="edit-button"
                          onClick={() => handleEdit(book)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() => handleDelete(book)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
