
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24, image25, image26, image27
} from '../assets/imageImports';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Photo Gallery');

  const filters = ['Video Gallery', 'Photo Gallery', 'Home Exteriors', 'Home Interiors', 'Home Special Features', 'Flora & Fauna', 'San Felipe'];

  const images = [
    // Featured images in specified order
    { src: image1, category: 'Video Gallery' },
    { src: image5, category: 'Home Exteriors' },
    { src: image16, category: 'Home Interiors' },
    { src: image21, category: 'Flora & Fauna' },
    // Remaining images categorized
    { src: image2, category: 'Photo Gallery' },
    { src: image3, category: 'Photo Gallery' },
    { src: image4, category: 'Home Exteriors' },
    { src: image6, category: 'Home Interiors' },
    { src: image7, category: 'San Felipe' },
    { src: image8, category: 'Home Special Features' },
    { src: image9, category: 'Flora & Fauna' },
    { src: image10, category: 'Home Interiors' },
    { src: image11, category: 'Home Exteriors' },
    { src: image12, category: 'San Felipe' },
    { src: image17, category: 'Photo Gallery' },
    { src: image18, category: 'Home Interiors' },
    { src: image19, category: 'Flora & Fauna' },
    { src: image20, category: 'San Felipe' },
    { src: image22, category: 'Home Exteriors' },
    { src: image23, category: 'Video Gallery' },
    { src: image24, category: 'Home Special Features' },
    { src: image25, category: 'Flora & Fauna' },
    { src: image26, category: 'San Felipe' },
    { src: image27, category: 'Home Exteriors' }
  ];

  const filteredImages = activeFilter === 'ALL' ? images : images.filter(img => img.category === activeFilter);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image14}
              alt="Featured Photography"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-cormorant font-light mb-6 text-white"
              >
                Captured Stories
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/95 font-inter mb-12 max-w-2xl mx-auto"
              >
                A curated collection of timeless moments and cherished memories
              </motion.p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 font-inter font-medium transition-all duration-300 ${activeFilter === filter
                      ? 'bg-white text-black'
                      : 'border border-white text-white hover:bg-white/20'
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={`Gallery Image - ${image.category}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-inter text-gray-700">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
