'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'lottie-react';
import anime from 'animejs';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { theme } = useTheme();

  useEffect(() => {
    // Animate course cards on load
    anime({
      targets: '.course-card',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
      duration: 1200
    });

    // Counter animation for stats
    anime({
      targets: '.stat-number',
      innerHTML: [0, (el) => el.getAttribute('data-target')],
      round: 1,
      easing: 'easeInOutQuad',
      duration: 2000
    });
  }, []);

  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: theme === 'black' 
      ? 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
      : 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
    overflow: 'hidden',
  };

  const heroContent = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
  };

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: theme === 'black' ? '#FFFFFF' : '#000000'
            }}>
              Master Industrial Automation in Ameerpet
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: theme === 'black' ? '#E0E0E0' : '#2C2C2C'
            }}>
              Hands-on PLC, HMI, SCADA, VFD training with real hardware labs. 
              Siemens, Allen Bradley, and Delta systems.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Book Demo
              </Link>
            </div>

            {/* Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                { number: 500, label: 'Students Trained' },
                { number: 7, label: 'Courses Offered' },
                { number: 25000, label: 'Max Course Fee (₹)' },
              ].map((stat, index) => (
                <div key={index}>
                  <div 
                    className="stat-number"
                    data-target={stat.number}
                    style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: 700,
                      color: theme === 'black' ? '#60A5FA' : '#146EF5'
                    }}
                  >
                    0
                  </div>
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: theme === 'black' ? '#B0B0B0' : '#555555'
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image/Animation Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'relative',
              height: '500px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
            }}
          >
            <Image 
              src="/images/hero-lab.jpg" 
              alt="PLC Lab" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section" style={{
        background: theme === 'black' ? '#1E1E1E' : '#F5F5F5'
      }}>
        <div className="container">
          <h2 className="section-title">Industrial Automation Courses</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                title: 'PLC Programming',
                description: 'Master ladder logic with Siemens, Allen Bradley, Delta',
                icon: '⚙️',
                topics: ['Architecture', 'Ladder Logic', 'Troubleshooting']
              },
              {
                title: 'HMI Programming',
                description: 'Design interactive touch screens and panels',
                icon: '📱',
                topics: ['Screen Design', 'Tag Configuration', 'Alarms']
              },
              {
                title: 'VFD Parameterization',
                description: 'Motor control and frequency drive configuration',
                icon: '🔌',
                topics: ['Motor Control', 'Parameter Setup', 'Commissioning']
              },
              {
                title: 'SCADA Systems',
                description: 'Supervisory control and data acquisition',
                icon: '🖥️',
                topics: ['Architecture', 'Real-time Data', 'Logging']
              },
              {
                title: 'Delta Programming',
                description: 'Delta PLC and HMI systems training',
                icon: '📊',
                topics: ['Delta PLC', 'WPLSoft', 'Integration']
              },
              {
                title: 'Wiring & Installation',
                description: 'Control wiring and panel installation',
                icon: '🔧',
                topics: ['Control Wiring', 'Safety', 'Standards']
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="course-card card"
                whileHover={{ y: -10 }}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {course.icon}
                </div>
                
                <h3 style={{ 
                  marginBottom: '1rem',
                  color: theme === 'black' ? '#FFFFFF' : '#000000'
                }}>
                  {course.title}
                </h3>
                
                <p style={{ 
                  marginBottom: '1.5rem',
                  color: theme === 'black' ? '#E0E0E0' : '#2C2C2C'
                }}>
                  {course.description}
                </p>

                <ul style={{ marginBottom: '1.5rem', listStyle: 'none' }}>
                  {course.topics.map((topic, i) => (
                    <li key={i} style={{ 
                      marginBottom: '0.5rem',
                      color: theme === 'black' ? '#B0B0B0' : '#555555',
                      fontSize: '0.875rem'
                    }}>
                      ✓ {topic}
                    </li>
                  ))}
                </ul>

                <Link href="/courses" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/courses" className="btn btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: theme === 'black' ? '#121212' : '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1.5rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Ready to Start Your Industrial Automation Journey?
          </h2>
          
          <p style={{ 
            fontSize: '1.25rem',
            marginBottom: '2rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Join hundreds of students who have mastered PLC, HMI, and SCADA systems. 
            Book your free demo class today!
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Book Free Demo
            </Link>
            <a href="tel:8501031311" className="btn btn-secondary">
              Call Now: 8501031311
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
