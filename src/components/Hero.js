'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import anime from 'animejs';

export default function Hero({ 
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  stats,
  variant = 'default' // 'default' | 'minimal' | 'video' | 'animated'
}) {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Animate hero content on mount
    anime.timeline({ loop: false })
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1200,
      })
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutExpo',
        duration: 1000,
      }, '-=800')
      .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 800,
      }, '-=600')
      .add({
        targets: '.hero-stats',
        opacity: [0, 1],
        scale: [0.8, 1],
        easing: 'easeOutExpo',
        duration: 800,
      }, '-=400');

    // Animate stats numbers
    if (stats) {
      anime({
        targets: '.stat-number',
        innerHTML: [0, (el) => el.getAttribute('data-target')],
        round: 1,
        easing: 'easeInOutQuad',
        duration: 2500,
        delay: 1000,
      });
    }
  }, [stats]);

  const heroStyle = {
    minHeight: variant === 'minimal' ? '60vh' : '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: theme === 'black'
      ? 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
      : 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    width: '100%',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: variant === 'minimal' 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
  };

  if (!mounted) return null;

  return (
    <section style={heroStyle}>
      {/* Background Image with Parallax */}
      {backgroundImage && variant !== 'minimal' && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            y: y,
            opacity: opacity,
          }}
        >
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme === 'black'
              ? 'rgba(0, 0, 0, 0.7)'
              : 'rgba(255, 255, 255, 0.8)',
          }} />
        </motion.div>
      )}

      {/* Content */}
      <div style={contentStyle}>
        <div style={gridStyle}>
          {/* Text Content */}
          <div style={{ 
            textAlign: variant === 'minimal' ? 'center' : 'left',
            margin: variant === 'minimal' ? '0 auto' : '0'
          }}>
            {/* Subtitle/Tag */}
            {subtitle && (
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: theme === 'black' ? '#60A5FA' : '#146EF5',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '1rem',
                }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Main Title */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: theme === 'black' ? '#FFFFFF' : '#000000',
              }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
                  maxWidth: variant === 'minimal' ? '700px' : 'none',
                  margin: variant === 'minimal' ? '0 auto 2rem' : '0 0 2rem 0',
                }}
              >
                {description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0 }}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: variant === 'minimal' ? 'center' : 'flex-start',
              }}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href} className="btn btn-primary">
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn btn-secondary">
                  {secondaryCTA.text}
                </Link>
              )}
            </motion.div>

            {/* Stats Section */}
            {stats && stats.length > 0 && (
              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
                  gap: '2rem',
                  marginTop: '3rem',
                  paddingTop: '3rem',
                  borderTop: `1px solid ${theme === 'black' ? '#444444' : '#CCCCCC'}`,
                }}
              >
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div
                      className="stat-number"
                      data-target={stat.number}
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 700,
                        color: theme === 'black' ? '#60A5FA' : '#146EF5',
                        marginBottom: '0.5rem',
                      }}
                    >
                      0
                    </div>
                    <p style={{
                      fontSize: '0.875rem',
                      color: theme === 'black' ? '#B0B0B0' : '#555555',
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Side Image/Animation (for default variant) */}
          {variant === 'default' && backgroundImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                position: 'relative',
                height: '500px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
              }}
            >
              <Image
                src={backgroundImage}
                alt="Hero visual"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {variant !== 'minimal' && (
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          <div style={{
            width: '30px',
            height: '50px',
            border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}>
            <div style={{
              width: '6px',
              height: '10px',
              background: theme === 'black' ? '#FFFFFF' : '#000000',
              borderRadius: '3px',
            }} />
          </div>
        </motion.div>
      )}
    </section>
  );
}
