import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Download, Send, Phone, CheckCircle, Info, Activity, Target } from 'lucide-react';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = products.find(p => p.slug === slug);
        setProduct(found);
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) return null;

    return (
        <div className="modern-detail">
            {/* High-Performance Header */}
            <section className="detail-hero bg-dark-glow">
                <div className="container flex-between align-center">
                    <div className="detail-visual floating">
                        <div className="main-orb glass">
                            <img src={product.image} alt={product.title} />
                            <div className="visual-badge glass">{product.brand}</div>
                        </div>
                    </div>

                    <div className="detail-header-content">
                        <Link to="/products" className="back-link-modern glass">
                            <ChevronLeft size={16} /> Technical Catalog
                        </Link>
                        <div className="product-meta-modern">
                            <span className="subtitle-gradient">{product.category}</span>
                            <h1 className="modern-title-l">{product.title}</h1>
                            <p className="p-xl">{product.shortDesc}</p>
                        </div>

                        <div className="detail-actions-header">
                            <button className="btn-modern primary-btn btn-glow">
                                Download Tech Sheet <Download size={20} />
                            </button>
                            <a href="tel:+91XXXXXXXXXX" className="btn-modern glass">
                                Consult Specialist <Phone size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs Modern */}
            <section className="technical-specs py-20">
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="tech-item-card glass-card">
                            <h3><Info className="icon" /> Key Features</h3>
                            <ul className="tech-list">
                                {product.features.map((f, i) => (
                                    <li key={i}><CheckCircle size={18} className="icon-red" /> {f}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="tech-item-card glass-card">
                            <h3><Target className="icon" /> Field Applications</h3>
                            <ul className="tech-list">
                                {product.applications.map((a, i) => (
                                    <li key={i}><CheckCircle size={18} className="icon-blue" /> {a}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="spec-table-modern glass-card mt-4">
                        <div className="spec-box">
                            <span className="spec-key">System Identifier</span>
                            <span className="spec-val">{product.slug.toUpperCase()}</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-key">Engineering Protocol</span>
                            <span className="spec-val">{product.specifications}</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-key">Operational Brand</span>
                            <span className="spec-val">{product.brand}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Modern Glass Form */}
            <section className="inquiry-modern py-20 bg-dark-glow">
                <div className="container">
                    <div className="inquiry-glass-card glass">
                        <div className="inquiry-info text-center">
                            <h2 className="modern-title">Technical Inquiry</h2>
                            <p className="p-xl center-p">Please provide your institutional details for priority support and product documentation.</p>
                        </div>

                        <form className="modern-form">
                            <div className="form-grid">
                                <div className="form-group-modern glass">
                                    <label>Full Identity</label>
                                    <input type="text" placeholder="Dr. Sarah Johnson" />
                                </div>
                                <div className="form-group-modern glass">
                                    <label>Medical Organization</label>
                                    <input type="text" placeholder="Department of Neurosurgery" />
                                </div>
                                <div className="form-group-modern glass">
                                    <label>Communication Email</label>
                                    <input type="email" placeholder="sarah@hospital.com" />
                                </div>
                                <div className="form-group-modern glass">
                                    <label>Contact Protocol</label>
                                    <input type="tel" placeholder="+91 00000 00000" />
                                </div>
                                <div className="form-group-modern glass full">
                                    <label>System Requirements</label>
                                    <textarea rows="4" placeholder="Requesting technical specifications for clinical integration..."></textarea>
                                </div>
                            </div>

                            <div className="form-footer-modern align-center flex-between">
                                <div className="prefill-modern">
                                    <span>SYSTEM SELECTED:</span> <strong>{product.title}</strong>
                                </div>
                                <button type="submit" className="btn-modern primary-btn btn-glow">
                                    Dispatch Inquiry <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
