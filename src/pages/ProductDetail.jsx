import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Simulasi data (ideally fetched from API based on ID)
  return (
    <div className="page product-detail">
      <h1>Product Detail</h1>
      <div className="product-info">
        <p><strong>Product ID:</strong> {id}</p>
        <p>Ini adalah halaman detail untuk produk dengan ID {id}.</p>
        <p>Di aplikasi nyata, data detail produk akan diambil dari API di sini.</p>
      </div>
      <div className="product-actions">
         <Link to="/products" className="btn btn-secondary">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;