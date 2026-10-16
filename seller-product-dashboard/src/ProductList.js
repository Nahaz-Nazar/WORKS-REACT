
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { fetchProducts } from './features/products/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (token) {
      dispatch(fetchProducts());
    }
  }, [dispatch, token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (status === 'loading' || status === 'idle') {
    return <p className="status-message">Loading products...</p>;
  }

  if (status === 'failed') {
    return (
      <div className="status-message">
        <p className="error">{String(error)}</p>
        <button onClick={() => dispatch(fetchProducts())}>Retry</button>
      </div>
    );
  }

  return (
    <main className="page-container">
      <h2>Product List</h2>

      {items.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {items.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <Link className="view-button" to={`/product/${product.id}`}>
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default ProductList;
