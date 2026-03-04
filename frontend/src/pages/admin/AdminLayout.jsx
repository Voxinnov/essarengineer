import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Inbox, LogOut, Settings, Image as ImageIcon, Briefcase } from 'lucide-react';
import './Admin.css';

const AdminLayout = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
    };

    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <div className="sidebar-brand">
                    <span className="logo-text">ESSAR <small>CMS</small></span>
                </div>

                <nav className="sidebar-nav">
                    <NavLink to="/admin" end className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                        <LayoutDashboard size={20} /> Dashboard
                    </NavLink>
                    <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                        <Package size={20} /> Products
                    </NavLink>
                    <NavLink to="/admin/inquiries" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                        <Inbox size={20} /> Inquiries
                    </NavLink>
                    <NavLink to="/admin/brands" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                        <Briefcase size={20} /> Brands
                    </NavLink>
                    <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                        <Settings size={20} /> Settings
                    </NavLink>
                </nav>

                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            <main className="admin-main">
                <header className="admin-header">
                    <h2>Admin Control Panel</h2>
                    <div className="user-profile">
                        <span>Admin User</span>
                        <div className="avatar">AD</div>
                    </div>
                </header>
                <div className="admin-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
