'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';

export default function CourseCard({ 
  course, 
  variant = 'default', // 'default' | 'compact' | 'featured'
  showButton = true,
  onEnroll 
}) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Card styles based on variant
  const getCardStyle = () => {
    const baseStyle = {
      background: theme === 'black' ? '#1E1E1E' : '#FFFFFF',
      border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
      borderRadius: '12px',
      padding: variant === 'compact' ? '1.5rem' : '2rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    if (variant === 'featured') {
      return {
        ...baseStyle,
        border: `3px solid ${theme === 'black' ? '#60A5FA' : '#146EF5'}`,
        boxShadow: theme === 'black'
          ? '0 8px 32px rgba(96, 165, 250, 0.3)'
          : '0 8px 32px rgba(20, 110, 245, 0.3)',
      };
    }

    return baseStyle;
  };

  const iconStyle = {
    fontSize: variant === 'compact' ? '2.5rem' : '3.5rem',
    marginBottom: '1rem',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
  };

  const titleStyle = {
    fontSize: variant === 'compact' ? '1.25rem' : '1.5rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    color: theme === 'black' ? '#FFFFFF' : '#000000',
  };

  const priceStyle = {
    fontSize: variant === 'compact' ? '1.25rem' : '1.5rem',
    fontWeight: 700,
    color: theme === 'black' ? '#60A5FA' : '#146EF5',
    marginBottom: '0.5rem',
  };

  const descriptionStyle = {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
    marginBottom: '1rem',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    background: theme === 'black' ? '#2A2A2A' : '#F5F5F5',
    border: `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}`,
    borderRadius: '20px',
    fontSize: '0.75rem',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
  };

  return (
    <motion.div
      style={getCardStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: theme === 'black'
          ? '0 16px 48px rgba(255,255,255,0.1)'
          : '0 16px 48px rgba(0,0,0,0.15)'
      }}
      onClick={() => variant !== 'compact' && setIsExpanded(!isExpanded)}
    >
      {/* Featured Badge */}
      {variant === 'featured' && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: theme === 'black' ? '#60A5FA' : '#146EF5',
          color: '#FFFFFF',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 700,
        }}>
          ⭐ POPULAR
        </div>
      )}

      {/* Course Icon/Animation */}
      <div style={{ textAlign: 'center' }}>
        {course.animation ? (
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <Lottie
              animationData={course.animation}
              loop={isHovered}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ) : (
          <div style={iconStyle}>
            {course.icon}
          </div>
        )}
      </div>

      {/* Course Title */}
      <h3 style={titleStyle}>
        {course.title}
      </h3>

      {/* Price & Duration */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <span style={priceStyle}>
          {course.price}
        </span>
        <span style={{ 
          fontSize: '0.875rem',
          color: theme === 'black' ? '#B0B0B0' : '#555555'
        }}>
          ⏱️ {course.duration}
        </span>
      </div>

      {/* Description */}
      {variant !== 'compact' && (
        <p style={descriptionStyle}>
          {course.description}
        </p>
      )}

      {/* Skills/Tags */}
      {course.skills && variant !== 'compact' && (
        <div style={{ marginBottom: '1rem' }}>
          {course.skills.slice(0, isExpanded ? undefined : 3).map((skill, index) => (
            <span key={index} style={badgeStyle}>
              {skill}
            </span>
          ))}
          {!isExpanded && course.skills.length > 3 && (
            <span style={{...badgeStyle, fontWeight: 600}}>
              +{course.skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && course.modules && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}` }}
          >
            <h4 style={{ 
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
              color: theme === 'black' ? '#FFFFFF' : '#000000'
            }}>
              What You'll Learn:
            </h4>
            <ul style={{ listStyle: 'none', padding
