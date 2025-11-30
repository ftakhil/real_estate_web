import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { image1, image2, image5, image14, image25, logo } from '../assets/imageImports';

const Lifestyle = () => {
    const [activeFilter, setActiveFilter] = useState('Activities');

    const filters = ['Activities', 'Area Attractions', 'San Felipe', 'Delicias', 'Events'];

    const content = {
        'Activities': (
            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-cormorant font-light mb-6">Natural Amenities</h3>
                        <p className="text-gray-600 font-inter leading-relaxed mb-6">
                            Rancho Costa Verde is 1,100 acres with over one mile of beachfront property. There are natural walking trails throughout the community with access to unlimited beach, desert and mountain hiking. Beach access provides an excellent environment for the following activities for owners:
                        </p>
                        <ul className="grid grid-cols-2 gap-4 font-inter text-gray-700">
                            {['Fishing', 'Paddle Boarding', 'Kayaking', 'Windsurfing', 'Kiteboarding', 'Surfing', 'Sailing'].map(item => (
                                <li key={item} className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl h-80">
                        <img src={image1} alt="Beach Activities" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl h-80">
                        <img src={image2} alt="Clubhouse" className="w-full h-full object-cover" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-3xl font-cormorant font-light mb-6">Clubhouse</h3>
                        <p className="text-gray-600 font-inter leading-relaxed mb-6">
                            Rancho Costa Verde has a clubhouse with the following amenities for owners:
                        </p>
                        <ul className="grid grid-cols-2 gap-4 font-inter text-gray-700">
                            {['Pool', 'Hot tub', 'Pool table', 'Pickle Ball Court', 'Bocce Ball Court', 'Horse Shoe Pit', 'Shuffleboard', 'Volleyball', 'Gym (planned)', 'Putting Green (planned)'].map(item => (
                                <li key={item} className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ),
        'Area Attractions': (
            <div className="space-y-16">
                {[
                    {
                        title: "Valley of the Giants",
                        desc: "Valle de los Gigantes is an ecological park where the largest living Cardon cacti in the world exist. The park is located between the town of San Felipe and Rancho Costa Verde and makes for a great place to have lunch among the giant Cardons.",
                        img: image5
                    },
                    {
                        title: "Puertecitos Natural Tide Pool Hot Tubs",
                        desc: "Just 12 miles south of Rancho Costa Verde are hot springs located in the tide pools of the small town of Puertecitos. It’s worth the trip every so often to soak in Mother Nature’s natural hot tubs surrounded by the Sea of Cortes.",
                        img: image14
                    },
                    {
                        title: "Gonzaga Bay",
                        desc: "Gonzaga Bay is just less than an hour drive south of Rancho Costa Verde. Gonzaga bay is known for its white sandy beach, clear turquoise water and beautiful views. There you can swim with local whale sharks, enjoy spectacular sport fishing, have a nice lunch at Alfonsina’s Hotel on the beach or spend a night or two.",
                        img: image25
                    },
                    {
                        title: "Mike’s Sky Ranch",
                        desc: "Mike’s Sky Ranch is a unique hotel located in the pristine setting of the Sierra San Pedro Martir Mountains just under a 3 hour drive from Rancho Costa Verde. It is known as a haven for off-road enthusiasts and nature lovers as well.",
                        img: image1
                    },
                    {
                        title: "Valle de Guadalupe",
                        desc: "The Valle de Guadalupe is known as the Napa Valley of Mexico. It is a perfect wine tasting and/or gastronomic getaway with its over 150 wineries, European dining, unique accommodations and vineyards as far as the eye can see.",
                        img: image2
                    }
                ].map((item, index) => (
                    <div key={item.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={index % 2 !== 0 ? 'order-2 md:order-1' : ''}>
                            <h3 className="text-3xl font-cormorant font-light mb-4">{item.title}</h3>
                            <p className="text-gray-600 font-inter leading-relaxed">{item.desc}</p>
                        </div>
                        <div className={`rounded-lg overflow-hidden shadow-xl h-64 ${index % 2 !== 0 ? 'order-1 md:order-2' : ''}`}>
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        ),
        'San Felipe': (
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-cormorant font-light mb-8">The Town of San Felipe</h3>
                <div className="text-lg text-gray-600 font-inter leading-relaxed space-y-6 text-left">
                    <p>
                        San Felipe is a quaint fishing village established in 1916 set on the Sea of Cortes. It has approximately 25,000 residents with over 5,000 being US and Canadian expatriates. San Felipe is located on the east coast of Baja California, 125 miles south of the Calexico, California border.
                    </p>
                    <p>
                        San Felipe is known as the Shrimp Capital of Baja California. It is also known for tourism with near 250,000 visitors each year. The boardwalk features beach access, beautiful sea views, numerous local shops and a variety of restaurants including traditional Mexican, Seafood, BBQ, Italian and Chinese.
                    </p>
                    <p>
                        There are super markets, fresh fish markets, medical offices, a hospital, and dentists in town as well as excellent sport fishing options, ATV rentals and a championship golf course nearby.
                    </p>
                </div>
                <div className="mt-12 rounded-lg overflow-hidden shadow-2xl h-96">
                    <img src={image14} alt="San Felipe" className="w-full h-full object-cover" />
                </div>
            </div>
        ),
        'Delicias': (
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-cormorant font-light mb-8">The Town of Delicias</h3>
                <div className="text-lg text-gray-600 font-inter leading-relaxed space-y-6 text-left">
                    <p>
                        The very small town of Delicias is a ten minute drive north of Rancho Costa Verde. There you will find two quaint traditional Mexican restaurants with excellent food. Chelo’s and Anisetos restaurants are popular meeting places for residents in the area.
                    </p>
                    <p>
                        Two markets, a hardware store, tire shop, police station, fire station and a medical office can also be found in this town.
                    </p>
                    <p>
                        Local resident, Santos Puentes, can find and accomplish just about anything you might need. If the Rancho Costa Verde on-site staff can’t get it done, Santos can!
                    </p>
                </div>
                <div className="mt-12 rounded-lg overflow-hidden shadow-2xl h-96">
                    <img src={image25} alt="Delicias" className="w-full h-full object-cover" />
                </div>
            </div>
        ),
        'Events': (
            <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-cormorant font-light mb-12 text-center">Annual Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { month: 'January', events: ['San Felipe Desert Mayhem 150km Off Road Race'] },
                        { month: 'February', events: ['93rd Anniversary of San Felipe', 'Super Bowl Parties', 'Annual Health Walk'] },
                        { month: 'March', events: ['Carnaval San Felipe Mardi Gras', 'San Felipe Pancake Breakfast', 'Annual San Felipe Folk Festival', 'Bikers Run BAJA', 'San Felipe Blues & Arts Festival'] },
                        { month: 'April', events: ['SCORE SAN FELIPE 250', 'South Campos Poker Run', 'San Felipe Salsa, Tequila & Wine Festival', 'NORRA Mexican 1000 Rally'] },
                        { month: 'May', events: ['San Felipe Craft Beer Festival', 'Cinco de Mayo', 'Club de Pesca Chili Cook-off', 'ULTRA4RACING', 'BAJA 500 (SCORE)'] },
                        { month: 'June', events: ['Recreational Hike at Valley of the Giants', 'Lions Club San Felipe Dunk Tank', 'King Shocks Ensenada-San Felipe RECORD Off-Road Race'] },
                        { month: 'August', events: ['Ceviche Festival', 'Baja Blues Fest'] },
                        { month: 'October', events: ['MXLI-SF-MXLI MEXLOG 500', 'Snowbirds Annual Welcome Back Fiesta', 'Seafood and Wine Festival', 'Dia de los Muertos Fiesta & Parade'] },
                        { month: 'November', events: ['THE SAN FELIPE SHRIMP FESTIVAL', 'San Felipe Triathlon', 'SCORE Baja 1000 Race'] },
                        { month: 'December', events: ['CODE Off-Road Polaris Mexicali', 'Parade of Lights'] }
                    ].map((item) => (
                        <div key={item.month} className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="text-xl font-cormorant font-semibold mb-4 border-b border-gray-200 pb-2">{item.month}</h4>
                            <ul className="space-y-2 font-inter text-gray-600 text-sm">
                                {item.events.map(event => (
                                    <li key={event}>• {event}</li>
                                ))}
                            </ul>
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
                        <img
                            src={image1}
                            alt="Lifestyle at Rancho Costa Verde"
                            className="w-full h-full object-cover object-center"
                        />
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
                                Lifestyle
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg text-white/95 font-inter mb-12 max-w-2xl mx-auto"
                            >
                                Experience the vibrant culture, natural beauty, and community spirit of Baja California
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

                {/* Content Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFilter}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {content[activeFilter as keyof typeof content]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Lifestyle;
