import React from 'react';
import logoImg from '../assets/images/logo.png';

const Logo = ({ className = "" }) => {
    return (
        <img
            className={className}
            src={logoImg}
            alt="Essar Engineers Logo"
            style={{ width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
        />
    );
};

export default Logo;
