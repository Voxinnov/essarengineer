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
                            className="division-card glass-card p-12"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge-glow mb-4">MEDICAL DIVISION</span>
                            <h3>Compression & Recovery</h3>
                            <p className="mt-4 text-gray-600">Leading manufacturer of high-quality Custom and Ready-made pressure garments. We specialize in post-operative recovery solutions including Liposuction garments, Silicon nostril retainers, and abdominal binders.</p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Breathable, High-grade Fabrics</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Uniform Pressure Distribution</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Custom-fit Specialists</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="division-card glass-card p-12"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge-glow mb-4">TRAFFIC DIVISION</span>
                            <h3>Infrastructure Safety</h3>
                            <p className="mt-4 text-gray-600">Specialized manufacturing and installation of comprehensive traffic signaling systems. From LED signals to complete controller boxes, we provide end-to-end traffic management solutions.</p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> LED Signal Technology</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Infrastructure Design & Install</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Municipal Standard Compliance</li>
                            </ul>
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
                        <div className="grid grid-cols-2 gap-8 mt-12 text-left">
                            <div className="location-box glass p-8">
                                <h4 className="flex items-center gap-2 mb-4"><MapPin size={20} className="text-primary" /> Kerala Branch (Medical)</h4>
                                <p className="text-sm opacity-80">Padmakumaran Building, Ground Floor,<br />Market Road, Thekkumbhagom,<br />Thripunithura, Ernakulam, Kerala - 682301</p>
                            </div>
                            <div className="location-box glass p-8">
                                <h4 className="flex items-center gap-2 mb-4"><MapPin size={20} className="text-primary" /> Delhi Office (Traffic)</h4>
                                <p className="text-sm opacity-80">Address: C-148, <br />Shakurpur Industrial Area, <br />New Delhi - 110034</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
