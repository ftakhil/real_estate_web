import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { image1, image2, image5, image14, image25, logo } from '../assets/imageImports';
import costalVideo from '../assets/vishnu/costal.mp4';

const FindUs = () => {
  const [activeTab, setActiveTab] = useState('Dinner Seminars');

  const tabs = [
    'Dinner Seminars',
    'Online Presentation',
    'Weekend Tours',
    'Rentals',
    'Visit Rancho Costa Verde'
  ];

  const content = {
    'Dinner Seminars': (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-cormorant font-light mb-6">Bringing Baja To You</h3>
        <div className="space-y-6 text-gray-600 font-inter leading-relaxed">
          <p>
            <strong>You are invited to dinner on us...</strong>
          </p>
          <p>
            We have a guest speaker that will bring Baja to you. The presentation will have amazing aerial photos, updates on the Baja real estate market, and what’s new in San Felipe, Baja Mexico. Enjoy an evening of great dining and learn about some of the breakthroughs in Green technology, how Americans can own beach view property in Mexico and Baja’s best-kept secret: Rancho Costa Verde.
          </p>
          <p>
            We conduct no business at the free seminar; it is strictly informational. If you fall in love with what we share with you, we will invite you down to experience it first hand, and the weekend is on us.
          </p>
          <p>
            It’s a great way to learn about all the exciting things happening in Baja, and discover why Rancho Costa Verde is the home of “Yesterday’s Prices, Tomorrow’s Technology, and Timeless Views.”
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
            It is one way that we can bring Baja to you. The presentation will have amazing aerial photos, updates on the Baja real estate market, what’s new in San Felipe, Baja Mexico, breakthroughs in green technology, how Americans can own beach view property in Mexico and Baja’s best-kept secret: Rancho Costa Verde.
          </p>
          <p>
            The presentation is strictly informational. One of our representatives will send the presentation to you, be available to answer any questions you might have, and to provide details on options to visit Rancho Costa Verde.
          </p>
          <p>
            It’s a great way to learn about all the exciting things happening in Baja and discover why Rancho Costa Verde is the home of “Yesterday’s Prices, Tomorrow’s Technology, and Timeless Views.”
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
    ),
    'Weekend Tours': (
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h3 className="text-3xl font-cormorant font-light mb-6">Weekend Discovery Tours</h3>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Find out more about our Weekend Discovery Tours.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            <strong>The best way to experience Rancho Costa Verde for the 1st time. Come enjoy a weekend with friends and explore Rancho Costa Verde!</strong>
          </p>
          <h4 className="text-2xl font-cormorant font-light mb-4 mt-8">Let us do the driving:</h4>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Travel from San Diego or Orange County in one of our luxury motor coaches where snacks and beverages will be included, along with a site seeing tour of all the natural wonders during the trip. The drive is hosted by one of our representatives, who will answer your questions, and show you points of interest during your trip. Your weekend will include breakfast, lunch, dinner, a margarita party upon arrival, as well as accommodations in one of the local hotels.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed">
            Your Discovery Weekend will also include a private tour of the property by your own personal Rancho Costa Verde host. Our hosts are all friendly and knowledgeable and will be able to answer all your questions about the amazing real estate opportunities available at Rancho Costa Verde. It’s a fun, personalized weekend. We hope you’ll agree our Discovery Weekend Tours are a wonderful way to experience Rancho Costa Verde and all it has to offer.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h4 className="text-2xl font-cormorant font-light mb-6 text-center">Itinerary for your 3 day/ 2-night Saturday to Monday</h4>
          <div className="space-y-6 font-inter text-gray-600">
            <div>
              <h5 className="font-semibold text-black">SATURDAY</h5>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><span className="font-medium">09:30 AM - CARLSBAD, CA:</span> Park & Ride Parking Lot. Exit off the 5 FWY at the La Costa Exit 44. (Free Parking)</li>
                <li><span className="font-medium">10:30 AM - SAN DIEGO, CA:</span> Transportation departs from San Diego International Airport.</li>
                <li><span className="font-medium">ARRIVAL - SAN FELIPE:</span> Welcome drinks and dinner at Las Palmas Hotel. Free time to explore the town.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-black">SUNDAY</h5>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><span className="font-medium">8:00 AM:</span> Breakfast Mexican-Style – at the Las Palmas Hotel</li>
                <li><span className="font-medium">9:00 AM:</span> Motor Coach departs for Rancho Costa Verde followed by full guided tour</li>
                <li><span className="font-medium">1:00 PM:</span> Lunch — at Rancho Costa Verde clubhouse</li>
                <li><span className="font-medium">4:00 PM:</span> Return to the hotels in San Felipe for relaxation and dinner on your own</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-black">MONDAY</h5>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><span className="font-medium">7:00 AM:</span> Continental Breakfast on the Patio at the Las Palmas Hotel</li>
                <li><span className="font-medium">8:00 AM:</span> Depart from the hotel to travel back to USA</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p><strong>Recommendation:</strong> Comfortable walking/hiking shoes, surf or tide shoes, camera, sunscreen, sunglasses and hat.</p>
            <p className="mt-2"><strong>Passports are required.</strong></p>
          </div>
        </div>
      </div>
    ),
    'Rentals': (
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h3 className="text-3xl font-cormorant font-light mb-6">Rancho Costa Verde Home Rentals</h3>
          <p className="text-gray-600 font-inter leading-relaxed mb-4">
            Greetings from Rancho Costa Verde. Stop by this page periodically to see which homes at Rancho Costa Verde are available for rent by owner, whether it be for a weekend get-away or for an extended vacation.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed">
            Contact us: <a href="mailto:info@ranchocostaverde.com" className="text-blue-600 hover:underline">info@ranchocostaverde.com</a> for more details about pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={image14} alt="Casa Vida Nueva" className="w-full h-64 object-cover" />
          </div>
          <div>
            <h4 className="text-2xl font-cormorant font-light mb-4">Casa Vida Nueva</h4>
            <p className="text-gray-600 font-inter leading-relaxed mb-4">
              Occupancy is for up to 5 people for short or long term rental. Incredible reduced rates for weekly and monthly rentals.
            </p>
            <p className="text-gray-600 font-inter leading-relaxed mb-4">
              Beautiful two bed, two bath, one car garage, 1255 sq. ft.. Furnished with two queen beds, sofa, and love seat. Fully equipped kitchen and washer/dryer.
            </p>
            <blockquote className="italic text-gray-500 border-l-4 border-gray-200 pl-4 my-4">
              “Have you ever spent the night at Rancho Costa Verde and seen the incredible stars or the moon rising up over the horizon? Experienced the incredible solace this area affords from a fast paced world and the quietness that nighttime brings here? Ever spent time in a totally off the grid luxury home? Well, now is your chance..."
              <footer className="mt-2 text-sm not-italic">- Andy, Rancho Costa Verde owner</footer>
            </blockquote>
          </div>
        </div>
      </div>
    ),
    'Visit Rancho Costa Verde': (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-cormorant font-light mb-6">Life is Beautiful in San Felipe</h3>
        <p className="text-xl text-gray-600 font-cormorant mb-12 text-center">at Rancho Costa Verde</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={costalVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center">
              <motion.img
                src={logo}
                alt="Rancho Costa Verde Logo"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-16 mx-auto mb-6"
              />
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
    </Layout>
  );
};

export default FindUs;
