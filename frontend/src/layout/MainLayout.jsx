import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default MainLayout;
