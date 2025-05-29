import React from 'react';
import '../Style/App.css'
import { Outlet } from 'react-router-dom';

import TopMenu from './TopMenu';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopMenu />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
