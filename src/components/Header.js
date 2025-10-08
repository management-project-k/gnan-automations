'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 999,
    background: theme === 'black' ? '#121212' : '#FFFFFF',
    borderBottom: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
    transition: 'all 0.3s ease',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: theme === 'black' ? '#FFFFFF' : '#000000',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const linkStyle = (isActive) => ({
    color: theme === 'black' ? '#FFFFFF' : '#000000',
    fontSize: '1rem',
    fontWeight: isActive ? 600 : 400,
    position: 'relative',
    padding: '0.5rem 0',
    borderBottom: isActive ? `3px solid ${theme === 'black' ? '#60A5FA' : '#146EF5'}` : 'none',
    transition: 'all 0.3s ease',
  });

  const mobileMenuBtnStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const menuLineStyle = {
    width: '30px',
    height: '3px',
    background: theme === 'black' ? '#FFFFFF' : '#000000',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link href="/" style={logoStyle}>
          GNAN AUTOMATIONS
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ ...navStyle, '@media (max-width: 768px)': { display: 'none' } }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              style={linkStyle(pathname === link.path)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
            }}
          >
            Book Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={mobileMenuBtnStyle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
        >
          <span style={menuLineStyle}></span>
          <span style={menuLineStyle}></span>
          <span style={menuLineStyle}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{
            background: theme === 'black' ? '#1E1E1E' : '#F5F5F5',
            borderTop: `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}`,
          }}
          className="mobile-nav"
        >
          <div style={{ padding: '1rem 2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  color: theme === 'black' ? '#FFFFFF' : '#000000',
                  borderBottom: `1px solid ${theme === 'black' ? '#333333' : '#E0E0E0'}`,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
