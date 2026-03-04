import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, LogIn } from 'lucide-react';
import api from '../../api/api';
import './Admin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('/login', {
                email: credentials.email,
                password: credentials.password,
                device_name: 'admin-dashboard'
            });

            if (response.data.status === 'success') {
                localStorage.setItem('admin_token', response.data.token);
                localStorage.setItem('admin_user', JSON.stringify(response.data.user));
                navigate('/admin');
            } else {
                setError('Authentication failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || 'Server error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo-box">ESSAR</div>
                    <h2>Admin CMS</h2>
                    <p>Enter your credentials to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-with-icon">
                            <User size={18} />
                            <input
                                type="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} />
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                        {loading ? 'Authenticating...' : <><LogIn size={18} /> Login to Dashboard</>}
                    </button>

                    <div className="login-footer">
                        <p>&copy; 2024 Essar Engineers. All rights reserved.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
