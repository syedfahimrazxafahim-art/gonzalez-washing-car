import React from 'react';
import { Sparkles, Clock, ShieldCheck, UserCheck } from 'lucide-react';
import { WHY_US_CARDS } from '../data/business';

export const WhyUs: React.FC = () => {
  // Mapping icon names to Lucide components with red accents
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-red-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-red-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section
      id="why-us"
      aria-label="Why Choose Gonzalez Car Wash"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Why Choose Gonzalez Car Wash
          </h2>
          <p className="text-base text-[#E5E7EB] leading-relaxed">
            Straightforward, dedicated vehicle washing values centered on clean results and dependable customer care in Los Angeles.
          </p>
        </div>

        {/* Scroll-Stacking Cards Container (Desktop: Sticky Overlap / Mobile: Vertical Stack) */}
        <div className="relative space-y-6 md:space-y-8 pb-4">
          {WHY_US_CARDS.map((card, index) => {
            // Staggered top offset for sticky stacking on desktop
            const topOffsetClass =
              index === 0
                ? 'md:top-28'
                : index === 1
                ? 'md:top-36'
                : index === 2
                ? 'md:top-44'
                : 'md:top-52';

            return (
              <div
                key={card.id}
                id={`why-card-${card.id}`}
                className={`w-full rounded-2xl bg-[#141414] border border-red-600/30 hover:border-red-500/60 p-6 sm:p-8 shadow-2xl transition-all duration-300 md:sticky ${topOffsetClass}`}
                style={{
                  zIndex: 10 + index,
                }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-black border border-red-600/40 flex items-center justify-center shrink-0 shadow-inner">
                      {renderIcon(card.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-red-500 font-bold">
                        Value 0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-red-600/15 border border-red-600/30">
                    Gonzalez Car Wash
                  </span>
                </div>

                <div className="pt-4">
                  <p className="text-sm sm:text-base text-[#E5E7EB] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
