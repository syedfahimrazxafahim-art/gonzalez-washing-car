import React from 'react';
import { Droplets, CheckCircle2, Phone, MapPin, Eye } from 'lucide-react';
import { BUSINESS_DATA, GALLERY_IMAGES } from '../data/business';

interface AboutProps {
  onOpenGallery?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenGallery }) => {
  const aboutImage = GALLERY_IMAGES[1]?.url;

  return (
    <section
      id="about"
      aria-label="About Gonzalez Car Wash"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Graphic with Real Work Photo (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#141414] border border-red-600/30 p-6 sm:p-7 space-y-6 shadow-xl shadow-black/60">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black border border-red-600/40 p-0.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={BUSINESS_DATA.logoUrl}
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {BUSINESS_DATA.name}
                    </h3>
                    <p className="text-xs text-[#E5E7EB]">Los Angeles Car Washing</p>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-red-600/20 text-red-400 font-bold border border-red-600/30">
                  Local Service
                </span>
              </div>

              {/* Real Work Photo in About */}
              {aboutImage && (
                <div
                  className="rounded-xl overflow-hidden aspect-video bg-black border border-white/10 relative cursor-pointer group"
                  onClick={onOpenGallery}
                  title="Click to view full photo gallery"
                >
                  <img
                    src={aboutImage}
                    alt="Gonzalez Car Wash work in progress"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end justify-between p-3 text-xs text-white">
                    <span className="font-semibold">Exterior Hand Wash</span>
                    <span className="text-red-400 text-[11px] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View
                    </span>
                  </div>
                </div>
              )}

              {/* Service Focus Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-black/60 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Car Washing Focus</h4>
                    <p className="text-xs text-[#E5E7EB] mt-0.5 leading-relaxed">
                      Specialized in hand-assisted exterior car washing to keep vehicle surfaces clean and free of road debris.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-black/60 border border-white/5">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Serving Los Angeles</h4>
                    <p className="text-xs text-[#E5E7EB] mt-0.5 leading-relaxed">
                      Conveniently serving car owners, commuters, and residents located throughout the Los Angeles area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-black/60 border border-white/5">
                  <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Communication</h4>
                    <p className="text-xs text-[#E5E7EB] mt-0.5 leading-relaxed">
                      Reach out directly by phone or email to discuss your vehicle wash and request a free estimate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact direct link */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#E5E7EB]">
                <span>Questions or inquiries?</span>
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-red-400 hover:text-red-300 font-semibold cursor-pointer transition-colors font-mono"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Text Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                About Our Business
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Dedicated Car Washing in Los Angeles
              </h2>
            </div>

            <p className="text-base text-[#E5E7EB] leading-relaxed">
              At <strong className="text-white font-semibold">Gonzalez Car Wash</strong>, our primary focus is
              providing thorough, reliable car washing for vehicle owners in Los Angeles. We believe a clean car
              enhances your driving experience and preserves your vehicle’s exterior appearance.
            </p>

            <p className="text-base text-[#E5E7EB] leading-relaxed">
              Whether preparing your vehicle for the work week or washing away California road dust and weather grime,
              we approach every wash with care, ensuring surfaces, glass, and wheels receive attentive hand treatment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#141414] border border-red-600/30">
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Service Scope</p>
                <p className="text-sm font-semibold text-white mt-1">Car Washing</p>
                <p className="text-xs text-[#E5E7EB] mt-0.5">Exterior & surface care for passenger vehicles</p>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-red-600/30">
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Service Territory</p>
                <p className="text-sm font-semibold text-white mt-1">Los Angeles, CA</p>
                <p className="text-xs text-[#E5E7EB] mt-0.5">Serving vehicle owners throughout the area</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-bold text-white bg-red-600 hover:bg-red-500 px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 shadow-md shadow-red-600/30 hover:-translate-y-0.5 gap-2"
              >
                <span>Request a car wash estimate</span>
                <span>→</span>
              </a>

              {onOpenGallery && (
                <button
                  onClick={onOpenGallery}
                  className="inline-flex items-center text-sm font-semibold text-[#E5E7EB] hover:text-white px-4 py-2.5 rounded-full border border-white/20 hover:border-red-500 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4 mr-1.5 text-red-500" />
                  <span>View Photos</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
