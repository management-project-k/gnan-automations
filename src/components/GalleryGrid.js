'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import anime from 'animejs';

export default function GalleryGrid({ 
  images, 
  columns = 3, // 2, 3, or 4
  gap = '1.5rem',
  showCategories = true,
  enableLightbox = true 
}) {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    // Animate gallery items
    anime({
      targets: '.gallery-grid-item',
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(50, { start: 100 }),
      easing: 'easeOutExpo',
      duration: 800
    });
  }, [selectedCategory]);

  // Get unique categories from images
  const categories = ['all', ...new Set(images.map(img => img.category))];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  // Lightbox navigation
  const openLightbox = (image, index) => {
    if (enableLightbox) {
      setLightboxImage(image);
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage, lightboxIndex]);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      columns === 4 ? '250px' : columns === 3 ? '300px' : '400px'
    }, 1fr))`,
    gap: gap,
  };

  const categoryButtonStyle = (isActive) => ({
    padding: '0.75rem 1.5rem',
    background: isActive
      ? (theme === 'black' ? '#FFFFFF' : '#000000')
      : 'transparent',
    color: isActive
      ? (theme === 'black' ? '#000000' : '#FFFFFF')
      : (theme === 'black' ? '#FFFFFF' : '#000000'),
    border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const imageCardStyle = {
    position: 'relative',
    height: '300px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: `2px solid ${theme === 'black' ? '#FFFFFF' : '#000000'}`,
    cursor: enableLightbox ? 'pointer' : 'default',
  };

  return (
    <>
      {/* Category Filter */}
      {showCategories && categories.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={categoryButtonStyle(selectedCategory === category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Photos' : category.replace(/-/g, ' ').toUpperCase()}
            </motion.button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div style={gridStyle}>
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-grid-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={imageCardStyle}
              onClick={() => openLightbox(image, index)}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />

              {/* Overlay with Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem',
                  background: theme === 'black'
                    ? 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                    : 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)',
                }}
              >
                <p style={{
                  color: theme === 'black' ? '#FFFFFF' : '#000000',
                  fontWeight: 600,
                  fontSize: '1rem',
                  margin: 0
                }}>
                  {image.alt}
                </p>
                {image.category && (
                  <p style={{
                    color: theme === 'black' ? '#B0B0B0' : '#555555',
                    fontSize: '0.75rem',
                    marginTop: '0.25rem',
                  }}>
                    {image.category.replace(/-/g, ' ').toUpperCase()}
                  </p>
                )}
              </motion.div>

              {/* Zoom Icon */}
              {enableLightbox && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: theme === 'black' ? '#FFFFFF' : '#000000',
                    color: theme === 'black' ? '#000000' : '#FFFFFF',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                  }}
                >
                  🔍
                </motion.div>
              )}
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
            padding: '4rem 2rem',
            color: theme === 'black' ? '#B0B0B0' : '#555555',
          }}
        >
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📷</p>
          <p style={{ fontSize: '1.125rem' }}>No images found in this category.</p>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
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
            {/* Close Button */}
            <motion.button
              onClick={closeLightbox}
              whileHover={{ scale: 1.1, rotate: 90 }}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
              }}
            >
              ×
            </motion.button>

            {/* Previous Button */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              whileHover={{ scale: 1.2 }}
              style={{
                position: 'absolute',
                left: '2rem',
                background: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
              }}
            >
              ‹
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              whileHover={{ scale: 1.2 }}
              style={{
                position: 'absolute',
                right: '2rem',
                background: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
              }}
            >
              ›
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '85vh',
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
                  borderRadius: '8px',
                }}
              />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '1.5rem',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1rem',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <p style={{
                  color: '#FFFFFF',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  margin: 0,
                }}>
                  {lightboxImage.alt}
                </p>
                <p style={{
                  color: '#CCCCCC',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem',
                }}>
                  Image {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
