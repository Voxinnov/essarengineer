import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Zap, Target, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="modern-products-page">
            {/* Immersive Header */}
            <section className="products-hero bg-dark-glow">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <span className="subtitle-gradient">PRODUCT CATALOG</span>
                        <h1 className="modern-title text-gradient">Advanced Medical <br />Solutions</h1>
                        <p className="p-xl center-p">Explore our precision-engineered catalog of wound care and patient recovery technologies.</p>
                    </motion.div>
                </div>
            </section>

            {/* Control Bar Modern */}
            <div className="products-controls sticky">
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

            {/* Product Grid Modern */}
            <section className="products-main py-20">
                <div className="container">
                    <div className="modern-grid">
                        <AnimatePresence>
                            {filteredProducts.map((p, i) => (
                                <motion.div
                                    layout
                                    key={p.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
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
                                        <p>{p.shortDesc}</p>

                                        <div className="product-specs-mini">
                                            <div className="spec-pill glass"><Target size={14} /> High Precision</div>
                                            <div className="spec-pill glass"><Layers size={14} /> Certified</div>
                                        </div>

                                        <Link to={`/products/${p.slug}`} className="btn-modern primary-btn w-full">
                                            System Details <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="empty-state glass">
                            <Zap size={48} className="icon-pulse" />
                            <h3>No results found</h3>
                            <p>Try refining your search or clearing the category filters.</p>
                            <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="btn-modern glass">Clear Search</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
