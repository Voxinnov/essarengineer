import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Stethoscope } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
    const doctors = testimonials.filter(t => t.type === 'Doctor');
    const patients = testimonials.filter(t => t.type === 'Patient');

    return (
        <div className="modern-testimonials">
            {/* Hero Section */}
            <section className="testimonials-hero bg-dark-glow">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-header"
                    >
                        <span className="subtitle-gradient">TRUSTED VOICES</span>
                        <h1 className="modern-title-l">Healing Journeys & <br />Expert Endorsements</h1>
                        <p className="p-xl center-p">Listen to the professionals who trust us and the patients who have found comfort through our precision solutions.</p>
                    </motion.div>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="testimonial-grid-section py-20">
                <div className="container">
                    <div className="section-header text-center mb-16">
                        <div className="icon-aura-header">
                            <Stethoscope size={32} />
                        </div>
                        <h2 className="modern-title-m">Professional Insights</h2>
                        <p className="p-subtitle">What leading healthcare providers say about Essar Engineers</p>
                    </div>

                    <div className="testimonials-grid">
                        {doctors.map((t, i) => (
                            <motion.div 
                                key={t.id}
                                className="testimonial-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-quote-icon">
                                    <Quote size={40} className="quote-svg" />
                                </div>
                                <div className="rating-row">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.content}"</p>
                                <div className="testi-author">
                                    <div className="author-image">
                                        <img src={t.image} alt={t.name} />
                                    </div>
                                    <div className="author-info">
                                        <h4>{t.name}</h4>
                                        <span className="author-designation">{t.designation}</span>
                                        <span className="author-org">{t.hospital}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patients Section */}
            <section className="testimonial-grid-section py-20 bg-dark-glow">
                <div className="container">
                    <div className="section-header text-center mb-16">
                        <div className="icon-aura-header blue">
                            <User size={32} />
                        </div>
                        <h2 className="modern-title-m">Patient Recovery</h2>
                        <p className="p-subtitle">Personal stories of comfort and rehabilitation</p>
                    </div>

                    <div className="testimonials-grid">
                        {patients.map((t, i) => (
                            <motion.div 
                                key={t.id}
                                className="testimonial-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-quote-icon blue">
                                    <Quote size={40} className="quote-svg" />
                                </div>
                                <div className="rating-row">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#0ea5e9" color="#0ea5e9" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.content}"</p>
                                <div className="testi-author">
                                    <div className="author-image">
                                        <img src={t.image} alt={t.name} />
                                    </div>
                                    <div className="author-info">
                                        <h4>{t.name}</h4>
                                        <span className="author-designation">{t.designation}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="final-cta py-20">
                <div className="container">
                    <div className="cta-glass-box glass">
                        <h2>Experience Precision Care</h2>
                        <p>Join thousands of satisfied medical professionals and patients who trust Essar Engineers.</p>
                        <div className="cta-btns">
                            <a href="/products" className="btn-modern primary-btn btn-glow">View Catalog</a>
                            <a href="/contact" className="btn-modern glass">Consult Today</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
