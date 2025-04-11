
import React from "react";
import "./Footer.css";
import { FaLinkedin,  FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = (): React.ReactNode => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Copyright © 2024 - All rights reserved by Sharadamani K N</p>
        </div>

       

        <div className="footer-right">
  <a href="https://www.linkedin.com/in/sharadamani-k-n-44663124b/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/sharadamanikn" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.instagram.com/sharda_mani_?igsh=MXRvbTVmZzR4dGdxMQ==" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;

