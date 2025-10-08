'use client';

import { useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// You'll need to create these animation files or download from LottieFiles
// For now, I'll show the structure
export default function ContactForm() {
  const { theme } = useTheme();
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY_HERE');

    emailjs.sendForm(
      'service_71ka0bc',        // Your Service ID
      'template_amy0xdr',        // Your Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY_HERE'     // Your Public Key
    )
    .then(() => {
      setStatus('success');
      setLoading(false);
      formRef.current.reset();
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    });
  };

  const formStyle = {
    background: theme === 'black' ? '#1E1E1E' : '#FFFFFF',
    border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
    borderRadius: '12px',
    padding: '2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1.5rem',
    background: theme === 'black' ? '#2A2A2A' : '#F5F5F5',
    border: `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}`,
    borderRadius: '8px',
    color: theme === 'black' ? '#FFFFFF' : '#000000',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: theme === 'black' ? '#FFFFFF' : '#000000',
    fontSize: '0.875rem',
    fontWeight: 600,
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} style={formStyle}>
      {/* Name Field */}
      <div>
        <label htmlFor="user_name" style={labelStyle}>
          Full Name *
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          placeholder="Enter your full name"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = theme === 'black' ? '#60A5FA' : '#146EF5'}
          onBlur={(e) => e.target.style.borderColor = theme === 'black' ? '#444444' : '#CCCCCC'}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="user_email" style={labelStyle}>
          Email Address *
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          placeholder="your.email@example.com"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = theme === 'black' ? '#60A5FA' : '#146EF5'}
          onBlur={(e) => e.target.style.borderColor = theme === 'black' ? '#444444' : '#CCCCCC'}
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="user_phone" style={labelStyle}>
          Phone Number *
        </label>
        <input
          type="tel"
          id="user_phone"
          name="user_phone"
          required
          placeholder="8501031311"
          pattern="[0-9]{10}"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = theme === 'black' ? '#60A5FA' : '#146EF5'}
          onBlur={(e) => e.target.style.borderColor = theme === 'black' ? '#444444' : '#CCCCCC'}
        />
      </div>

      {/* Course Interest Dropdown */}
      <div>
        <label htmlFor="course_interest" style={labelStyle}>
          Course of Interest
        </label>
        <select
          id="course_interest"
          name="course_interest"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = theme === 'black' ? '#60A5FA' : '#146EF5'}
          onBlur={(e) => e.target.style.borderColor = theme === 'black' ? '#444444' : '#CCCCCC'}
        >
          <option value="">Select a course</option>
          <option value="PLC Programming">PLC Programming</option>
          <option value="HMI Programming">HMI Programming</option>
          <option value="VFD Parameterization">VFD Parameterization</option>
          <option value="SCADA Systems">SCADA Systems</option>
          <option value="Delta Programming">Delta Programming</option>
          <option value="Wiring & Installation">Wiring & Installation</option>
          <option value="Panel Designing">Panel Designing</option>
          <option value="All Courses">All Courses</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your learning goals and any questions you have..."
          style={{...inputStyle, resize: 'vertical'}}
          onFocus={(e) => e.target.style.borderColor = theme === 'black' ? '#60A5FA' : '#146EF5'}
          onBlur={(e) => e.target.style.borderColor = theme === 'black' ? '#444444' : '#CCCCCC'}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        className="btn btn-primary"
        whileHover={{ scale: loading ? 1 : 1.05 }}
        whileTap={{ scale: loading ? 1 : 0.95 }}
        style={{
          width: '100%',
          padding: '1rem',
          opacity: loading ? 0.6 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Success Message */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'rgba(0, 176, 126, 0.1)',
            border: '2px solid #00B07E',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#00B07E', fontWeight: 600, margin: 0 }}>
            ✓ Message sent successfully! We'll contact you soon.
          </p>
        </motion.div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'rgba(220, 38, 38, 0.1)',
            border: '2px solid #DC2626',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#DC2626', fontWeight: 600, margin: 0 }}>
            ✕ Failed to send. Please call us directly at 8501031311.
          </p>
        </motion.div>
      )}
    </form>
  );
}
