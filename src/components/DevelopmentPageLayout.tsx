import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { logo } from '../assets/imageImports';

interface DevelopmentPageLayoutProps {
    title: string;
    subtitle?: string;
    heroImage?: string;
    children: ReactNode;
}

const DevelopmentPageLayout = ({ title, subtitle, heroImage, children }: DevelopmentPageLayoutProps) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    {heroImage && (
                        <img
                            src={heroImage}
                            alt={title}
                            className="w-full h-full object-cover object-center"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
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
                            {title}
                        </motion.h1>
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg text-white/95 font-inter mb-12 max-w-2xl mx-auto"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="max-w-4xl mx-auto font-inter text-gray-700 leading-relaxed space-y-6"
                    >
                        {children}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DevelopmentPageLayout;
