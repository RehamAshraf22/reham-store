import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card shadow-sm">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>

      <div className="product-info">
        <h4 className="product-title">{product.title.slice(0, 50)}</h4>
        <span className="product-price">${product.price}</span>

        <Link to={`/products/${product.id}`} className="btn-view">
          View Details
        </Link>
      </div>
    </div>
  );
}
