import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_DATA, NAV_ITEMS } from '../data/business';

interface FooterProps {
  onOpenGallery: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGallery }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string, href: string) => {
    if (id === 'gallery') {
      onOpenGallery();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-black border-t border-red-600/30 py-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Brand Info with Logo */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Gonzalez Car Wash Logo"
                className="w-9 h-9 rounded-full object-cover border border-red-600/50 shadow-sm"
              />
              <span className="font-bold text-lg text-white font-display">
                {BUSINESS_DATA.name}
              </span>
            </div>
            <p className="text-xs text-[#E5E7EB] leading-relaxed">
              Professional automotive car washing service dedicated to vehicle owners in Los Angeles, California.
            </p>
          </div>

          {/* Minimal Navigation */}
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-[#E5E7EB]"
            aria-label="Footer Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                id={`footer-nav-${item.id}`}
                onClick={() => handleNavClick(item.id, item.href)}
                className="hover:text-red-500 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 rounded py-1 px-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Direct Contact Links and Facebook Icon */}
          <div className="flex flex-col items-center md:items-end gap-3 text-xs">
            <div className="flex flex-col items-center md:items-end gap-1.5">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="flex items-center gap-1.5 text-white hover:text-red-400 cursor-pointer transition-colors font-mono"
                id="footer-phone-link"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span className="tabular-nums font-bold">{BUSINESS_DATA.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_DATA.email}`}
                className="flex items-center gap-1.5 text-white hover:text-red-400 cursor-pointer transition-colors"
                id="footer-email-link"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{BUSINESS_DATA.email}</span>
              </a>

              <span className="flex items-center gap-1 text-[#E5E7EB]/80">
                <MapPin className="w-3 h-3 text-red-500" />
                <span>{BUSINESS_DATA.location}, CA</span>
              </span>
            </div>

            {/* Facebook Icon Link */}
            <div className="pt-2">
              <a
                id="footer-facebook-link"
                href={BUSINESS_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Gonzalez Car Wash on Facebook."
                className="w-9 h-9 rounded-lg bg-[#141414] border border-red-600/30 flex items-center justify-center text-white hover:text-red-400 hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                title="Visit Gonzalez Car Wash on Facebook."
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E5E7EB]/70 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_DATA.name}. All rights reserved.</p>
          <p className="text-white font-medium">
            Automotive Car Washing • Serving Los Angeles, California
          </p>
        </div>
      </div>
    </footer>
  );
};
