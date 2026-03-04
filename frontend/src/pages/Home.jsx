import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Layers, Zap, Info, ArrowUpRight, Target, Activity, Award, Users, MapPin, Send, MessageSquare, Clock, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import { products } from '../data/products';
import './Home.css';
import './About.css';
import './Products.css';
import './Contact.css';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        { title: 'Regenerative Dermal Matrix', desc: 'Cutting-edge Dermacell technologies for complex wound recovery.', icon: <Layers size={32} /> },
        { title: 'Velox Oxygen Therapy', desc: 'Precision temperature-controlled oxygen support systems.', icon: <Zap size={32} /> },
        { title: 'High-Precision Prosthesis', desc: 'Custom artificial limbs engineered with carbon-fiber innovation.', icon: <Info size={32} /> },
    ];

    const categories = ['All', ...new Set(products.map(p => p.category))];
    const filteredProducts = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const stats = [
        { label: 'Years of Experience', value: '25+', icon: <Activity /> },
        { label: 'Certifications', value: 'ISO Certified', icon: <Award /> },
        { label: 'Specialized Divisions', value: '02', icon: <Target /> },
        { label: 'Operations', value: 'PAN India', icon: <Users /> },
    ];

    return (
        <div className="modern-home" id="home">
            <div className="scroll-progress" style={{ width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }} />

            {/* Premium Revamped Hero Section */}
            <section className="hero-section">
                <div className="container hero-grid">
                    <div className="hero-content-right">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="hero-image-container-new"
                        >
                            <HeroCarousel />

                            <div className="floating-badge top-left">
                                <Shield size={18} />
                                <span>CERTIFIED STANDARDS</span>
                            </div>

                            <div className="floating-badge bottom-right">
                                <Users size={18} />
                                <span>Trusted by 100+ Hospitals</span>
                            </div>

                            <div className="rating-badge">
                                <Activity size={16} className="text-primary" />
                                <span>Clinical Grade</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="hero-content-left">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="badge-new">
                                <Award size={16} /> EST. 1999 • MEDICAL ENGINEERING
                            </span>
                            <h1 className="hero-title-new">
                                Mastering The <br />
                                Future of <span>Wound Care</span>
                            </h1>
                            <p className="hero-subtitle-new">
                                Essar Engineers bridges the gap between precision engineering and advanced
                                healthcare. Delivering medical solutions that accelerate recovery and restore life.
                            </p>

                            <div className="hero-stats-new">
                                <div className="stat-item-new">
                                    <h3>25+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div className="stat-item-new">
                                    <h3>ISO</h3>
                                    <p>NABL ACCREDITED</p>
                                </div>
                                <div className="stat-item-new">
                                    <h3>9+</h3>
                                    <p>Verticals</p>
                                </div>
                            </div>

                            <div className="hero-actions-new">
                                <Link to="/products" className="btn-modern primary-btn btn-primary-new">
                                    Explore Catalog <ArrowRight size={20} />
                                </Link>
                                <Link to="/contact" className="btn-modern btn-secondary-new">
                                    <MessageSquare size={20} /> Technical Inquiry
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modern Grid Section */}
            <section className="modern-features py-20">
                <div className="container">
                    <div className="grid grid-cols-3 stagger-in">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="feature-glass-card glass-card"
                            >
                                <div className="feature-icon-box">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                                <Link to="/products" className="feature-link">View Tech Details <ArrowRight size={16} /></Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Segment */}
            <section id="expertise" className="expertise-segment py-20 bg-dark-glow">
                <div className="container grid grid-cols-2 align-center">
                    <div className="expertise-content">
                        <span className="subtitle-gradient">CORE CAPABILITIES</span>
                        <h2>Medical-Grade precision engineering</h2>
                        <p className="p-xl">We don't just supply medical products; we engineer recovery pathways. From custom-fit compression garments to advanced dermal regeneration, our solutions are designed to outpace traditional healing standards.</p>

                        <div className="expertise-grid">
                            <div className="exp-item">
                                <Shield className="exp-icon" />
                                <div>
                                    <h4>Clinical Grade</h4>
                                    <p>Every product meets rigorous clinical standards and patient-safety protocols.</p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <Layers className="exp-icon" />
                                <div>
                                    <h4>Material Science</h4>
                                    <p>Utilizing high-performance polymers and carbon fibers for maximum patient comfort.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/contact" className="btn-modern primary-btn mt-4">
                            Request Technical Inquiry <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="expertise-visual floating">
                        <div className="visual-orb glass">
                            <img src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2070" alt="Tech" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products-main py-20 section-fade">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="subtitle-gradient">PRODUCT CATALOG</span>
                        <h2 className="modern-title-l">Precision Engineering Catalog</h2>
                    </div>

                    <div className="products-controls sticky mt-12">
                        <div className="container flex-between align-center">
                            <div className="search-modern glass">
                                <Search className="icon" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search precision products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="filter-modern">
                                <div className="filter-scroll">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`filter-btn-modern ${activeCategory === cat ? 'active' : ''}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modern-grid mt-12">
                        {filteredProducts.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="modern-product-card glass-card"
                            >
                                <div className="product-visual">
                                    <img src={p.image} alt={p.title} />
                                    <div className="visual-overlay">
                                        <div className="brand-badge glass">{p.brand}</div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <span className="category-meta">{p.category}</span>
                                    <h3>{p.title}</h3>
                                    <Link to={`/products/${p.slug}`} className="btn-modern primary-btn w-full mt-4">
                                        View Specs <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-narrative py-20 bg-dark-glow section-fade">
                <div className="container grid grid-cols-2 align-center">
                    <div className="narrative-visual floating">
                        <div className="visual-block-glass glass">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080" alt="Tech Laboratory" />
                            <div className="block-overlay glass">ISO CERTIFIED MANUFACTURING</div>
                        </div>
                    </div>
                    <div className="narrative-text">
                        <span className="subtitle-gradient">ABOUT ESSAR ENGINEERS</span>
                        <h2>Beyond the Standard</h2>
                        <p className="p-xl">Essar Engineers & Contractors is a dual-focus manufacturing company with over 25 years of experience in the engineering sector. We operate specialized divisions for medical pressure garments and traffic infrastructure, ensuring the highest standards of quality and innovation.</p>
                        <div className="about-stats-grid grid grid-cols-2 gap-4 mt-8">
                            {stats.map((s, i) => (
                                <div key={i} className="stat-pill glass">
                                    <span className="val">{s.value}</span>
                                    <span className="lbl">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-main py-20 section-fade">
                <div className="container grid grid-cols-2 gap-8">
                    <div className="contact-info-hub">
                        <div className="text-left mb-12">
                            <span className="subtitle-gradient">CONNECT HUB</span>
                            <h2 className="modern-title-l">Technical Support</h2>
                        </div>
                        <div className="whatsapp-box-modern glass">
                            <div className="wp-info">
                                <MessageSquare size={32} className="wp-icon" />
                                <div>
                                    <h4>Technical WhatsApp Relay</h4>
                                    <p>Instant support for product inquiries and clinical guidance.</p>
                                </div>
                            </div>
                            <a href="https://wa.me/919930772265" target="_blank" className="btn-modern primary-btn wp-btn">Initiate Relay <ArrowRight size={20} /></a>
                        </div>
                        <div className="location-boxes mt-8 grid gap-4">
                            <div className="location-box glass p-6">
                                <h4 className="flex items-center gap-2 mb-2"><MapPin size={18} className="text-primary" /> Kerala Branch</h4>
                                <p className="text-sm opacity-70">Thripunithura, Ernakulam, Kerala - 682301</p>
                            </div>
                            <div className="location-box glass p-6">
                                <h4 className="flex items-center gap-2 mb-2"><MapPin size={18} className="text-primary" /> Delhi Office</h4>
                                <p className="text-sm opacity-70">Shakurpur Industrial Area, New Delhi - 110034</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-hub">
                        <div className="contact-form-glass glass">
                            <form className="modern-form">
                                <div className="form-group-modern glass">
                                    <label>Identity</label>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-group-modern glass">
                                    <label>Email Protocol</label>
                                    <input type="email" placeholder="example@hospital.com" />
                                </div>
                                <div className="form-group-modern glass full">
                                    <label>Payload Message</label>
                                    <textarea rows="4" placeholder="How can we assist?"></textarea>
                                </div>
                                <button type="submit" className="btn-modern primary-btn btn-glow w-full">Dispatch Signal <Send size={20} /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Modern */}
            <section className="final-cta py-20 pb-40">
                <div className="container">
                    <div className="cta-glass-box glass">
                        <h2>Ready to integrate advanced medical solutions?</h2>
                        <div className="cta-btns">
                            <a href="#contact" className="btn-modern btn-glow primary-btn">Send Inquiry</a>
                            <a href="https://wa.me/919930772265" className="btn-modern glass">Chat with Specialist</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
