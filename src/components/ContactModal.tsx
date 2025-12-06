import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import im1 from "@/assets/images/buildings/im6.jpg";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const navigate = useNavigate();

    const handleStart = () => {
        onClose();
        navigate("/qualify");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/40 md:text-black md:bg-gray-100 md:hover:bg-gray-200"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-5/12 relative h-48 md:h-auto">
                            <img
                                src={im1}
                                alt="Luxury Property"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                            <h2 className="mb-3 text-3xl md:text-4xl font-bold text-gray-900 font-cormorant">
                                Bringing Baja To You
                            </h2>
                            <p className="mb-6 text-xl font-semibold text-primary">
                                You are invited to dinner on us...
                            </p>

                            <div className="mb-8 space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    We have a guest speaker that will bring Baja to you. The presentation will have amazing aerial photos, updates on the Baja real estate market, and what's new in San Felipe, Baja Mexico.
                                </p>
                                <p>
                                    Enjoy an evening of great dining and learn about some of the breakthroughs in Green technology, how Americans can own beach view property in Mexico and Baja's best-kept secret: <span className="font-semibold text-gray-900">Rancho Costa Verde</span>.
                                </p>
                                <p>
                                    We conduct no business at the free seminar; it is strictly informational. If you fall in love with what we share with you, we will invite you down to experience it first hand, and the weekend is on us.
                                </p>
                                <p className="italic text-gray-500 text-xs md:text-sm">
                                    It's a great way to learn about all the exciting things happening in Baja, and discover why Rancho Costa Verde is the home of "Yesterday's Prices, Tomorrow's Technology, and Timeless Views."
                                </p>
                            </div>

                            <Button
                                onClick={handleStart}
                                className="w-full md:w-auto rounded-xl py-6 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 self-center md:self-start"
                            >
                                Reserve My Spot
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
