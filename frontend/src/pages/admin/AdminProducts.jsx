import React, { useState, useEffect } from 'react';
import { Edit2, Trash2, Plus, Search, Eye, RefreshCw } from 'lucide-react';
import api from '../../api/api';
import './Admin.css';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await api.get('/products'); // Basic product fetch
            if (response.data.status === 'success') {
                setProducts(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await api.delete(`/admin/products/${id}`);
                setProducts(prev => prev.filter(p => p.id !== id));
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Failed to delete product.");
            }
        }
    };

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="admin-loading">Managing product catalog...</div>;

    return (
        <div className="admin-products">
            <div className="admin-card-header">
                <h2>Products Management</h2>
                <div className="header-actions">
                    <button className="btn btn-secondary btn-icon" onClick={fetchProducts} title="Refresh catalog">
                        <RefreshCw size={18} />
                    </button>
                    <button className="btn btn-primary btn-icon">
                        <Plus size={18} /> Add New Product
                    </button>
                </div>
            </div>

            <div className="admin-card-header" style={{ marginTop: '20px' }}>
                <div className="search-box" style={{ maxWidth: '300px' }}>
                    <Search size={18} className="icon" />
                    <input
                        type="text"
                        placeholder="Search catalog..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="admin-card-large" style={{ marginTop: '1rem' }}>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.length > 0 ? filteredProducts.map(p => (
                            <tr key={p.id}>
                                <td>
                                    <img
                                        src={p.primary_image ? `/storage/${p.primary_image}` : 'https://via.placeholder.com/50'}
                                        alt={p.title}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                </td>
                                <td><strong>{p.title}</strong><br /><small>{p.slug}</small></td>
                                <td>{p.category?.name || 'Uncategorized'}</td>
                                <td>{p.brand?.name || 'No Brand'}</td>
                                <td>
                                    <span className={`status-badge ${p.is_active ? 'contacted' : 'closed'}`}>
                                        {p.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="action-btns-mini">
                                    <button className="btn-mini" title="Preview"><Eye size={16} /></button>
                                    <button className="btn-mini" title="Edit"><Edit2 size={16} /></button>
                                    <button
                                        className="btn-mini"
                                        style={{ color: '#ef4444' }}
                                        title="Delete"
                                        onClick={() => handleDelete(p.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No products found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProducts;

