import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { image13, image15, image20, image17, image1, image19 } from '../assets/imageImports';

const FeaturedGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: image13,
      title: "arora",
      category: "night"
    },
    {
      src: image17,
      title: "costal view",
      category: "costal"
    },
    {
      src: image20,
      title: "plantation",
      category: "plantation"
    },
    {
      src: image15,
      title: "Joyful ",
      category: "-.-"
    },
    {
      src: image1, 
      title: "house",
      category: "interior"
    },
    {
      src: image19,
      title: "seaside",
      category: "view"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-6xl font-cormorant font-light mb-6">
            Featured Gallery
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            A glimpse into the beautiful stories we've had the privilege to capture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <h3 className="text-xl font-cormorant font-medium mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm font-inter opacity-80">
                    {image.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/gallery">
            <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-inter font-medium">
              View Full Gallery
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
