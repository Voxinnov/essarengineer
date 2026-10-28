import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import CaseStudy from './pages/CaseStudy';

// Admin
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminLogin from './pages/admin/AdminLogin';
import AdminInquiries from './pages/admin/AdminInquiries';
import AdminBrands from './pages/admin/AdminBrands';
import AdminSettings from './pages/admin/AdminSettings';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<div className="container py-20"><h1>Privacy Policy</h1><p>Our commitment to your privacy...</p></div>} />
          <Route path="*" element={<div className="container py-20 text-center"><h1>404</h1><p>Page Not Found</p></div>} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="inquiries" element={<AdminInquiries />} />
          <Route path="brands" element={<AdminBrands />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
