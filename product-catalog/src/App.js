import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://worksheet-catalogue.mashupstack.com/products';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    quantity: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.get(API_URL);
      const data = response.data;

      setProducts(Array.isArray(data) ? data : data.products || []);
    } catch (err) {
      setError('Unable to load products. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Open Add Product form
  const handleAddClick = () => {
    setEditingId(null);

    setFormData({
      name: '',
      price: '',
      category: '',
      quantity: ''
    });

    setShowForm(true);
    setError('');
  };

  // Add a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      setError('');

      const newProduct = {
        name: formData.name.trim(),
        price: Number(formData.price),
        category: formData.category.trim(),
        quantity: Number(formData.quantity)
      };

      await axios.post(API_URL, newProduct);

      alert('Product added successfully!');

      setShowForm(false);
      setFormData({
        name: '',
        price: '',
        category: '',
        quantity: ''
      });

      await fetchProducts();
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to add product.'
      );
    }
  };

  // Get a single product and open Edit form
  const handleEditClick = async (id) => {
    try {
      setError('');

      const response = await axios.get(`${API_URL}/${id}`);
      const product = response.data.product || response.data;

      setEditingId(id);

      setFormData({
        name: product.name ?? '',
        price: String(product.price ?? ''),
        category: product.category ?? '',
        quantity: String(product.quantity ?? '')
      });

      setShowForm(true);
    } catch (err) {
      setError('Unable to load product details for editing.');
      console.error(err);
    }
  };

  // Update product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      setError('');

      const updatedProduct = {
        name: formData.name.trim(),
        price: Number(formData.price),
        category: formData.category.trim(),
        quantity: Number(formData.quantity)
      };

      await axios.put(
        `${API_URL}/${editingId}`,
        updatedProduct
      );

      alert('Product updated successfully!');

      setShowForm(false);
      setEditingId(null);

      await fetchProducts();
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to update product.'
      );
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this product?'
    );

    if (!confirmed) return;

    try {
      setError('');

      await axios.delete(`${API_URL}/${id}`);

      alert('Product deleted successfully!');

      await fetchProducts();
    } catch (err) {
      setError('Failed to delete product.');
      console.error(err);
    }
  };

  // Cancel form
  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setError('');
  };

  // Search by product name
  const filteredProducts = products.filter((product) =>
    (product.name || '')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Electronics Product Catalog</h1>
        <p>Manage your store products easily</p>
      </header>

      {error && <p className="error-message">{error}</p>}

      {!showForm ? (
        <main className="main-content">
          <div className="toolbar">
            <input
              type="text"
              className="search-input"
              placeholder="Search product by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button
              type="button"
              className="add-button"
              onClick={handleAddClick}
            >
              + Add Product
            </button>
          </div>

          <h2>Product List</h2>

          {loading ? (
            <p className="status-message">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="status-message">No products found</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Available Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={product.id ?? product._id ?? index}>
                      <td>{product.id ?? product._id ?? index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        ₹{Number(product.price).toFixed(2)}
                      </td>
                      <td>{product.category}</td>
                      <td>{product.quantity}</td>
                      <td className="action-buttons">
                        <button
                          type="button"
                          className="edit-button"
                          onClick={() =>
                            handleEditClick(
                              product.id ?? product._id
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-button"
                          onClick={() =>
                            handleDeleteProduct(
                              product.id ?? product._id
                            )
                          }
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
        </main>
      ) : (
        <main className="form-container">
          <h2>
            {editingId !== null ? 'Edit Product' : 'Add New Product'}
          </h2>

          <form
            onSubmit={
              editingId !== null
                ? handleUpdateProduct
                : handleAddProduct
            }
          >
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />

            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="Enter category"
              value={formData.category}
              onChange={handleChange}
              required
            />

            <label htmlFor="quantity">Available Quantity</label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="0"
              step="1"
              required
            />

            <div className="form-buttons">
              <button type="submit" className="save-button">
                {editingId !== null ? 'Update Product' : 'Add Product'}
              </button>

              <button
                type="button"
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}

export default App;
