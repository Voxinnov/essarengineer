import React from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, Shield, Users, ArrowRight, Award, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const stats = [
        { label: 'Years of Experience', value: '25+', icon: <Activity /> },
        { label: 'Certifications', value: 'ISO Certified', icon: <Award /> },
        { label: 'Specialized Divisions', value: '02', icon: <Target /> },
        { label: 'Operations', value: 'PAN India', icon: <Users /> },
    ];

    return (
        <div className="modern-about">
            {/* High-Contrast Hero */}
            <section className="about-hero bg-dark-glow">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="subtitle-gradient">OUR DNA • ENGINEERING RECOVERY</span>
                        <h1 className="modern-title-l text-gradient">Architects of <br />Precision Care</h1>
                        <p className="p-xl center-p">Leading manufacturers of high-quality Custom and Ready-made pressure garments and Traffic Signaling Systems since 25+ years.</p>
                    </motion.div>
                </div>
            </section>

            {/* Narrative Section Modern */}
            <section className="about-narrative py-20">
                <div className="container grid grid-cols-2 align-center">
                    <div className="narrative-visual floating">
                        <div className="visual-block-glass glass">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080" alt="Tech Laboratory" />
                            <div className="block-overlay glass">ISO CERTIFIED MANUFACTURING</div>
                        </div>
                    </div>

                    <div className="narrative-text">
                        <span className="subtitle-gradient">ABOUT ESSAR ENGINEERS</span>
                        <h2>Beyond the <br />Standard</h2>
                        <p className="p-xl">Essar Engineers & Contractors is a dual-focus manufacturing company with over 25 years of experience in the engineering sector. We operate specialized divisions for medical pressure garments and traffic infrastructure, ensuring the highest standards of quality and innovation in both fields.</p>

                        <div className="narrative-points">
                            <div className="point glass">
                                <CheckCircle className="icon" />
                                <span>25+ years of engineering excellence and industrial experience.</span>
                            </div>
                            <div className="point glass">
                                <CheckCircle className="icon" />
                                <span>ISO Certified manufacturer adhering to global standards.</span>
                            </div>
                            <div className="point glass">
                                <CheckCircle className="icon" />
                                <span>Specialized divisions in Medical Recovery and Traffic Safety.</span>
                            </div>
                        </div>

                        <Link to="/contact" className="btn-modern primary-btn mt-4">
                            Connect with our Team <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divisions Section */}
            <section className="about-divisions py-20 bg-dark-glow">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="subtitle-gradient">OUR DIVISIONS</span>
                        <h2>Specialized Expertise</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                        <motion.div
                            className="division-card glass"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="division-icon-box">
                                <Activity size={40} />
                            </div>
                            <span className="subtitle-gradient">MEDICAL DIVISION</span>
                            <h3>Compression <br />& Recovery</h3>
                            <p>Leading manufacturer of high-quality Custom and Ready-made pressure garments for clinical rehabilitation and post-operative care.</p>
                            
                            <div className="division-list">
                                <div className="division-item">
                                    <CheckCircle size={20} className="icon" />
                                    <span>Breathable, High-grade Fabrics</span>
                                </div>
                                <div className="division-item">
                                    <CheckCircle size={20} className="icon" />
                                    <span>Uniform Pressure Distribution</span>
                                </div>
                                <div className="division-item">
                                    <CheckCircle size={20} className="icon" />
                                    <span>Custom-fit Precision Engineering</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="division-card glass"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="division-icon-box">
                                <Shield size={40} />
                            </div>
                            <span className="subtitle-gradient">TRAFFIC DIVISION</span>
                            <h3>Infrastructure <br />& Safety</h3>
                            <p>Specialized manufacturing and installation of comprehensive traffic signaling systems and intelligent urban transit solutions.</p>

                            <div className="division-list">
                                <div className="division-item">
                                    <CheckCircle size={20} className="icon" />
                                    <span>Advanced LED Signal Technology</span>
                                </div>
                                <div className="division-item">
                                    <CheckCircle size={20} className="icon" />
                                    <span>Industrial Grade Controller Hubs</span>
                                </div>
                                <div className="division-item">
                                    <CheckCircle size={20} className="icon" />
                                    <span>Municipal Standard Compliance</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section Modern */}
            <section className="about-stats py-20">
                <div className="container grid grid-cols-4 stagger-in">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="stat-card-modern glass-card"
                        >
                            <div className="stat-icon-aura">{s.icon}</div>
                            <span className="stat-val">{s.value}</span>
                            <span className="stat-label-modern">{s.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Locations Section */}
            <section className="about-excellence py-20 bg-dark-glow">
                <div className="container">
                    <div className="excellence-glass glass text-center">
                        <span className="subtitle-gradient">OUR LOCATIONS</span>
                        <h2>Connect with our Offices</h2>
                        <div className="location-grid-premium">
                            <motion.div 
                                className="location-box-premium glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="loc-tag">MEDICAL & HEADQUARTERS</span>
                                <h4>Kerala Branch <br />(HQ)</h4>
                                <div className="location-details">
                                    <div className="loc-detail-row">
                                        <MapPin className="icon" size={24} />
                                        <span className="loc-text">MLA Rd, near GREEN VALLEY ORCHID,<br />Puthiyakavu, Thrippunithura,<br />Ernakulam, Kerala 682307</span>
                                    </div>
                                    <div className="loc-detail-row">
                                        <Phone className="icon" size={24} />
                                        <span className="loc-text">+91 91882 12211</span>
                                    </div>
                                    <div className="loc-detail-row">
                                        <Mail className="icon" size={24} />
                                        <span className="loc-text">info@essarengineers.com</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="location-box-premium glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="loc-tag">TRAFFIC DIVISION</span>
                                <h4>Delhi Office <br />(Traffic)</h4>
                                <div className="location-details">
                                    <div className="loc-detail-row">
                                        <MapPin className="icon" size={24} />
                                        <span className="loc-text">C-148, Shakurpur Industrial Area,<br />New Delhi - 110034</span>
                                    </div>
                                    <div className="loc-detail-row">
                                        <Phone className="icon" size={24} />
                                        <span className="loc-text">+91 99307 72265</span>
                                    </div>
                                    <div className="loc-detail-row">
                                        <Mail className="icon" size={24} />
                                        <span className="loc-text">traffic@essarengineers.com</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
