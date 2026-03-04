import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="modern-footer bg-dark-glow">
            <div className="container footer-top">
                <div className="footer-brand">
                    <Logo className="footer-logo" />
                    <p className="footer-mission">
                        Bridging the gap between precision engineering and advanced healthcare for over 25 years. Delivering medical recovery and traffic infrastructure solutions pan-India.
                    </p>
                    <div className="social-pills">
                        <a href="#" className="social-pill glass"><Facebook size={18} /></a>
                        <a href="#" className="social-pill glass"><Twitter size={18} /></a>
                        <a href="#" className="social-pill glass"><Instagram size={18} /></a>
                        <a href="#" className="social-pill glass"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className="footer-menu">
                    <div className="footer-column">
                        <h4>SOLUTIONS</h4>
                        <ul>
                            <li><Link to="/products">Medical Garments</Link></li>
                            <li><Link to="/products">Traffic Systems</Link></li>
                            <li><Link to="/products">Recovery Matrix</Link></li>
                            <li><Link to="/products">Oxygen Support</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><Link to="/about">Our Expertise</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Hub</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>LOCATIONS</h4>
                        <p className="p-sm">Ernakulam, Kerala (Medical)</p>
                        <p className="p-sm">Shakurpur, New Delhi (Traffic)</p>
                        <a href="mailto:info@essarengineers.co.in" className="email-link">info@essarengineers.co.in</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container align-center flex-between">
                <p className="p-xs">© 2026 ESSAR ENGINEERS • ENGINEERING EXCELLENCE SINCE 25+ YEARS</p>
                <div className="footer-credits">
                    <span>Precision Engineering & Contractors</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
