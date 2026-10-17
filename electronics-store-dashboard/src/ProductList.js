
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './features/products/productSlice';

const API_URL = 'https://worksheet-product.mashupstack.com';

function ProductList() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const products = useSelector((state) => state.products.items);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get(`${API_URL}/product`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = response.data?.data ?? response.data;
        const items = Array.isArray(result)
          ? result
          : result?.products;

        if (!Array.isArray(items)) {
          throw new Error('Unexpected product API response.');
        }

        dispatch(setProducts(items));
      } catch (err) {
        setError(
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          'Failed to load products.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token, dispatch]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <main className="page-container">Loading products...</main>;
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <h1>Product List</h1>
          <p>Electronics Store Inventory</p>
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </div>

      {error && <p className="error">{error}</p>}

      {!error && products.length === 0 && (
        <div className="empty-state">No products found.</div>
      )}

      {!error && products.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td className="product-name">{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    {product.price != null
                      ? `₹${product.price}`
                      : '—'}
                  </td>
                  <td>{product.quantity ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default ProductList;
