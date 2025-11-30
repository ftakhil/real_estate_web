import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { image25, logo } from '../assets/imageImports';

const About = () => {
  const [activeTab, setActiveTab] = useState('About Us');

  const tabs = ['About Us', 'Owner Testimonials'];

  const content = {
    'About Us': (
      <div className="max-w-4xl mx-auto text-center">
        <img src={logo} alt="Rancho Costa Verde Logo" className="w-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-cormorant font-light mb-8">
          Rancho Costa Verde
        </h2>
        <div className="text-lg text-gray-600 font-inter leading-relaxed mb-12 space-y-6 text-left">
          <p>
            Rancho Costa Verde is a 1,100 acre master planned second home, retirement home, and vacation home real estate community located on the east coast of Baja California, Mexico. It is just south of the small fishing village of San Felipe which is home to over 6,000 retired US citizens. Rancho Costa Verde is a self-sustained solar powered green community that takes advantage of the advances in solar and other green technology.
          </p>
          <p>
            The beachfront location, close proximity to the mountains, and natural topography at Rancho Costa Verde has created breathtaking 180-degree sea and mountain views from almost every home. Rancho Costa Verde offers 1/4-acre home sites starting as low as $22,500.00 and custom home construction from $120 per square foot.
          </p>
          <p>
            Rancho Costa Verde is a master planned development that has made maintaining the natural beauty of Baja California a top priority. Our master plan was designed with our amazing views in mind. Our community was created with staggered lot lines so your neighbors will never impact your view, green belts to maintain that “open feeling,” and with 40 percent of the land dedicated as an ecological preserve for the continued enjoyment of the beauty of this real estate on The Sea of Cortes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-cormorant font-semibold mb-4">
              Eco-Conscious Design
            </h3>
            <p className="text-gray-600 font-inter">
              100% solar-powered homes with sustainable architecture that
              minimizes environmental impact while maximizing comfort.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-cormorant font-semibold mb-4">
              Beachfront Paradise
            </h3>
            <p className="text-gray-600 font-inter">
              Direct access to pristine beaches and stunning ocean views.
              Wake up to the sound of waves every morning.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-cormorant font-semibold mb-4">
              Budget-Friendly Luxury
            </h3>
            <p className="text-gray-600 font-inter">
              Affordable coastal living without compromising on quality,
              amenities, or the beauty of your surroundings.
            </p>
          </div>
        </div>
      </div>
    ),
    'Owner Testimonials': (
      <div className="max-w-4xl mx-auto text-center">
        <img src={logo} alt="Rancho Costa Verde Logo" className="w-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-cormorant font-light mb-4">
          Owner Testimonials
        </h2>
        <p className="text-lg text-gray-600 font-inter mb-12">
          Listen to what current home owners say about their property
        </p>

        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/sB3TlJRnbLE?si=jmhbS1hQGX-mAqN6"
            title="Owner Testimonials"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image25}
              alt="Rancho Costa Verde"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-cormorant font-light text-white mb-6"
              >
                About Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/95 font-inter max-w-2xl mx-auto mb-12"
              >
                Rancho Costa Verde is a master planned development that has made maintaining the natural beauty of Baja California a top priority.
              </motion.p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 font-inter font-medium transition-all duration-300 ${activeTab === tab
                      ? 'bg-white text-black'
                      : 'border border-white text-white hover:bg-white/20'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {content[activeTab as keyof typeof content]}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
