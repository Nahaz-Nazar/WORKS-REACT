
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';

function ViewProduct() {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { items, status } = useSelector((state) => state.products);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (status !== 'succeeded') {
    return (
      <main className="page-container">
        <p>Product list is not available in the Redux store.</p>
        <Link to="/products">Go to Product List</Link>
      </main>
    );
  }

  const product = items.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <main className="page-container">
        <h2>Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="form-container">
      <h2>Product Details</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <Link to="/products">Back to Products</Link>
    </main>
  );
}

export default ViewProduct;
