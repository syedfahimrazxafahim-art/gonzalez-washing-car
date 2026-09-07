import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, AlertCircle, Quote } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/business';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Cards per slide: 1 on mobile, 2 on tablet, 3 on desktop
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible card count based on viewport
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxIndex = Math.max(0, SAMPLE_REVIEWS.length - visibleCount);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay timer effect
  useEffect(() => {
    const isDocHidden = typeof document !== 'undefined' && document.hidden;
    if (!isPlaying || isHovered || isFocused || isDocHidden) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isFocused, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="reviews"
      aria-label="Sample Reviews Section"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              Layout Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Customer Feedback Carousel
            </h2>
            <p className="text-base text-[#E5E7EB]">
              Review slider component configured for customer feedback.
            </p>
          </div>

          {/* Controls: Play/Pause, Prev, Next */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              id="review-play-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-[#141414] border border-red-600/30 text-white hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
              aria-label={isPlaying ? 'Pause review autoplay' : 'Start review autoplay'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              id="review-prev-btn"
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-[#141414] border border-red-600/30 text-white hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
              aria-label="Previous review slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              id="review-next-btn"
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-[#141414] border border-red-600/30 text-white hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
              aria-label="Next review slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clear Notice: Sample Content for Preview Only */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141414] border border-red-600/30 text-xs text-[#E5E7EB]">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <span>
            <strong className="text-white font-semibold">Sample Reviews:</strong> Displayed for visual
            and layout preview purposes only. These do not represent verified reviews or actual client
            testimonials and will be replaced once live customer feedback is gathered.
          </span>
        </div>

        {/* Carousel Slider */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {SAMPLE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-3"
              >
                <div className="h-full rounded-2xl bg-[#141414] border border-red-600/25 p-6 flex flex-col justify-between shadow-xl space-y-4 hover:border-red-500/50 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-red-500">
                      <Quote className="w-7 h-7 opacity-70" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white px-2 py-0.5 rounded bg-red-600/20 border border-red-600/30 font-bold">
                        {review.vehicleType}
                      </span>
                    </div>

                    <p className="text-sm text-[#E5E7EB] italic leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-black border border-red-600/40 flex items-center justify-center text-xs font-bold text-white">
                      {review.reviewerInitials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{review.sampleName}</p>
                      <p className="text-[11px] text-[#E5E7EB]/70">Sample Preview Entry</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2 pt-2" aria-label="Review slider pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              id={`review-dot-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 ${
                currentIndex === idx
                  ? 'w-6 bg-red-600'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentIndex === idx ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
