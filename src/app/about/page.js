'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialIcons from '@/components/SocialIcons';

export default function AboutPage() {
  const { theme } = useTheme();

  const pageStyle = {
    minHeight: '100vh',
    background: theme === 'black' ? '#121212' : '#FAFAFA',
    paddingTop: '2rem',
  };

  const values = [
    {
      icon: '🎯',
      title: 'Practical Training',
      description: 'Hands-on experience with real industrial equipment, not just theory.'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with years of field experience.'
    },
    {
      icon: '🏆',
      title: 'Job-Ready Skills',
      description: 'Curriculum designed to meet current industry demands and standards.'
    },
    {
      icon: '🤝',
      title: 'Placement Support',
      description: 'Career guidance and assistance with job placements in automation sector.'
    },
  ];

  const milestones = [
    { year: '2018', event: 'GNAN Automations founded in Ameerpet, Hyderabad' },
    { year: '2019', event: 'Established state-of-the-art PLC and SCADA lab' },
    { year: '2020', event: 'Reached 200+ trained students milestone' },
    { year: '2022', event: 'Expanded to include VFD and Panel Design courses' },
    { year: '2024', event: 'Partnership with leading automation companies' },
    { year: '2025', event: 'Over 500+ successful students placed in industry' },
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
            About GNAN Automations
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Leading industrial automation training institute in Ameerpet, Hyderabad. 
            Empowering students with practical PLC, HMI, SCADA, and VFD skills.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '6rem',
            padding: '3rem',
            background: theme === 'black' ? '#1E1E1E' : '#FFFFFF',
            border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
            borderRadius: '12px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '250px',
              height: '250px',
              margin: '0 auto',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `4px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
              position: 'relative',
            }}>
              <Image
                src="/images/founder.jpg"
                alt="K Paramesh - Founder"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <h2 style={{ 
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              color: theme === 'black' ? '#FFFFFF' : '#000000'
            }}>
              K Paramesh
            </h2>
            <p style={{ 
              fontSize: '1.125rem',
              color: theme === 'black' ? '#60A5FA' : '#146EF5',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}>
              Founder & Lead Trainer
            </p>
            
            <p style={{ 
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
              marginBottom: '1rem'
            }}>
              With over 10 years of experience in industrial automation, K Paramesh founded 
              GNAN Automations with a vision to bridge the gap between theoretical knowledge 
              and practical industry skills. His expertise spans across Siemens, Allen Bradley, 
              and Delta automation systems.
            </p>
            
            <p style={{ 
              fontSize: '1rem',
              lineHeight: 1.8,
              color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
              marginBottom: '1.5rem'
            }}>
              "Our mission is to provide hands-on training that prepares students for real-world 
              industrial challenges. Every course is designed with input from industry professionals 
              to ensure our students are job-ready from day one."
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ 
                fontSize: '0.875rem',
                color: theme === 'black' ? '#B0B0B0' : '#555555',
                marginBottom: '0.75rem'
              }}>
                Connect with me:
              </p>
              <SocialIcons />
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Why Choose GNAN Automations?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {values.map((value, index) => (
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
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: theme === 'black' ? '#FFFFFF' : '#000000'
                }}>
                  {value.title}
                </h3>
                <p style={{ 
                  color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
                  lineHeight: 1.6
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Our Journey
          </h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '2rem',
                  paddingBottom: '2rem',
                  borderBottom: index < milestones.length - 1 
                    ? `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}` 
                    : 'none',
                }}
              >
                <div style={{
                  minWidth: '80px',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: theme === 'black' ? '#60A5FA' : '#146EF5',
                }}>
                  {milestone.year}
                </div>
                <p style={{ 
                  fontSize: '1.125rem',
                  color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
                  lineHeight: 1.6
                }}>
                  {milestone.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location */}
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
            Visit Our Institute
          </h2>
          <p style={{ 
            fontSize: '1.25rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            marginBottom: '1.5rem'
          }}>
            D.No. B7, Eureka Court, Ameerpet, Hyderabad
          </p>
          <p style={{ 
            fontSize: '1rem',
            color: theme === 'black' ? '#B0B0B0' : '#555555',
            marginBottom: '2rem'
          }}>
            Conveniently located in the heart of Ameerpet, Hyderabad's education hub. 
            Easy access via metro and public transport.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://maps.google.com/?q=Eureka+Court+Ameerpet+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions
            </a>
            <a href="/contact" className="btn btn-secondary">
              Schedule a Visit
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
