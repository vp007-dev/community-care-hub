import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface SlidingBannerProps {
  slides: BannerSlide[];
  autoPlayInterval?: number;
  height?: string;
}

export function SlidingBanner({ 
  slides, 
  autoPlayInterval = 4000,
  height = "h-[180px] sm:h-[220px] lg:h-[280px]"
}: SlidingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) {
    return (
      <div className={`relative w-full ${height} bg-gradient-to-r from-primary/80 via-primary/60 to-amber-500/80 flex items-center justify-center`}>
        <div className="text-center text-white px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2">
            Vidhya Swaroop Foundation
          </h2>
          <p className="text-sm sm:text-lg opacity-90">
            Transforming Lives Through Education & Care
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden group`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Content Overlay */}
            {(slides[currentIndex].title || slides[currentIndex].subtitle) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  {slides[currentIndex].title && (
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg"
                    >
                      {slides[currentIndex].title}
                    </motion.h2>
                  )}
                  {slides[currentIndex].subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm sm:text-lg opacity-90 drop-shadow-md"
                    >
                      {slides[currentIndex].subtitle}
                    </motion.p>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30 z-10"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30 z-10"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
