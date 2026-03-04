import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FloatingActions.css';

const FloatingActions = () => {
    return (
        <div className="floating-actions">
            <div className="tooltip-wrapper">
                <span className="tooltip">Inquiry Now</span>
                <Link to="/contact" className="action-btn sticky-inquiry">
                    <FileText size={24} />
                </Link>
            </div>

            <div className="tooltip-wrapper">
                <span className="tooltip">WhatsApp Us</span>
                <a
                    href="https://wa.me/919930772265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn sticky-whatsapp"
                >
                    <MessageCircle size={24} />
                </a>
            </div>
        </div>
    );
};

export default FloatingActions;
