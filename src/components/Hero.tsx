import React from 'react';
import { Phone, ArrowRight, MapPin, Sparkles, Eye } from 'lucide-react';
import { BUSINESS_DATA, GALLERY_IMAGES } from '../data/business';

interface HeroProps {
  onEstimateClick: () => void;
  onOpenGallery?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEstimateClick, onOpenGallery }) => {
  const showcaseImage = GALLERY_IMAGES[0]?.url;

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle radial ambient glow behind hero - red, dark & clean */}
      <div 
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-b from-red-600/15 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-red-600/40 text-xs font-semibold text-[#E5E7EB] shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Serving {BUSINESS_DATA.location}, CA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
            {BUSINESS_DATA.name}
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#E5E7EB] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Professional car washing service dedicated to keeping vehicles in Los Angeles clean,
            sharp, and looking their best. Honest, careful exterior and surface vehicle care.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              id="hero-primary-estimate-cta"
              onClick={onEstimateClick}
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-xs tracking-wider uppercase text-white px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              id="hero-secondary-call-cta"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-xs tracking-wider uppercase text-white px-7 py-3.5 rounded-full bg-[#141414] border border-white/20 hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <Phone className="w-4 h-4 mr-2 text-red-500" />
              <span>Call Now</span>
            </a>

            {onOpenGallery && (
              <button
                id="hero-view-gallery-btn"
                onClick={onOpenGallery}
                className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-xs tracking-wider uppercase text-[#E5E7EB] hover:text-white px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4 mr-1.5 text-red-500" />
                <span>View Photos</span>
              </button>
            )}
          </div>

          {/* Quick Info Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-red-500 font-bold">Primary Service</p>
              <p className="text-sm font-semibold text-white mt-0.5">{BUSINESS_DATA.primaryService}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-red-500 font-bold">Direct Phone</p>
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="text-sm font-semibold text-white mt-0.5 block hover:text-red-400 cursor-pointer transition-colors font-mono"
              >
                {BUSINESS_DATA.phone}
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] uppercase tracking-wider text-red-500 font-bold">Service Area</p>
              <p className="text-sm font-semibold text-white mt-0.5">{BUSINESS_DATA.location}, CA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Real Vehicle Showcase & Brand Presentation (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl bg-[#141414] border border-red-600/40 p-4 sm:p-5 shadow-2xl shadow-red-950/30 overflow-hidden group">
            {/* Top Info Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Gonzalez Car Wash
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">
                Los Angeles, CA
              </span>
            </div>

            {/* Showcase Image with interactive preview cursor */}
            <div
              className="relative my-3 rounded-xl overflow-hidden bg-black border border-white/10 aspect-[4/3] flex items-center justify-center cursor-pointer group/img"
              onClick={onOpenGallery}
              title="Click to view full photo gallery"
            >
              <img
                src={showcaseImage}
                alt="Gonzalez Car Wash vehicle presentation in Los Angeles"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                loading="eager"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/img:opacity-90 transition-opacity flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-500" />
                    <span className="font-semibold">Clean Exterior Results</span>
                  </div>
                  <span className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> View Gallery
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Visual Highlights */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-black border border-red-600/50 p-0.5 overflow-hidden">
                  <img
                    src={BUSINESS_DATA.logoUrl}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-white">Hand Car Wash Care</span>
              </div>
              <span className="text-red-500 font-bold uppercase tracking-wider text-[10px]">
                Quality Wash
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
