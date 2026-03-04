import React, { useState, useEffect } from 'react';
import { Package, Inbox, Users, Activity, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import api from '../../api/api';
import './Admin.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        total_products: 0,
        total_inquiries: 0,
        pending_tasks: 0,
        total_brands: 0,
        recent_inquiries: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get('/admin/stats');
                if (response.data.status === 'success') {
                    setStats(response.data.data);
                }
            } catch (err) {
                console.error("Error fetching dashboard stats:", err);
                setError("Unable to load latest dashboard statistics.");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <div className="admin-loading">Initializing dashboard...</div>;
    if (error) return <div className="admin-error-box">{error}</div>;

    const { total_products, total_inquiries, pending_tasks, total_brands, recent_inquiries } = stats;

    return (
        <div className="admin-dashboard">
            <div className="dashboard-grid">
                <div className="dashboard-card border-left-primary">
                    <div className="card-top">
                        <h4>Total Products</h4>
                        <Package className="icon-p" />
                    </div>
                    <span className="stat-value-large">{total_products}</span>
                    <p className="stat-trend trend-up">Active in catalog</p>
                </div>

                <div className="dashboard-card border-left-secondary">
                    <div className="card-top">
                        <h4>Total Inquiries</h4>
                        <Inbox className="icon-s" />
                    </div>
                    <span className="stat-value-large">{total_inquiries}</span>
                    <p className="stat-trend trend-up">Customer requests</p>
                </div>

                <div className="dashboard-card border-left-accent">
                    <div className="card-top">
                        <h4>Pending Tasks</h4>
                        <Clock className="icon-a" />
                    </div>
                    <span className="stat-value-large">{pending_tasks}</span>
                    <p className="stat-trend">Requires attention</p>
                </div>

                <div className="dashboard-card border-left-green">
                    <div className="card-top">
                        <h4>Brands Partners</h4>
                        <Activity className="icon-g" />
                    </div>
                    <span className="stat-value-large">{total_brands}</span>
                    <p className="stat-trend">Managed partners</p>
                </div>
            </div>

            <div className="admin-card-large">
                <div className="admin-card-header">
                    <h2>Recent Inquiries</h2>
                    <button className="btn btn-secondary btn-mini">View All Inquiries</button>
                </div>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hospital/Clinic</th>
                            <th>Inquiry For</th>
                            <th>Received</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recent_inquiries.map(inq => (
                            <tr key={inq.id}>
                                <td><strong>{inq.name}</strong></td>
                                <td>{inq.hospital_name || 'Individual'}</td>
                                <td><span className="badge-light">{inq.product?.title || 'General'}</span></td>
                                <td>{new Date(inq.created_at).toLocaleDateString()}</td>
                                <td><span className={`status-badge ${inq.status.toLowerCase()}`}>{inq.status}</span></td>
                                <td className="action-btns-mini">
                                    <button className="btn-mini" title="View Details"><ExternalLink size={16} /></button>
                                    <button className="btn-mini" title="Mark Contacted"><CheckCircle size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
