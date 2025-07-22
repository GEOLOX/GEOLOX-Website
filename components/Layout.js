import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 