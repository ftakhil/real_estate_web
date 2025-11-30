import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { image1, image2 } from '../assets/imageImports';

const FindUs = () => {
  const [activeTab, setActiveTab] = useState('Dinner Seminars');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabs = [
    'Dinner Seminars',
    'Online Presentation'
  ];

  const heroBackgrounds: { [key: string]: { type: 'image', src: string } } = {
    'Dinner Seminars': { type: 'image', src: image1 },
    'Online Presentation': { type: 'image', src: image2 }
  };

  const tiles = [0, 1, 2, 3, 4];

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }, 350);
  };

  const content = {
    'Dinner Seminars': (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-cormorant font-light mb-6">Bringing Baja To You</h3>
        <div className="space-y-6 text-gray-600 font-inter leading-relaxed">
          <p>
            <strong>You are invited to dinner on us...</strong>
          </p>
          <p>
            We have a guest speaker that will bring Baja to you. The presentation will have amazing aerial photos, updates on the Baja real estate market, and what's new in San Felipe, Baja Mexico. Enjoy an evening of great dining and learn about some of the breakthroughs in Green technology, how Americans can own beach view property in Mexico and Baja's best-kept secret: Rancho Costa Verde.
          </p>
          <p>
            We conduct no business at the free seminar; it is strictly informational. If you fall in love with what we share with you, we will invite you down to experience it first hand, and the weekend is on us.
          </p>
          <p>
            It's a great way to learn about all the exciting things happening in Baja, and discover why Rancho Costa Verde is the home of "Yesterday's Prices, Tomorrow's Technology, and Timeless Views."
          </p>
          <p>
            Select the dinner reservation that is most convenient for you and we will reserve your seats…
          </p>
        </div>
        <div className="mt-8">
          <p className="text-xl font-cormorant italic text-gray-500">No events at the moment</p>
        </div>
      </div>
    ),
    'Online Presentation': (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-cormorant font-light mb-6">Bringing Baja To You</h3>
        <div className="space-y-6 text-gray-600 font-inter leading-relaxed">
          <p>
            <strong>You are invited to receive a digital presentation...</strong>
          </p>
          <p>
            It is one way that we can bring Baja to you. The presentation will have amazing aerial photos, updates on the Baja real estate market, what's new in San Felipe, Baja Mexico, breakthroughs in green technology, how Americans can own beach view property in Mexico and Baja's best-kept secret: Rancho Costa Verde.
          </p>
          <p>
            The presentation is strictly informational. One of our representatives will send the presentation to you, be available to answer any questions you might have, and to provide details on options to visit Rancho Costa Verde.
          </p>
          <p>
            It's a great way to learn about all the exciting things happening in Baja and discover why Rancho Costa Verde is the home of "Yesterday's Prices, Tomorrow's Technology, and Timeless Views."
          </p>
          <p>
            To receive the presentation by email, please fill out the form below…
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            { title: "Retire in Luxury on the Beach", desc: "Rancho Costa Verde is a 1,100-acre master-planned second home, retirement home, and vacation home real estate community located on the east coast of Baja California, Mexico, approximately 30 miles south of the town of San Felipe." },
            { title: "Own Your Property", desc: "Rancho Costa Verde subdivides large parcels into individual legal parcels that can be conveyed directly to Mexican citizens and foreigners through Fideicomisos or Bank Trusts, which have the same bundle of rights as fee simple in the USA." },
            { title: "Resort Amenities", desc: "Relax by the pool at our gorgeous clubhouse or go for a swim, surf, kayak, or even go fishing just off your property—everything you would find at the finest resorts right in your backyard." },
            { title: "Green Community", desc: "Rancho Costa Verde is a green, self-sustained community. The green aspects of Rancho Costa Verde begin with the selection of the location of the community. It overlooks a portion of the Sea of Cortes that is a designated ecological biosphere reserve." },
            { title: "San Felipe Has a lot to Offer", desc: "San Felipe has all the best food, lodging, and nightlife! Shop along the coast and go for a beautiful candlelight dinner. Or meet with friends for lunch and walk along the beach." },
            { title: "Walking Trails and Nature Preserve", desc: "There are natural walking trails throughout the community with access to unlimited beach, desert, and mountain hiking." },
            { title: "Gated Community", desc: "Rancho Costa Verde is a safe, protected gated community with 24/7 security." },
            { title: "Custom Homes", desc: "All homes at Rancho Costa Verde are unique and custom-made for each owner. Construction pricing starts as low as $120 per square foot." }
          ].map(item => (
            <div key={item.title} className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-cormorant font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-600 font-inter text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Tile Transition Overlay */}
          <AnimatePresence>
            {isTransitioning && (
              <div className="absolute inset-0 z-10">
                {tiles.map((index) => (
                  <motion.div
                    key={index}
                    className="absolute left-0 h-[20%] bg-black"
                    style={{ top: `${index * 20}%`, width: 0 }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Hero Background */}
          <AnimatePresence>
            <motion.img
              key={activeTab}
              src={heroBackgrounds[activeTab].src}
              alt="Find Us Hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
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
              Find Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/95 font-inter mb-12 max-w-2xl mx-auto"
            >
              Discover the beauty of Rancho Costa Verde and plan your visit
            </motion.p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
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

      {/* Content Section */}
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
  );
};

export default FindUs;
