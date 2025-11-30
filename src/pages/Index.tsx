import Layout from '@/components/Layout';
import WeddingHero from '@/components/WeddingHero';
import FeaturedGallery from '@/components/FeaturedGallery';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { image1 } from '../assets/imageImports';

const Index = () => {
  return (
    <Layout>
      <WeddingHero />

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-cormorant font-light mb-6">
                Budget-Friendly, Eco-Conscious, Vibrant, Coastal Living in Baja California!
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
                We blend modern green technology with the natural beauty of Baja California. Our self-contained, solar-powered community offers amenities designed for a sustainable and tranquil lifestyle.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">500+</h3>
                  <p className="text-gray-600 font-inter">Acres of Beauty</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">100%</h3>
                  <p className="text-gray-600 font-inter">Solar Powered</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">Ocean</h3>
                  <p className="text-gray-600 font-inter">Front Living</p>
                </div>
              </div>
              <Link to="/about">
                <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-inter font-medium">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={image1}
                alt="Rancho Costa Verde Property"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-cormorant text-2xl">Baja<br />California</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedGallery />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-cormorant font-light mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto mb-12">
              Experience affordable, sustainable beachfront living like never before. Join us for a weekend tour
              and discover your coastal paradise in Baja California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-inter font-medium">
                Schedule a Tour
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-inter font-medium">
                View Properties
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
