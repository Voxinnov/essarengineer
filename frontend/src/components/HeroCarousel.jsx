import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import './HeroCarousel.css';

const images = [
    banner1,
    banner2,
    "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=2070"  // Keeping one high-quality engineering stock
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-carousel">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Hero Banner ${currentIndex + 1}`}
                    className="carousel-image"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>
            <div className="carousel-overlay"></div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
