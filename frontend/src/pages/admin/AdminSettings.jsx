import React, { useState, useEffect } from 'react';
import { Save, AlertCircle, CheckCircle2, Globe, Mail, Phone, Layout } from 'lucide-react';
import api from '../../api/api';
import './Admin.css';

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        site_name: 'Essar Engineers',
        contact_email: 'info@essarengineers.co.in',
        contact_phone: '+91 9345211XXX',
        office_address: '',
        meta_description: '',
        facebook_url: '',
        linkedin_url: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await api.get('/admin/settings');
            if (response.data.status === 'success') {
                const data = response.data.data;
                const formatted = {};
                data.forEach(s => {
                    formatted[s.key] = s.value;
                });
                setSettings(prev => ({ ...prev, ...formatted }));
            }
        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);
        try {
            await api.post('/admin/settings', settings);
            setMessage({ type: 'success', text: 'Settings updated successfully!' });
        } catch (error) {
            console.error("Error updating settings:", error);
            setMessage({ type: 'error', text: 'Failed to update settings. Please try again.' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="admin-loading">Loading site configurations...</div>;

    return (
        <div className="admin-settings">
            <div className="admin-card-header">
                <h2>Site Global Settings</h2>
            </div>

            {message && (
                <div className={`admin-notification ${message.type}`}>
                    {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span>{message.text}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="admin-card-large" style={{ marginTop: '1rem' }}>
                <div className="settings-section">
                    <h3><Layout size={18} /> General Information</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Website Name</label>
                            <input
                                type="text"
                                name="site_name"
                                value={settings.site_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Meta Description (SEO)</label>
                            <textarea
                                name="meta_description"
                                value={settings.meta_description}
                                onChange={handleChange}
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="settings-section" style={{ marginTop: '2rem' }}>
                    <h3><Mail size={18} /> Contact & Support</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Contact Email</label>
                            <input
                                type="email"
                                name="contact_email"
                                value={settings.contact_email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Support Phone</label>
                            <input
                                type="text"
                                name="contact_phone"
                                value={settings.contact_phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group full-width">
                            <label>Office Address</label>
                            <input
                                type="text"
                                name="office_address"
                                value={settings.office_address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="settings-section" style={{ marginTop: '2rem' }}>
                    <h3><Globe size={18} /> Social Links</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Facebook Profile URL</label>
                            <input
                                type="url"
                                name="facebook_url"
                                value={settings.facebook_url}
                                onChange={handleChange}
                                placeholder="https://facebook.com/..."
                            />
                        </div>
                        <div className="form-group">
                            <label>LinkedIn Profile URL</label>
                            <input
                                type="url"
                                name="linkedin_url"
                                value={settings.linkedin_url}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/..."
                            />
                        </div>
                    </div>
                </div>

                <div className="form-footer" style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                    <button type="submit" disabled={saving} className="btn btn-primary btn-icon">
                        {saving ? 'Saving...' : <><Save size={18} /> Save Settings</>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminSettings;
