import React from "react";
import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer_content">
      <span>TERMS AND CONDITIONS</span>
      <span>© Stella Lee {new Date().getFullYear()}</span>
    </div>
  </div>
);

export default Footer;
