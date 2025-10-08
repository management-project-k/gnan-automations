'use client';

import { useTheme } from '@/context/ThemeContext';
import ContactForm from '@/components/ContactForm';
import BookingCalendar from '@/components/BookingCalendar';
import SocialIcons from '@/components/SocialIcons';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { theme } = useTheme();

  const pageStyle = {
    minHeight: '100vh',
    background: theme === 'black' ? '#121212' : '#FAFAFA',
    paddingTop: '2rem',
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      details: ['8501031311', '9542069703'],
      action: 'tel:8501031311',
      actionText: 'Call Now',
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['gnanautomations@gmail.com'],
      action: 'mailto:gnanautomations@gmail.com',
      actionText: 'Send Email',
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['D.No. B7, Eureka Court', 'Ameerpet, Hyderabad'],
      action: 'https://maps.google.com/?q=Eureka+Court+Ameerpet+Hyderabad',
      actionText: 'Get Directions',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: ['Quick responses', 'Available 9 AM - 6 PM'],
      action: 'https://wa.me/918501031311',
      actionText: 'Chat on WhatsApp',
    },
  ];

  return (
    <div style={pageStyle}>
      <div className="container section">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Get in Touch
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Have questions about our courses? Want to book a demo class? 
            We're here to help you start your industrial automation journey.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '2rem',
                background: theme === 'black' ? '#1E1E1E' : '#FFFFFF',
                border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {method.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: theme === 'black' ? '#FFFFFF' : '#000000'
              }}>
                {method.title}
              </h3>
              {method.details.map((detail, i) => (
                <p key={i} style={{ 
                  color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
                  marginBottom: '0.5rem'
                }}>
                  {detail}
                </p>
              ))}
              <a
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn btn-secondary"
                style={{ 
                  marginTop: '1rem',
                  width: '100%',
                  fontSize: '0.875rem'
                }}
              >
                {method.actionText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 style={{ 
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: theme === 'black' ? '#FFFFFF' : '#000000'
            }}>
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>

          {/* Booking Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 style={{ 
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: theme === 'black' ? '#FFFFFF' : '#000000'
            }}>
              Book a Demo Class
            </h2>
            <BookingCalendar />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '2rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Find Us on Map
          </h2>
          <div style={{
            width: '100%',
            height: '450px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: `3px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452396924107!2d78.44309!3d17.437794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE2LjEiTiA3OMKwMjYnMzUuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GNAN Automations Location Map"
            />
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '3rem',
            background: theme === 'black' ? '#1E1E1E' : '#F5F5F5',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Connect With Us on Social Media
          </h2>
          <p style={{ 
            fontSize: '1.125rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            marginBottom: '2rem'
          }}>
            Follow us for course updates, student success stories, and industrial automation tips
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SocialIcons variant="large" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
