/**
 * EmailJS Configuration for GNAN Automations
 * Handles email sending functionality via EmailJS service
 */

import emailjs from '@emailjs/browser';

// EmailJS Credentials (Replace with your actual values)
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_71ka0bc',
  TEMPLATE_ID: 'template_amy0xdr',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE', // Get from EmailJS dashboard
  
  // Recipient email
  TO_EMAIL: 'gnanautomations@gmail.com',
  
  // Email templates for different forms
  TEMPLATES: {
    CONTACT: 'template_amy0xdr',
    ENROLLMENT: 'template_enrollment',
    DEMO_REQUEST: 'template_demo',
    INQUIRY: 'template_inquiry',
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.user_name,
        from_email: formData.user_email,
        phone: formData.user_phone,
        course_interest: formData.course_interest || 'General Inquiry',
        message: formData.message,
        to_email: EMAIL_CONFIG.TO_EMAIL,
        reply_to: formData.user_email,
      },
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response,
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again or call us directly.',
      error,
    };
  }
};

// Send enrollment email
export const sendEnrollmentEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATES.ENROLLMENT,
      {
        student_name: formData.name,
        student_email: formData.email,
        student_phone: formData.phone,
        course_name: formData.courseName,
        batch_preference: formData.batchPreference,
        message: formData.message || 'Enrollment request',
        to_email: EMAIL_CONFIG.TO_EMAIL,
      },
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Enrollment request sent successfully!',
      response,
    };
  } catch (error) {
    console.error('Enrollment email failed:', error);
    return {
      success: false,
      message: 'Failed to send enrollment request.',
      error,
    };
  }
};

// Send demo request email
export const sendDemoRequestEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATES.DEMO_REQUEST,
      {
        visitor_name: formData.name,
        visitor_email: formData.email,
        visitor_phone: formData.phone,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        course_interest: formData.courseInterest,
        to_email: EMAIL_CONFIG.TO_EMAIL,
      },
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Demo request sent successfully!',
      response,
    };
  } catch (error) {
    console.error('Demo request email failed:', error);
    return {
      success: false,
      message: 'Failed to send demo request.',
      error,
    };
  }
};

// Validate email format
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate phone number (Indian format)
export const validatePhone = (phone) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone.replace(/\s+/g, ''));
};

// Format phone number
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};

// Email template variables helper
export const getTemplateVariables = (type, data) => {
  const baseVariables = {
    to_email: EMAIL_CONFIG.TO_EMAIL,
    reply_to: data.email,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  switch (type) {
    case 'contact':
      return {
        ...baseVariables,
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        course_interest: data.courseInterest || 'General',
        message: data.message,
      };

    case 'enrollment':
      return {
        ...baseVariables,
        student_name: data.name,
        student_email: data.email,
        student_phone: data.phone,
        course_name: data.courseName,
        batch_preference: data.batchPreference,
        payment_mode: data.paymentMode || 'To be decided',
      };

    case 'demo':
      return {
        ...baseVariables,
        visitor_name: data.name,
        visitor_email: data.email,
        visitor_phone: data.phone,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        course_interest: data.courseInterest,
      };

    default:
      return baseVariables;
  }
};

// Auto-reply configuration
export const sendAutoReply = async (userEmail, userName, type = 'contact') => {
  const autoReplyTemplates = {
    contact: {
      subject: 'Thank you for contacting GNAN Automations',
      message: `Dear ${userName},\n\nThank you for reaching out to GNAN Automations. We have received your inquiry and will get back to you within 24 hours.\n\nFor urgent matters, please call us at:\n📞 8501031311 | 9542069703\n\nBest regards,\nGNAN Automations Team`,
    },
    enrollment: {
      subject: 'Enrollment Request Received - GNAN Automations',
      message: `Dear ${userName},\n\nThank you for your interest in enrolling at GNAN Automations. Our admissions team will contact you shortly to discuss the next steps.\n\nIn the meantime, feel free to call us at 8501031311 for any immediate questions.\n\nBest regards,\nGNAN Automations Team`,
    },
    demo: {
      subject: 'Demo Class Request Confirmed - GNAN Automations',
      message: `Dear ${userName},\n\nYour demo class request has been received. We will confirm your slot and send you the details shortly.\n\nLocation: D.No. B7, Eureka Court, Ameerpet, Hyderabad\n\nFor queries, call: 8501031311\n\nBest regards,\nGNAN Automations Team`,
    },
  };

  // Implementation depends on your EmailJS template setup
  // This is a placeholder for the auto-reply functionality
  console.log('Auto-reply would be sent to:', userEmail);
};

export default {
  EMAIL_CONFIG,
  initEmailJS,
  sendContactEmail,
  sendEnrollmentEmail,
  sendDemoRequestEmail,
  validateEmail,
  validatePhone,
  formatPhone,
  getTemplateVariables,
  sendAutoReply,
};
