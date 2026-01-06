import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function getProducts() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function getCategories() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(res.data);
    } catch (err) {
      setError("Failed to load categories.");
    }
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar path="Products" />

      <div className="container my-5">
        {/* Categories Buttons */}
        <div className="mb-5 text-center">
          <button
            className={`btn m-2 ${
              selectedCategory === "all" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`btn m-2 ${
                selectedCategory === c ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Products</h1>
          <p className="text-muted">
            Discover our best collection curated just for you
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="d-flex justify-content-center my-5">
            <div
              className="spinner-border text-primary"
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            />
          </div>
        )}

        {/* Error */}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-center text-muted mt-5">
                No products available in this category.
              </p>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
