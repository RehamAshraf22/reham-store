import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import mainImage from "../assets/store.webp";
import "./Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Reham Store – Quality Meets Style</title>
        <meta
          name="description"
          content="Discover premium electronics, jewelry, and fashion. Shop high-quality products with fast delivery."
        />
      </Helmet>

      <Navbar path="Home" />

      <header className="hero-section">
        <img src={mainImage} alt="Reham Store" className="hero-img" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Quality Meets Style</h1>
            <p>
              Discover our curated collection of premium electronics,
              jewelry, and fashion — designed for modern lifestyle.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn-shop">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
}

export default Home;
