// ProductList.jsx
import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="spinner-center">
        <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} role="status"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return <p className="text-center mt-5">No products available.</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
