'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import anime from 'animejs';

export default function GalleryPage() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    // Animate gallery items on load
    anime({
      targets: '.gallery-item',
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(50),
      easing: 'easeOutExpo',
      duration: 800
    });
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'plc-lab', name: 'PLC Lab' },
    { id: 'hmi-equipment', name: 'HMI Equipment' },
    { id: 'vfd-systems', name: 'VFD Systems' },
    { id: 'scada-stations', name: 'SCADA Stations' },
    { id: 'students', name: 'Students' },
    { id: 'workshops', name: 'Workshops' },
  ];

  const galleryImages = [
    { id: 1, src: '/images/equipment/plc-rack-1.jpg', alt: 'Siemens PLC Rack S7-1200', category: 'plc-lab' },
    { id: 2, src: '/images/equipment/hmi-panel-1.jpg', alt: 'HMI Touch Panel Interface', category: 'hmi-equipment' },
    { id: 3, src: '/images/equipment/vfd-unit-1.jpg', alt: 'VFD Variable Frequency Drive', category: 'vfd-systems' },
    { id: 4, src: '/images/equipment/control-panel-1.jpg', alt: 'Industrial Control Panel', category: 'plc-lab' },
    { id: 5, src: '/images/equipment/allen-bradley-plc.jpg', alt: 'Allen Bradley PLC System', category: 'plc-lab' },
    { id: 6, src: '/images/equipment/delta-plc.jpg', alt: 'Delta PLC Training Setup', category: 'plc-lab' },
    { id: 7, src: '/images/equipment/scada-screen.jpg', alt: 'SCADA Control Room', category: 'scada-stations' },
    { id: 8, src: '/images/equipment/wiring-bench.jpg', alt: 'Wiring & Installation Bench', category: 'workshops' },
    { id: 9, src: '/images/students/class-session-1.jpg', alt: 'Students Learning PLC Programming', category: 'students' },
    { id: 10, src: '/images/students/lab-training-1.jpg', alt: 'Hands-on Lab Training', category: 'students' },
    { id: 11, src: '/images/workshops/workshop-1.jpg', alt: 'Industrial Automation Workshop', category: 'workshops' },
    { id: 12, src: '/images/equipment/panel-design.jpg', alt: 'Control Panel Design Station', category: 'workshops' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const pageStyle = {
    minHeight: '100vh',
    background: theme === 'black' ? '#121212' : '#FAFAFA',
    paddingTop: '2rem',
  };

  const filterBarStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3rem',
    padding: '0 1rem',
  };

  const filterButtonStyle = (isActive) => ({
    padding: '0.75rem 1.5rem',
    background: isActive 
      ? (theme === 'black' ? '#FFFFFF' : '#000000')
      : 'transparent',
    color: isActive 
      ? (theme === 'black' ? '#000000' : '#FFFFFF')
      : (theme === 'black' ? '#FFFFFF' : '#000000'),
    border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  });

  const galleryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    padding: '0 2rem',
  };

  const imageCardStyle = {
    position: 'relative',
    height: '300px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div className="container section">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: theme === 'black' ? '#FFFFFF' : '#000000'
          }}>
            Lab & Equipment Gallery
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            color: theme === 'black' ? '#E0E0E0' : '#2C2C2C',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Explore our state-of-the-art industrial automation lab with real PLC, HMI, VFD, and SCADA equipment
          </p>
        </motion.div>

        {/* Category Filter */}
        <div style={filterBarStyle}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={filterButtonStyle(selectedCategory === category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={galleryGridStyle}>
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={imageCardStyle}
                onClick={() => setLightboxImage(image)}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    background: theme === 'black' 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                      : 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)',
                  }}
                >
                  <p style={{ 
                    color: theme === 'black' ? '#FFFFFF' : '#000000',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}>
                    {image.alt}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: 'center', 
              padding: '4rem 0',
              color: theme === 'black' ? '#B0B0B0' : '#555555'
            }}
          >
            <p style={{ fontSize: '1.25rem' }}>No images found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'pointer',
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                cursor: 'default',
              }}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
              
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: '#FFFFFF',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>

              {/* Caption */}
              <p style={{
                marginTop: '1rem',
                color: '#FFFFFF',
                textAlign: 'center',
                fontSize: '1rem',
              }}>
                {lightboxImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
