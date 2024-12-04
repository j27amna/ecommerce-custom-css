import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-divider" />

      <div className="footer-container">
        <div className="brand-section">
          <a className="brand">
            <span className="brand-title">Woodico.</span>
          </a>
          <p className="address">
            1234 Maple Street <br /> Anytown, Pakistan 123456
          </p>
        </div>

        <div className="links-container">
          <div className="Links-section">
            <h2 className="links-title">Links</h2>
            <nav className="links-list">
              <li className="link-item">
                <a className="link">Home</a>
              </li>
              <li className="link-item">
                <a className="link">About</a>
              </li>
              <li className="link-item">
                <a className="link">Shop</a>
              </li>
              <li className="link-item">
                <a className="link">Contact</a>
              </li>
            </nav>
          </div>

          <div className="Help-section">
            <h2 className="links-title">Help</h2>
            <nav className="links-list">
              <li className="link-item">
                <a className="link">Payment Options</a>
              </li>
              <li className="link-item">
                <a className="link">Returns</a>
              </li>
              <li className="link-item">
                <a className="link">Privacy Policies</a>
              </li>
            </nav>
          </div>

          <div className="newsletter-section">
            <h2 className="newsletter-title">Newsletter</h2>
            <nav className="newsletter-list">
              <li>
                <a className="newsletter-link">Enter Your Email Address.</a>
              </li>
              <li>
                <button className="subscribe-button">SUBSCRIBE</button>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-text">© 2024 Woodico — All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
