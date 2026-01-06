import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar path="About" />

      <section className="about-page">
        <div className="container">
          
          <span className="about-badge">Who We Are</span>
          
          <h1>Shopping Made Simple & Stylish</h1>

          <p>
            At <strong>Reham Store</strong>, we believe that great style and quality
            shouldn’t come with a high price tag.
            That’s why we carefully select products that combine design,
            durability, and fair pricing.
          </p>

          <p>
            From electronics to fashion and accessories, our goal is to give you
            a smooth, enjoyable shopping experience backed by reliable support
            and fast delivery.
          </p>

          <div className="about-actions">
            <a href="/products" className="btn-primary">
              Explore Products
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
