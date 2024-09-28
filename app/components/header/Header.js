"use client";
// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const isActive = (path) => pathname === path; // Helper function to check if the link is active

  return (
    <header className="bg-blue-600 p-4 sticky top-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white hover:text-gray-300">
          <h1 className="text-white text-lg font-semibold">Stock Manager</h1>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className={`text-white hover:text-gray-300 ${isActive('/') ? 'font-bold' : ''}`}>
            Home
          </Link>  <Link href="/pages/about" className={`text-white hover:text-gray-300 ${isActive('/pages/about') ? 'font-bold' : ''}`}>
            About
          </Link>
          <Link href="/pages/contactus" className={`text-white hover:text-gray-300 ${isActive('/pages/contactus') ? 'font-bold' : ''}`}>
            Contact us
          </Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="mt-4 space-y-2 md:hidden">
          <Link href="/" className={`block text-white ${isActive('/') ? 'font-bold' : ''}`}>
            Home
          </Link>  <Link href="/pages/about" className={`block text-white ${isActive('/pages/about') ? 'font-bold' : ''}`}>
            About
          </Link>
          <Link href="/pages/contactus" className={`block text-white ${isActive('/pages/contactus') ? 'font-bold' : ''}`}>
            Contact us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
