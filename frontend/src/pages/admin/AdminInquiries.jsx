import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Hospital, Clock, Search, Trash2, CheckCircle, ExternalLink } from 'lucide-react';
import api from '../../api/api';
import './Admin.css';

const AdminInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const response = await api.get('/admin/inquiries');
            setInquiries(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching inquiries:", error);
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            await api.patch(`/admin/inquiries/${id}/status`, { status: newStatus });
            setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const filteredInquiries = inquiries.filter(inq => {
        const matchesSearch = inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inq.hospital_name?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || inq.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    if (loading) return <div className="admin-loading">Loading inquiries...</div>;

    return (
        <div className="admin-inquiries">
            <div className="admin-card-header">
                <h2>Customer Inquiries</h2>
                <div className="header-actions">
                    <select
                        className="admin-select"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
            </div>

            <div className="admin-card-header" style={{ marginTop: '20px' }}>
                <div className="search-box" style={{ maxWidth: '400px' }}>
                    <Search size={18} className="icon" />
                    <input
                        type="text"
                        placeholder="Search by name, email or hospital..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="admin-card-large" style={{ marginTop: '1rem' }}>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Customer Information</th>
                            <th>Inquiry Details</th>
                            <th>Status</th>
                            <th>Received On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInquiries.length > 0 ? filteredInquiries.map(inq => (
                            <tr key={inq.id}>
                                <td>
                                    <strong>{inq.name}</strong>
                                    <div className="text-small">
                                        <Mail size={12} style={{ marginRight: '4px' }} /> {inq.email}<br />
                                        <Phone size={12} style={{ marginRight: '4px' }} /> {inq.phone}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-small">
                                        <Hospital size={12} style={{ marginRight: '4px' }} /> {inq.hospital_name || 'Individual'}<br />
                                        <MapPin size={12} style={{ marginRight: '4px' }} /> {inq.city}<br />
                                        <span className="badge-light">For: {inq.product?.title || 'General Inquiry'}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-badge ${inq.status.toLowerCase()}`}>{inq.status}</span>
                                </td>
                                <td>
                                    <div className="text-small">
                                        <Clock size={12} style={{ marginRight: '4px' }} />
                                        {new Date(inq.created_at).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="action-btns-mini">
                                    <button className="btn-mini" title="View Message"><ExternalLink size={16} /></button>
                                    {inq.status === 'new' && (
                                        <button
                                            className="btn-mini"
                                            title="Mark Contacted"
                                            onClick={() => handleStatusUpdate(inq.id, 'contacted')}
                                        >
                                            <CheckCircle size={16} />
                                        </button>
                                    )}
                                    <button className="btn-mini" style={{ color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No inquiries found matching your criteria.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminInquiries;
