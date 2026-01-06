import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'Product added to cart',
      confirmButtonColor: '#6366f1',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  if (loading) {
    return (
      <div className="spinner-center">
        <div
          className="spinner-border text-primary"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <>
      <Navbar path="Products" />
      <div className="container my-5 product-details">
        <button className="btn-back" onClick={() => navigate("/products")}>
          ← Back to Products
        </button>

        <div className="row align-items-center mt-4">
          <div className="col-md-5 text-center">
            <div className="product-img-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-detail-img"
              />
            </div>
          </div>
          <div className="col-md-7">
            <p className="product-category">{product.category}</p>
            <h2 className="product-detail-title">{product.title}</h2>
            <p className="product-reviews">
              {product.rating && product.rating.rate
                ? `⭐ ${product.rating.rate} (${product.rating.count} Reviews)`
                : "No Reviews"}
            </p>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn-add-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
