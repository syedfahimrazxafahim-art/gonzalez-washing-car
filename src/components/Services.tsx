import React from 'react';
import { Sparkles, Check, ArrowRight, Phone, Droplets, Eye } from 'lucide-react';
import { BUSINESS_DATA, GALLERY_IMAGES } from '../data/business';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
  onOpenGallery?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenGallery }) => {
  const serviceImage = GALLERY_IMAGES[2]?.url;

  const washFeatures = [
    {
      title: "Exterior Surface Hand Wash",
      description: "Careful cleaning of vehicle paintwork, bumpers, and side panels to remove road dust and grime.",
    },
    {
      title: "Wheel & Rim Surface Cleaning",
      description: "Rinsing and washing wheels and tire faces to clear accumulated roadway dirt and brake dust.",
    },
    {
      title: "Exterior Glass & Mirror Wipe",
      description: "Thorough cleaning of windshield, rear glass, side windows, and side mirrors for clear visibility.",
    },
    {
      title: "Clean Towel Hand Dry",
      description: "Attentive hand drying across body surfaces and crevices to prevent water spot formation.",
    },
  ];

  return (
    <section
      id="services"
      aria-label="Services Section"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl text-center sm:text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            Our Primary Offering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Automotive Car Washing
          </h2>
          <p className="text-base text-[#E5E7EB] leading-relaxed">
            Our specialized focus is delivering a complete, attentive hand car wash for your vehicle.
            We take pride in leaving your car cleanly washed and refreshed.
          </p>
        </div>

        {/* Visually Dominant Car Washing Feature Card */}
        <div className="rounded-2xl bg-[#141414] border-2 border-red-600/40 p-6 sm:p-10 shadow-2xl shadow-red-950/20 relative overflow-hidden">
          {/* Subtle accent corner glow */}
          <div 
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-red-600/10 to-transparent pointer-events-none blur-2xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black border border-red-600/40 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                <span>Primary Service • Los Angeles, CA</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Complete Car Washing Service
                </h3>
                <p className="text-sm sm:text-base text-[#E5E7EB] mt-2 leading-relaxed">
                  Tailored to keep your car looking sharp and well-maintained. We handle sedans,
                  coupes, SUVs, and trucks with meticulous care from bumper to bumper.
                </p>
              </div>

              {/* Service Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {washFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-black/70 border border-white/10"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-[#E5E7EB] mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  id="services-estimate-cta"
                  onClick={() => onSelectService('Car Washing')}
                  className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-xs tracking-wider uppercase text-white px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                >
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <a
                  id="services-phone-cta"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-xs tracking-wider uppercase text-white px-6 py-3.5 rounded-full bg-black border border-white/20 hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                >
                  <Phone className="w-4 h-4 mr-2 text-red-500" />
                  <span>Call {BUSINESS_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Representation with Real Photo (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              {serviceImage && (
                <div
                  className="rounded-xl overflow-hidden aspect-[4/3] bg-black border border-red-600/30 relative cursor-pointer group shadow-xl"
                  onClick={onOpenGallery}
                  title="Click to view full photo gallery"
                >
                  <img
                    src={serviceImage}
                    alt="Gonzalez Car Wash car washing work in Los Angeles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-1.5">
                        <Droplets className="w-4 h-4 text-red-500" />
                        <span className="font-semibold">Surface Wash & Finish</span>
                      </div>
                      <span className="text-[11px] text-red-400 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> View Gallery
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-xl bg-black border border-white/10 p-5 space-y-3 text-center sm:text-left">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
                    Service Summary
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 font-bold border border-red-600/30">
                    Active
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                    <span className="text-[#E5E7EB]">Service Focus</span>
                    <span className="font-semibold text-white">Car Washing</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                    <span className="text-[#E5E7EB]">Service Location</span>
                    <span className="font-semibold text-white">Los Angeles, CA</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/5">
                    <span className="text-[#E5E7EB]">Vehicles Supported</span>
                    <span className="font-semibold text-white">Cars, SUVs, Trucks</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1">
                    <span className="text-[#E5E7EB]">Pricing</span>
                    <span className="font-semibold text-red-400">Free Custom Estimates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
