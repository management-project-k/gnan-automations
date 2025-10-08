'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const { theme } = useTheme();

  const footerStyle = {
    background: theme === 'black' ? '#FFFFFF' : '#000000',
    color: theme === 'black' ? '#000000' : '#FFFFFF',
    borderTop: `3px solid ${theme === 'black' ? '#000000' : '#FFFFFF'}`,
    padding: '4rem 0 2rem',
    marginTop: '6rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  };

  const columnTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: theme === 'black' ? '#000000' : '#FFFFFF',
  };

  const linkStyle = {
    display: 'block',
    marginBottom: '0.75rem',
    color: theme === 'black' ? '#000000' : '#FFFFFF',
    opacity: 0.8,
    transition: 'opacity 0.3s ease',
  };

  const bottomBarStyle = {
    borderTop: `1px solid ${theme === 'black' ? '#333333' : '#CCCCCC'}`,
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Main Footer Grid */}
        <div style={gridStyle}>
          {/* Company Info */}
          <div>
            <h3 style={columnTitleStyle}>GNAN AUTOMATIONS</h3>
            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
              Industrial Training Institute
            </p>
            <p style={{ marginBottom: '1rem', opacity: 0.8, fontSize: '0.875rem' }}>
              D.No. B7, Eureka Court<br />
              Ameerpet, Hyderabad
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>
              📞 8501031311 | 9542069703<br />
              ✉️ gnanautomations@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={columnTitleStyle}>Quick Links</h3>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/courses" style={linkStyle}>Courses</Link>
            <Link href="/gallery" style={linkStyle}>Gallery</Link>
            <Link href="/about" style={linkStyle}>About Us</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
          </div>

          {/* Courses */}
          <div>
            <h3 style={columnTitleStyle}>Our Courses</h3>
            <p style={linkStyle}>PLC Programming</p>
            <p style={linkStyle}>HMI Programming</p>
            <p style={linkStyle}>VFD Parameterization</p>
            <p style={linkStyle}>SCADA Systems</p>
            <p style={linkStyle}>Wiring & Installation</p>
            <p style={linkStyle}>Panel Designing</p>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 style={columnTitleStyle}>Connect With Us</h3>
            <SocialIcons variant="large" />
            <div style={{ marginTop: '1.5rem' }}>
              <Link 
                href="/contact" 
                className="btn"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: theme === 'black' ? '#000000' : '#FFFFFF',
                  color: theme === 'black' ? '#FFFFFF' : '#000000',
                  border: `2px solid ${theme === 'black' ? '#000000' : '#FFFFFF'}`,
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle}>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
            © 2025 GNAN Automations. All rights reserved. | Founder: K Paramesh
          </p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
            <Link href="/privacy" style={{ opacity: 0.8 }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8 }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
