import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Import images
import im1 from "@/assets/images/buildings/im1.jpg";
import im2 from "@/assets/images/buildings/im2.jpg";
import im3 from "@/assets/images/buildings/im3.png";
import im4 from "@/assets/images/buildings/im4.png";
import im5 from "@/assets/images/buildings/im5.png";
import im6 from "@/assets/images/buildings/im6.jpg";
import im7 from "@/assets/images/buildings/im7.jpg";

const questions = [
  {
    id: "goal",
    question: "What is your primary investment goal?",
    options: ["Investment (ROI)", "Vacation Home", "Relocation/Retirement"],
    image: im2,
  },
  {
    id: "location",
    question: "What is your preferred location setting?",
    options: ["Beachfront", "Near Coast (Walking Distance)", "City Center", "Quiet/Secluded", "Not Sure"],
    image: im3,
  },
  {
    id: "budget",
    question: "What is your approximate budget?",
    options: ["$20k - $50k", "$50k - $100k", "$100k - $300k", "$300k+"],
    image: im4,
  },
  {
    id: "type",
    question: "What type of property are you looking for?",
    options: ["Condo", "Villa", "Land", "Studio"],
    image: im5,
  },
  {
    id: "timeline",
    question: "When are you planning to purchase?",
    options: ["ASAP", "3-6 Months", "6-12 Months", "Just Browsing"],
    image: im6,
  },
];

const LeadQualificationForm = () => {
  const [step, setStep] = useState(0); // 0 = Welcome, 1-N = Questions, N+1 = Contact
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Determine current background image
  const getBackgroundImage = () => {
    if (step === 0) return im1;
    if (step <= questions.length) return questions[step - 1].image;
    return im7; // Contact step
  };

  const handleOptionSelect = (option: string) => {
    const currentQuestion = questions[step - 1];
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));

    // Auto advance after short delay for better UX
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 300);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", { answers, contactForm });
    setIsSubmitted(true);
    // Here you would typically send data to your backend
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <img
            src={getBackgroundImage()}
            alt="Background"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Close/Back Button - Always visible */}
      <Link
        to="/"
        className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20 hover:scale-110"
      >
        <X className="h-6 w-6" />
      </Link>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-2xl px-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center text-white"
            >

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Discover your dream property in <span className="text-amber-200">Baja California</span>
              </h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl">
                Answer a few quick questions to help us find the perfect match for you.
              </p>
              <Button
                size="lg"
                onClick={() => setStep(1)}
                className="group text-lg px-8 py-6 rounded-full"
              >
                Start Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          )}

          {step > 0 && step <= questions.length && (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">
                  Question {step} of {questions.length}
                </span>
                <div className="h-1 w-24 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="mb-8 text-3xl font-bold text-white">
                {questions[step - 1].question}
              </h2>

              <div className="grid gap-4">
                {questions[step - 1].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className={cn(
                      "group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-left text-lg text-white transition-all hover:bg-white/20 hover:border-white/30 active:scale-[0.98]",
                      answers[questions[step - 1].id] === option && "bg-primary/20 border-primary text-primary"
                    )}
                  >
                    {option}
                    <ChevronRight className="h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step > questions.length && !isSubmitted && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-white p-8 shadow-2xl md:p-10"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Almost there!</h2>
                <p className="text-gray-500">Where should we send your curated portfolio?</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="bg-gray-50"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Get My Portfolio
                </Button>
              </form>
            </motion.div>
          )}

          {isSubmitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-white"
            >
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                <Check className="h-12 w-12 text-white" />
              </div>
              <h2 className="mb-4 text-4xl font-bold">Thank You!</h2>
              <p className="text-xl text-gray-200">
                We're curating a list of properties just for you.<br />
                Check your email shortly.
              </p>
              <Button
                variant="outline"
                className="mt-8 border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.location.reload()} // Or navigate home
              >
                Back to Home
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeadQualificationForm;
