import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_DATA, NAV_ITEMS } from '../data/business';

interface NavbarProps {
  onOpenGallery: () => void;
  onEstimateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGallery, onEstimateClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll for compact appearance & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'why-us', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu scroll lock and keyboard accessibility
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Focus close button
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string, href: string) => {
    if (id === 'gallery') {
      onOpenGallery();
      setMobileMenuOpen(false);
      return;
    }

    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-red-600/30 py-3 shadow-xl shadow-black/60'
          : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo Area */}
        <a
          href="#hero"
          id="navbar-brand-link"
          className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="w-11 h-11 rounded-xl bg-black border border-red-600/40 p-0.5 flex items-center justify-center overflow-hidden shadow-md shadow-red-950/40 group-hover:border-red-500 transition-colors">
            <img
              src={BUSINESS_DATA.logoUrl}
              alt="Gonzalez Car Wash Official Logo"
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white font-display group-hover:text-red-500 transition-colors leading-none">
              {BUSINESS_DATA.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E5E7EB] font-medium mt-1">
              {BUSINESS_DATA.location}, CA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-200 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 ${
                  isActive
                    ? 'text-white font-bold bg-white/10'
                    : 'text-[#E5E7EB] hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-3 -bottom-1 h-0.5 bg-red-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Actions: Phone & Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            id="navbar-phone-btn"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#E5E7EB] hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-600/40 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
            title="Call Gonzalez Car Wash"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span className="tabular-nums font-mono">{BUSINESS_DATA.phone}</span>
          </a>

          <button
            id="navbar-estimate-cta"
            onClick={onEstimateClick}
            className="inline-flex items-center justify-center font-bold text-xs tracking-wider uppercase text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all duration-200 shadow-md shadow-red-600/25 hover:shadow-red-600/45 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Get a Free Estimate
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            id="navbar-phone-mobile-icon"
            className="p-2 text-red-500 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
            aria-label={`Call ${BUSINESS_DATA.phone}`}
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-red-400 rounded-lg hover:bg-white/10 cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay (100dvh) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-50 h-[100dvh] w-full bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-8 pt-[env(safe-area-inset-top,24px)] pb-[env(safe-area-inset-bottom,24px)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar of Mobile Menu */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black border border-red-600/40 p-0.5 overflow-hidden">
                  <img
                    src={BUSINESS_DATA.logoUrl}
                    alt="Gonzalez Car Wash Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="font-bold text-lg text-white font-display">
                  {BUSINESS_DATA.name}
                </span>
              </div>
              <button
                ref={closeButtonRef}
                id="mobile-menu-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-white/80 hover:text-white rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links with large tap targets */}
            <nav className="flex flex-col gap-3 my-auto py-8" aria-label="Mobile menu links">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className="w-full text-left py-3.5 px-4 rounded-xl text-xl font-semibold text-white hover:text-red-400 hover:bg-white/5 border border-transparent hover:border-red-600/30 cursor-pointer transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-5 h-5 text-red-500/80" />
                </button>
              ))}
            </nav>

            {/* Bottom Actions & Contact Info */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                id="mobile-menu-call-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#141414] border border-red-600/30 flex items-center justify-center gap-3 text-sm font-semibold text-white hover:border-red-500 hover:bg-[#1A1A1A] cursor-pointer transition-all"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>

              <button
                id="mobile-menu-estimate-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEstimateClick();
                }}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all text-center text-base shadow-lg shadow-red-600/30"
              >
                Get a Free Estimate
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-[#E5E7EB]">
                  Car Washing • Serving Los Angeles, CA
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
