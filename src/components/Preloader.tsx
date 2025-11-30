import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized ProgressBar to prevent re-renders from count updates
const ProgressBar = memo(({ phase }: { phase: 'loading' | 'expanded' | 'rotated' | 'split' }) => (
    <motion.div
        className="absolute bg-white left-1/2 top-1/2"
        initial={{ width: 0, height: '1px', x: '-50%', y: '-50%' }}
        animate={{
            width: phase === 'loading' ? '100%' :
                phase === 'expanded' ? '100vw' :
                    phase === 'rotated' ? '100vh' : '100vh',
            height: phase === 'rotated' || phase === 'split' ? '1px' : '1px',
            rotate: phase === 'rotated' || phase === 'split' ? 90 : 0,
            opacity: phase === 'split' ? 0 : 1,
            x: '-50%',
            y: '-50%'
        }}
        transition={{
            width: { duration: phase === 'loading' ? 2 : 0.8, ease: phase === 'loading' ? "linear" : [0.76, 0, 0.24, 1] },
            rotate: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            opacity: { duration: 0.3 }
        }}
        style={{
            maxWidth: phase === 'loading' ? '400px' : 'none'
        }}
    />
));

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);
    const [phase, setPhase] = useState<'loading' | 'expanded' | 'rotated' | 'split'>('loading');

    useEffect(() => {
        const duration = 2000; // 2 seconds loading time
        const steps = 100;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    // Start the sequence
                    setPhase('expanded');

                    setTimeout(() => {
                        setPhase('rotated');
                        setTimeout(() => {
                            setPhase('split');
                            setTimeout(onComplete, 800); // Wait for split animation before unmounting
                        }, 800); // Wait for rotation
                    }, 800); // Wait for expansion

                    return 100;
                }
                return prev + 1;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            {/* Left Panel */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: phase === 'split' ? '-100%' : 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute left-0 top-0 bottom-0 w-1/2 bg-black z-10"
            />

            {/* Right Panel */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: phase === 'split' ? '100%' : 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute right-0 top-0 bottom-0 w-1/2 bg-black z-10"
            />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                <AnimatePresence>
                    {phase === 'loading' && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute flex flex-col items-center"
                            style={{ transform: 'translateY(-15vh)' }} // Responsive offset
                        >
                            <div className="flex items-end justify-center mb-4 text-white">
                                <span className="text-6xl md:text-8xl font-cormorant font-light">
                                    {count}%
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Animated Progress Bar */}
                <ProgressBar phase={phase} />
            </div>
        </div>
    );
};

export default Preloader;
