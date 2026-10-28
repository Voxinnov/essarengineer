import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import './HeroCarousel.css';

const images = [
    banner1,
    banner2,
    banner3,
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
