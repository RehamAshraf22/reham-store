import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar path="Contact" />

      <section className="contact-page">
        <div className="container">

          <span className="contact-badge">Get In Touch</span>
          <h1>We’re Here to Help</h1>
          <p className="contact-desc">
            Questions, feedback, or support?  
            Send us a message and we’ll respond within 24 hours.
          </p>

          <div className="contact-grid">

            {/* Info */}
            <div className="contact-info">
              <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <span>support@rehamstore.com</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <span>+20 123 456 7899</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Nasr City, Cairo, Egypt</span>
              </div>
            </div>

            {/* Form */}
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>

              <button type="submit">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>

              <span className="form-note">
                We respect your privacy. No spam — ever.
              </span>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
