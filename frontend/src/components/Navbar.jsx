import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';
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
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Case Study', path: '/case-study' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`nav-wrapper ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-box">
                <Link to="/" className="nav-logo-link" onClick={closeMenu}>
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

                    <Link to="/contact" className="nav-book-btn" onClick={closeMenu}>
                        Book Now
                    </Link>

                    {/* Hamburger Toggle */}
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
                onClick={closeMenu}
            ></div>

            {/* Premium Sidebar Menu */}
            <div className={`nav-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-content container">
                    <div className="nav-links-wrapper">
                        {navLinks.map((link, i) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                end={link.path === '/'}
                                className={({ isActive }) =>
                                    `sidebar-item${isActive ? ' active' : ''}`
                                }
                                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                                onClick={closeMenu}
                            >
                                <span className="item-num">0{i + 1}</span>
                                <span className="item-text">{link.name}</span>
                            </NavLink>
                        ))}
                    </div>

                    <div className="nav-footer-info">
                        <div className="nav-footer-col">
                            <h4>Enquiries</h4>
                            <p>Email to: info@essarengineers.com</p>
                            <p>Dial to: +91 99307 72265</p>
                        </div>
                        <div className="nav-footer-col">
                            <h4>Headquarters</h4>
                            <p>Puthiyakavu, Thrippunithura</p>
                            <p>Ernakulam, Kerala 682307</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
