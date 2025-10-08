'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CoursesPage() {
  const { theme } = useTheme();
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 'plc',
      title: 'PLC Programming',
      icon: '⚙️',
      price: '₹25,000',
      duration: '6 Weeks',
      description: 'Comprehensive PLC programming training covering ladder logic, function blocks, and structured text programming.',
      modules: [
        'Understanding PLC architecture and hardware',
        'Ladder logic programming fundamentals',
        'Timers, counters, and comparison instructions',
        'Analog I/O and scaling',
        'Function blocks and structured programming',
        'Real-time industrial simulation projects',
        'Troubleshooting and diagnostics',
        'Siemens, Allen Bradley, Delta platforms'
      ],
      skills: ['Ladder Logic', 'STL Programming', 'HMI Integration', 'Industrial Networks'],
      platforms: ['Siemens S7-1200/1500', 'Allen Bradley ControlLogix', 'Delta DVP Series'],
    },
    {
      id: 'hmi',
      title: 'HMI Programming',
      icon: '📱',
      price: '₹20,000',
      duration: '4 Weeks',
      description: 'Learn to design and program Human Machine Interface screens for industrial control systems.',
      modules: [
        'Introduction to HMI systems',
        'Screen designing and layout management',
        'Tag configuration and PLC data linking',
        'Graphics and animations',
        'Alarm and event handling',
        'Recipe and data logging',
        'User access and security',
        'Project deployment and testing'
      ],
      skills: ['Screen Design', 'Tag Binding', 'Alarm Management', 'Data Logging'],
      platforms: ['Siemens WinCC', 'Allen Bradley PanelView', 'Delta DOP Series'],
    },
    {
      id: 'vfd',
      title: 'VFD Parameterization',
      icon: '🔌',
      price: '₹18,000',
      duration: '3 Weeks',
      description: 'Master Variable Frequency Drive configuration, motor control, and energy optimization techniques.',
      modules: [
        'Basics of Variable Frequency Drives',
        'VFD architecture and components',
        'Motor control techniques (V/F, Vector)',
        'Parameter configuration and programming',
        'VFD wiring and installation',
        'Communication protocols (Modbus, Profibus)',
        'Energy saving optimization',
        'Practical VFD commissioning'
      ],
      skills: ['Motor Control', 'Parameter Setup', 'Drive Wiring', 'Commissioning'],
      platforms: ['ABB ACS Series', 'Siemens Micromaster', 'Delta VFD-E/VFD-M'],
    },
    {
      id: 'scada',
      title: 'SCADA Systems',
      icon: '🖥️',
      price: '₹25,000',
      duration: '6 Weeks',
      description: 'Complete SCADA systems training including architecture, communication, and real-time monitoring.',
      modules: [
        'Supervisory control and data acquisition concepts',
        'SCADA architecture and components',
        'Communication protocols and drivers',
        'Real-time data acquisition',
        'Trend analysis and historical logging',
        'Alarm systems and notifications',
        'Report generation',
        'SCADA project development tools'
      ],
      skills: ['System Architecture', 'Data Acquisition', 'Trending', 'Reporting'],
      platforms: ['WonderWare InTouch', 'Siemens WinCC', 'Ignition SCADA'],
    },
    {
      id: 'delta',
      title: 'Delta Programming',
      icon: '📊',
      price: '₹22,000',
      duration: '5 Weeks',
      description: 'Specialized training in Delta PLC and HMI systems with WPLSoft programming.',
      modules: [
        'Delta DVP series PLC architecture',
        'WPLSoft programming environment',
        'Ladder logic programming',
        'Motion control with Delta servo',
        'Delta HMI DOPSoft programming',
        'Communication networks',
        'Industrial applications',
        'Project implementation'
      ],
      skills: ['WPLSoft', 'DOPSoft', 'Motion Control', 'Servo Systems'],
      platforms: ['Delta DVP Series', 'Delta AH/AS Series', 'Delta DOP HMI'],
    },
    {
      id: 'wiring',
      title: 'Wiring & Installation',
      icon: '🔧',
      price: '₹15,000',
      duration: '4 Weeks',
      description: 'Hands-on training in control wiring, panel assembly, and electrical installation standards.',
      modules: [
        'Electrical safety and standards',
        'Reading electrical drawings',
        'Control wiring techniques',
        'Panel layout and assembly',
        'Cable routing and termination',
        'Grounding and shielding',
        'Testing and commissioning',
        'Maintenance and troubleshooting'
      ],
      skills: ['Control Wiring', 'Panel Assembly', 'Cable Management', 'Testing'],
      platforms: ['Industrial Standards', 'IEC/NEC Codes', 'Safety Protocols'],
    },
    {
      id: 'panel',
      title: 'Panel Designing',
      icon: '🏗️',
      price: '₹20,000',
      duration: '4 Weeks',
      description: 'Learn industrial control panel design, component selection, and AutoCAD Electrical.',
      modules: [
        'Panel design fundamentals',
        'Component selection and sizing',
        'AutoCAD Electrical drafting',
        'Layout planning and optimization',
        'Thermal management',
        'Cable routing and labeling',
        'Standards and compliance',
        'Documentation and BOM'
      ],
      skills: ['AutoCAD Electrical', 'Component Selection', 'Layout Design', 'Documentation'],
      platforms: ['AutoCAD Electrical', 'EPLAN', 'Panel Design Standards'],
    },
  ];

  const pageStyle = {
    minHeight: '100vh',
    background: theme === 'black' ? '#121212' : '#FAFAFA',
    paddingTop: '2rem',
  };

  const courseCardStyle = (isExpanded) => ({
    background: theme === 'black' ? '#1E1E1E' : '#FFFFFF',
    border: `2px solid ${theme === 'black' ? (isExpanded ? '#60A5FA' : '#FFFFFF') : (isExpanded ? '#146EF5' : '#000000')}`,
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

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
            Industrial Automation Courses
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Comprehensive hands-on training programs covering PLC, HMI, SCADA, VFD, and more. 
            All courses include real hardware practice and certification.
          </p>
          
          {/* Pricing Info */}
          <div style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: theme === 'black' ? '#2A2A2A' : '#F5F5F5',
            border: `2px solid ${theme === 'black' ? '#60A5FA' : '#146EF5'}`,
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <p style={{ 
              fontSize: '1.5rem',
              fontWeight: 700,
              color: theme === 'black' ? '#60A5FA' : '#146EF5',
              margin: 0
            }}>
              Course Fees: Up to ₹25,000
            </p>
            <p style={{ 
              fontSize: '0.875rem',
              color: theme === 'black' ? '#B0B0B0' : '#555555',
              margin: '0.5rem 0 0'
            }}>
              EMI options available | Batch discounts for multiple courses
            </p>
          </div>
        </motion.div>

        {/* Courses List */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              style={courseCardStyle(expandedCourse === course.id)}
              onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
            >
              {/* Course Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '3rem' }}>{course.icon}</span>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      color: theme === 'black' ? '#FFFFFF' : '#000000'
                    }}>
                      {course.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
                      <span style={{ 
                        color: theme === 'black' ? '#60A5FA' : '#146EF5',
                        fontWeight: 600
                      }}>
                        {course.price}
                      </span>
                      <span style={{ color: theme === 'black' ? '#B0B0B0' : '#555555' }}>
                        ⏱️ {course.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expand Icon */}
                <motion.div
                  animate={{ rotate: expandedCourse === course.id ? 180 : 0 }}
                  style={{ 
                    fontSize: '2rem',
                    color: theme === 'black' ? '#FFFFFF' : '#000000'
                  }}
                >
                  ▼
                </motion.div>
              </div>

              {/* Course Description */}
              <p style={{ 
                marginTop: '1rem',
                color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
                lineHeight: 1.6
              }}>
                {course.description}
              </p>

              {/* Expanded Content */}
              {expandedCourse === course.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ marginTop: '2rem' }}
                >
                  {/* Course Modules */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      marginBottom: '1rem',
                      color: theme === 'black' ? '#FFFFFF' : '#000000'
                    }}>
                      Course Modules
                    </h4>
                    <ul style={{ 
                      listStyle: 'none',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '0.75rem'
                    }}>
                      {course.modules.map((module, index) => (
                        <li key={index} style={{ 
                          color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
                          fontSize: '0.875rem',
                          padding: '0.5rem 0',
                          borderLeft: `3px solid ${theme === 'black' ? '#60A5FA' : '#146EF5'}`,
                          paddingLeft: '1rem'
                        }}>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Platforms */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                  }}>
                    <div>
                      <h4 style={{ 
                        fontSize: '1rem',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        color: theme === 'black' ? '#FFFFFF' : '#000000'
                      }}>
                        Skills You'll Learn
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {course.skills.map((skill, index) => (
                          <span key={index} style={{
                            padding: '0.5rem 1rem',
                            background: theme === 'black' ? '#2A2A2A' : '#F5F5F5',
                            border: `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}`,
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 style={{ 
                        fontSize: '1rem',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        color: theme === 'black' ? '#FFFFFF' : '#000000'
                      }}>
                        Platforms Covered
                      </h4>
                      <ul style={{ listStyle: 'none' }}>
                        {course.platforms.map((platform, index) => (
                          <li key={index} style={{
                            color: theme === 'black' ? '#B0B0B0' : '#555555',
                            fontSize: '0.875rem',
                            marginBottom: '0.5rem'
                          }}>
                            ✓ {platform}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link 
                      href="/contact" 
                      className="btn btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Enroll Now
                    </Link>
                    <button 
                      className="btn btn-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download Syllabus
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          padding: '3rem',
          background: theme === 'black' ? '#1E1E1E' : '#F5F5F5',
          borderRadius: '12px'
        }}>
          <h3 style={{ 
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Need Help Choosing a Course?
          </h3>
          <p style={{ 
            fontSize: '1.125rem',
            marginBottom: '2rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C'
          }}>
            Speak with our counselor to find the best course for your career goals.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Book Free Counseling
            </Link>
            <a href="tel:8501031311" className="btn btn-secondary">
              Call: 8501031311
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
