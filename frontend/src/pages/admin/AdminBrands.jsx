import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, Globe, ExternalLink } from 'lucide-react';
import api from '../../api/api';
import './Admin.css';

const AdminBrands = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const response = await api.get('/admin/brands');
            if (response.data.status === 'success') {
                setBrands(response.data.data);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching brands:", error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this brand? This action cannot be undone and will fail if products are linked.")) {
            try {
                const response = await api.delete(`/admin/brands/${id}`);
                if (response.data.status === 'success') {
                    setBrands(prev => prev.filter(b => b.id !== id));
                    alert("Brand deleted successfully.");
                } else {
                    alert(response.data.message || "Failed to delete brand.");
                }
            } catch (error) {
                console.error("Error deleting brand:", error);
                alert(error.response?.data?.message || "An error occurred while deleting the brand.");
            }
        }
    };

    const filteredBrands = brands.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="admin-loading">Loading brands...</div>;

    return (
        <div className="admin-brands">
            <div className="admin-card-header">
                <h2>Brands Partners</h2>
                <button className="btn btn-primary btn-icon"><Plus size={18} /> Add New Brand</button>
            </div>

            <div className="admin-card-header" style={{ marginTop: '20px' }}>
                <div className="search-box" style={{ maxWidth: '300px' }}>
                    <Search size={18} className="icon" />
                    <input
                        type="text"
                        placeholder="Search brands..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="admin-card-large" style={{ marginTop: '1rem' }}>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Brand Name</th>
                            <th>Products Count</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBrands.length > 0 ? filteredBrands.map(brand => (
                            <tr key={brand.id}>
                                <td>
                                    {brand.logo_path ? (
                                        <img src={`/storage/${brand.logo_path}`} alt={brand.name} style={{ height: '40px', objectFit: 'contain' }} />
                                    ) : (
                                        <div className="placeholder-logo">NO LOGO</div>
                                    )}
                                </td>
                                <td><strong>{brand.name}</strong><br /><small>{brand.slug}</small></td>
                                <td><span className="badge-light">{brand.products_count || 0} Products</span></td>
                                <td>{brand.description ? (brand.description.substring(0, 50) + '...') : 'No description'}</td>
                                <td className="action-btns-mini">
                                    <button className="btn-mini" title="Edit Brand"><Edit2 size={16} /></button>
                                    <button
                                        className="btn-mini"
                                        style={{ color: '#ef4444' }}
                                        title="Delete Brand"
                                        onClick={() => handleDelete(brand.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No brands found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminBrands;
