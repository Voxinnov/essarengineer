import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Products', path: '#products' },
        { name: 'Expertise', path: '#expertise' },
        { name: 'About', path: '#about' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className={`nav-wrapper ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-box">
                <Link to="/" className="nav-logo-link" onClick={() => setIsOpen(false)}>
                    <Logo className="nav-logo" />
                </Link>

                <div className="nav-actions">
                    <div className="nav-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Facebook size={18} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Twitter size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Instagram size={18} />
                        </a>
                    </div>

                    <a href="#contact" className="nav-book-btn">
                        Book Now
                    </a>

                    {/* Hamburger Toggle - Always Visible Now */}
                    <button
                        className={`nav-toggle-modern ${isOpen ? 'open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
            </div>

            {/* Sidebar Dimmer */}
            <div
                className={`nav-overlay ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Premium Sidebar Menu */}
            <div className={`nav-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-content container">
                    <div className="nav-links-wrapper">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="sidebar-item"
                                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                                onClick={(e) => {
                                    setIsOpen(false);
                                    const id = link.path.substring(1);
                                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="item-num">0{i + 1}</span>
                                <span className="item-text">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="nav-footer-info">
                        <div className="nav-footer-col">
                            <h4>Enquiries</h4>
                            <p>info@essarengineers.com</p>
                            <p>+91 99307 72265</p>
                        </div>
                        <div className="nav-footer-col">
                            <h4>Headquarters</h4>
                            <p>Nerul, Navi Mumbai</p>
                            <p>Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
