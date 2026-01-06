import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ path, cart }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-special-style navbar-dark sticky-top ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        
        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center gap-2 text-decoration-none">
          <div className="icon"></div>
          <span className="navbar-brand mb-0">Reham Store</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search + Cart */}
          {path === "Products" && (
            <div className="nav-actions ms-lg-4 mt-3 mt-lg-0">
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
              />
              <Link to="/cart" className="cart-btn">
                <i className="fa-solid fa-cart-shopping"></i>
                {cart > 0 && <span className="cart-badge">{cart}</span>}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
