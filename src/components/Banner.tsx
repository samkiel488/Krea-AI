'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Carousel slides — tweak these to change what's showcased in the hero
const carouselSlides = [
  {
    id: 1,
    title: "WAN 2.2 Image Generation",
    description: "Generate complex, realistic images with our advanced AI model",
    image: "/imagegen.jpeg",
    badge: "New Model"
  },
  {
    id: 2,
    title: "Open Source FLUX.1 Krea",
    description: "Experience the power of open-source AI image generation",
    image: "https://picsum.photos/800/600?random=2",
    badge: "Open Source"
  },
  {
    id: 3,
    title: "Real-time Video Generation",
    description: "Create stunning videos in real-time with AI assistance",
    image: "/videogen.jpeg",
    badge: "Coming Soon"
  }
];

// Small navigation group for the carousel (prev, indicators, next)
function CarouselNavigation({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext 
}: {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Previous button */}
      <button
        onClick={onPrevious}
        className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-blue-600 dark:bg-blue-400 w-6'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            onClick={() => {
              // TODO: consider adding direct slide jump when indicators are clicked
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}

// Single slide in the carousel; animates in/out via Framer Motion
function CarouselSlide({ slide, isActive }: { slide: typeof carouselSlides[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
        isActive ? 'ring-2 ring-blue-500/50' : ''
      }`}
    >
      {/* Image with overlay */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback: if the image breaks, swap to a Picsum placeholder so layout stays intact
            e.currentTarget.src = `https://picsum.photos/800/600?random=${slide.id}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
            {slide.badge}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg md:text-xl font-bold mb-2">{slide.title}</h3>
          <p className="text-sm md:text-base opacity-90">{slide.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Banner component
export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic: advances slides every few seconds unless the user interacts
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handlers for previous/next slide (also stop autoplay when user interacts)
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  // Resume autoplay after a short inactivity period so we don't annoy users
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying]);

  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Headline and content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Main headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Create Amazing
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Content
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              >
                Transform your ideas into stunning visuals with our advanced AI-powered tools. 
                Generate images, videos, and more with just a few clicks.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="flex items-center gap-2">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Try Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200">
                Learn More
              </button>
            </motion.div>

            {/* Stats or features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Images Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Carousel container */}
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
              <AnimatePresence mode="wait">
                <CarouselSlide
                  key={currentSlide}
                  slide={carouselSlides[currentSlide]}
                  isActive={true}
                />
              </AnimatePresence>

              {/* Navigation controls */}
              <div className="mt-6">
                <CarouselNavigation
                  currentSlide={currentSlide}
                  totalSlides={carouselSlides.length}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              </div>
            </div>

            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}