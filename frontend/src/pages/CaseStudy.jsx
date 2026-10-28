import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, FileText, Calendar, User, ArrowRight } from 'lucide-react';
import './CaseStudy.css';
import Blog1Img from '../assets/images/blog_1.png';
import Vlog1Img from '../assets/images/vlog_1.png';

const CaseStudy = () => {
    const [activeTab, setActiveTab] = useState('blogs');

    const blogs = [
        {
            id: 1,
            title: "The Future of Industrial Automation in 2026",
            excerpt: "Explore how AI and robotics are reshaping the manufacturing landscape and what it means for engineers.",
            author: "Admin",
            date: "Oct 15, 2025",
            image: Blog1Img,
            category: "Technology"
        },
        {
            id: 2,
            title: "Precision Engineering: Accuracy Beyond Limits",
            excerpt: "A deep dive into the techniques used to achieve sub-micron level precision in modern tool manufacturing.",
            author: "Admin",
            date: "Nov 02, 2025",
            image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop",
            category: "Engineering"
        },
        {
            id: 3,
            title: "Sustainable Manufacturing Practices",
            excerpt: "How eco-friendly initiatives are not just good for the planet but also for the bottom line of industrial plants.",
            author: "Admin",
            date: "Dec 10, 2025",
            image: "https://images.unsplash.com/photo-1538333921122-45a18356f17e?q=80&w=2070&auto=format&fit=crop",
            category: "Sustainability"
        }
    ];

    const vlogs = [
        {
            id: 1,
            title: "On-Site: Installing the New CNC Line",
            duration: "12:45",
            views: "2.4k",
            date: "Jan 12, 2026",
            image: Vlog1Img,
            category: "Vlog"
        },
        {
            id: 2,
            title: "Interview with Lead Engineer: Innovation at Essar",
            duration: "08:20",
            views: "1.1k",
            date: "Feb 05, 2026",
            image: "https://images.unsplash.com/photo-1563162803-b0e6dfb0597d?q=80&w=2070&auto=format&fit=crop",
            category: "Interview"
        }
    ];

    return (
        <div className="case-study-page">
            {/* Hero Section matches About/Home design */}
            <section className="case-study-hero bg-dark-glow">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="subtitle-gradient">INSIGHTS & INNOVATION</span>
                        <h1 className="modern-title-l text-gradient">Case Study <br />& Expertise</h1>
                        <p className="p-xl center-p">
                            Discover our journey through technical excellence, expert blogs, and behind-the-scenes vlogs of engineering precision.
                        </p>
                    </motion.div>
                </div>
            </section>
            
            <section className="case-study-content container py-20">
                <div className="tab-controls-modern glass mb-16">
                    <div className="tab-switcher-modern">
                        <button 
                            className={`tab-btn-modern ${activeTab === 'blogs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('blogs')}
                        >
                            <FileText size={20} />
                            <span>Technical Blogs</span>
                        </button>
                        <button 
                            className={`tab-btn-modern ${activeTab === 'vlogs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('vlogs')}
                        >
                            <Play size={20} />
                            <span>On-Site Vlogs</span>
                        </button>
                    </div>
                </div>

                <motion.div 
                    className="content-grid-modern"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {activeTab === 'blogs' && blogs.map((blog, i) => (
                        <motion.article 
                            key={blog.id} 
                            className="case-card-modern glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-visual">
                                <img src={blog.image} alt={blog.title} />
                                <div className="card-badge-box">
                                    <span className="badge-modern red-badge">{blog.category}</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="body-meta">
                                    <span className="meta-item"><Calendar size={14} /> {blog.date}</span>
                                    <span className="meta-item"><User size={14} /> {blog.author}</span>
                                </div>
                                <h3 className="body-title">{blog.title}</h3>
                                <p className="body-excerpt">{blog.excerpt}</p>
                                <button className="btn-modern primary-btn w-full mt-4">
                                    Read Article <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.article>
                    ))}

                    {activeTab === 'vlogs' && vlogs.map((vlog, i) => (
                        <motion.article 
                            key={vlog.id} 
                            className="case-card-modern glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-visual">
                                <img src={vlog.image} alt={vlog.title} />
                                <div className="video-overlay-modern">
                                    <div className="play-icon-box">
                                        <Play fill="white" size={24} />
                                    </div>
                                </div>
                                <div className="card-badge-box">
                                    <span className="badge-modern dark-badge">{vlog.duration}</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="body-meta">
                                    <span className="meta-item"><Calendar size={14} /> {vlog.date}</span>
                                    <span className="meta-item">{vlog.views} Views</span>
                                </div>
                                <h3 className="body-title">{vlog.title}</h3>
                                <button className="btn-modern primary-btn w-full mt-4">
                                    Watch Video <Play size={18} />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default CaseStudy;


