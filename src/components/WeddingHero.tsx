import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { image1, image3, image4, image14, image13 } from '../assets/imageImports';

const WeddingHero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [index, setIndex] = useState(0);
  const words = ["COASTAL", "AFFORDABLE", "BAJA", "DREAM", "BEACH", "LIFESTYLE"];

  const heroImages = useMemo(() => [
    image1,  // im1.jpg - buildings
    image3,  // im3.png - buildings
    image4,  // im4.png - buildings
    image14, // im14.png - outsideview
    image13  // im13.png - outsideview
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 bg-black">
        {heroImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === idx ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt="Rancho Costa Verde Scenery"
              className="w-full h-full object-cover object-center scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-white transition-all duration-300 hover:scale-110 hidden md:block"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-white transition-all duration-300 hover:scale-110 hidden md:block"
      >
        <ChevronRight size={40} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center text-white">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-normal text-white mb-6"
            >
              Rancho Costa Verde
            </motion.h1>

            {/* Subheading from Image 2 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-2xl font-cormorant font-light text-white/90 mb-8 max-w-4xl"
            >
              Baja California's Premier Residential Master Planned Community
            </motion.p>

            {/* Animated Subheading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-lg md:text-xl font-cormorant tracking-widest text-white/90 uppercase"
            >
              <span>Experience</span>
              <div className="relative w-32 h-8 overflow-hidden text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 text-yellow-400 font-semibold"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span>Living</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-12"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-inter px-8"
                onClick={() => navigate('/contact')}
              >
                Schedule Weekend Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-inter mb-2 tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-white/60"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingHero;
