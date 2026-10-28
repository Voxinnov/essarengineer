import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {


    return (
        <div className="modern-contact">
            <section className="contact-hero bg-dark-glow">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <span className="subtitle-gradient">CONNECT HUB • TECHNICAL SUPPORT</span>
                        <h1 className="modern-title-l text-gradient">System Inquiry <br />Support</h1>
                        <p className="p-xl center-p">Request technical dossiers, institutional samples, or clinical support for your medical facility.</p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-main py-20">
                <div className="container grid grid-cols-2 gap-8">
                    <div className="contact-info-hub">
                        <motion.div 
                            className="hq-card-featured glass"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="hq-badge">PRIMARY HUB</div>
                            <div className="hq-content">
                                <MapPin className="hq-icon" size={40} />
                                <div className="hq-text">
                                    <span className="info-label">HEADQUARTERS</span>
                                    <h3>Puthiyakavu, Thrippunithura</h3>
                                    <p>MLA Rd, near GREEN VALLEY ORCHID, <br />Ernakulam, Kerala 682307</p>
                                </div>
                            </div>
                            <div className="hq-footer">
                                <Clock size={16} /> <span>Operation Hours: 09:00 AM - 06:00 PM (Mon - Sat)</span>
                            </div>
                        </motion.div>

                        <div className="contact-grid-modern">
                            <div className="contact-pill-card glass">
                                <div className="pill-icon"><Phone size={24} /></div>
                                <div className="pill-text">
                                    <span className="info-label">SYSTEM SUPPORT</span>
                                    <span className="pill-val">+91 99307 72265</span>
                                </div>
                            </div>
                            <div className="contact-pill-card glass">
                                <div className="pill-icon"><Mail size={24} /></div>
                                <div className="pill-text">
                                    <span className="info-label">COMM CHANNEL</span>
                                    <span className="pill-val">info@essarengineers.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="whatsapp-box-modern glass mt-4">
                            <div className="wp-info">
                                <MessageSquare size={32} className="wp-icon" />
                                <div>
                                    <h4>Technical WhatsApp Relay</h4>
                                    <p>Instant support for product inquiries and clinical guidance.</p>
                                </div>
                            </div>
                            <a href="https://wa.me/919930772265" target="_blank" className="btn-modern primary-btn wp-btn">Initiate Relay <ArrowRight size={20} /></a>
                        </div>
                    </div>

                    <div className="form-hub">
                        <div className="contact-form-glass glass">
                            <div className="form-header">
                                <h3>DISPATCH TECHNICAL REQUEST</h3>
                                <p>All communication is processed through our clinical engineering division.</p>
                            </div>

                            <form className="modern-form">
                                <div className="form-group-modern glass">
                                    <label>Identity</label>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-row flex gap-4">
                                    <div className="form-group-modern glass w-1/2">
                                        <label>Email Protocol</label>
                                        <input type="email" placeholder="example@hospital.com" />
                                    </div>
                                    <div className="form-group-modern glass w-1/2">
                                        <label>Tel Contact</label>
                                        <input type="tel" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                                <div className="form-group-modern glass">
                                    <label>Institute / Hospital</label>
                                    <input type="text" placeholder="Medical Institution Name" />
                                </div>
                                <div className="form-group-modern glass full">
                                    <label>Payload Message</label>
                                    <textarea rows="5" placeholder="System specific inquiries or clinical support requirements..."></textarea>
                                </div>

                                <button type="submit" className="btn-modern primary-btn btn-glow w-full mt-4">
                                    Dispatch Signal <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern High-Contrast Map */}
            <section className="map-section-modern pb-20">
                <div className="container">
                    <div className="map-glass-box glass">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.177695172121!2d76.3585038!3d9.919154299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08739dc2638fa9%3A0x40ea7abba0d90167!2sESSAR%20ENGINEERS!5e0!3m2!1sen!2sin!4v1773642288178!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.9)', borderRadius: '2rem' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="map-overlay-badge glass">PRECISION HUB • ERNAKULAM</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
