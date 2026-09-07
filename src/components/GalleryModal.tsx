import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES, BUSINESS_DATA } from '../data/business';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management and keyboard listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeLightboxIndex !== null) {
          setActiveLightboxIndex(null);
        } else {
          onClose();
        }
      } else if (activeLightboxIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setActiveLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, activeLightboxIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="gallery-modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#141414] border border-red-600/30 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Gonzalez Car Wash Logo"
                className="w-10 h-10 rounded-full object-cover border border-red-600/50 shadow-sm"
              />
              <div>
                <h2 id="gallery-modal-title" className="text-lg sm:text-xl font-bold text-white tracking-wide font-display">
                  Gonzalez Car Wash Photo Gallery
                </h2>
                <p className="text-xs text-[#E5E7EB]">Vehicle Service Showcase • Los Angeles</p>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              id="gallery-close-btn"
              onClick={onClose}
              className="p-2 text-white hover:text-red-400 rounded-lg hover:bg-white/10 cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
              aria-label="Close gallery modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY_IMAGES.map((item, idx) => (
                <button
                  key={item.id}
                  id={`gallery-item-btn-${item.id}`}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className="group relative text-left rounded-xl overflow-hidden bg-black border border-white/10 hover:border-red-500 cursor-pointer transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Hover zoom icon badge */}
                    <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ZoomIn className="w-4 h-4 text-red-400" />
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-black/80 px-2 py-0.5 rounded border border-red-600/30 font-mono">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white mt-1 drop-shadow-sm truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-black">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="text-xs font-semibold text-white hover:text-red-400 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Have questions? Call {BUSINESS_DATA.phone}</span>
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 text-white hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-200"
            >
              Close Gallery
            </button>
          </div>
        </motion.div>

        {/* Lightbox Overlay */}
        {activeLightboxIndex !== null && (
          <div
            id="lightbox-backdrop"
            role="dialog"
            aria-label="Image Lightbox"
            className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4"
          >
            {/* Controls Bar */}
            <div className="absolute top-4 right-4 z-70 flex items-center gap-2">
              <span className="text-xs text-white px-3 py-1 bg-white/10 rounded-full font-mono border border-white/10">
                {activeLightboxIndex + 1} / {GALLERY_IMAGES.length}
              </span>
              <button
                id="lightbox-close-btn"
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 text-white hover:text-red-400 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Left Nav */}
            <button
              id="lightbox-prev-btn"
              onClick={() =>
                setActiveLightboxIndex(
                  (prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0)
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-red-400 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all duration-200 hover:-translate-x-0.5"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Center View */}
            <div className="max-w-3xl w-full p-2 sm:p-4 text-center space-y-3">
              <div className="max-h-[70vh] rounded-2xl overflow-hidden bg-black border border-red-600/40 flex items-center justify-center shadow-2xl">
                <img
                  src={GALLERY_IMAGES[activeLightboxIndex].url}
                  alt={GALLERY_IMAGES[activeLightboxIndex].alt}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-500 font-mono">
                  {GALLERY_IMAGES[activeLightboxIndex].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {GALLERY_IMAGES[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-[#E5E7EB]/80">
                  {GALLERY_IMAGES[activeLightboxIndex].alt}
                </p>
              </div>
              <p className="text-[11px] text-[#E5E7EB]/50">
                Use Left / Right arrow keys to navigate or Esc to close
              </p>
            </div>

            {/* Right Nav */}
            <button
              id="lightbox-next-btn"
              onClick={() =>
                setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0))
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-red-400 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all duration-200 hover:translate-x-0.5"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
