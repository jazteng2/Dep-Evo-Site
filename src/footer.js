import React from 'react';
import './footer.css'; // Import your footer CSS
import logo from './images/razor.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    
    <footer className="footer-background">
      
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p style = {{maxWidth: '600px', wordWrap: 'break-word', lineHeight: '1.6', margin: '15px' }}>SwinDevOps provides Development & Operations solutions, focusing on 
          streamlining the software delivery process. Our team leverages industry 
          best practices and innovative technologies to facilitate seamless 
          collaboration between development and operations teams, ensuring 
          faster delivery of high-quality software. With over 25 years of 
          combined experience in software engineering, we are dedicated to 
          enhancing productivity, improving system reliability, and 
          fostering continuous improvement within organizations.
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2> {/* Add the header for Quick Links */}
          <ul>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <ul>
          <li><a href="mailto:@student.swin.edu.au">Placeholder Email</a></li>
          <li><a href="mailto:@student.swin.edu.au">Placeholder Email</a></li>
          <li><a href="mailto:@student.swin.edu.au">Placeholder Email</a></li>
          <li><a href="mailto:@student.swin.edu.au">Nathan Trung</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} SwinDevOps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
