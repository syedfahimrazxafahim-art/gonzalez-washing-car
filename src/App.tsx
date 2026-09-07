import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GalleryModal } from './components/GalleryModal';

export default function App() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Car Washing');

  const scrollToContact = (serviceName = 'Car Washing') => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#E5E7EB] flex flex-col selection:bg-red-600 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenGallery={() => setGalleryOpen(true)}
        onEstimateClick={() => scrollToContact('Car Washing')}
      />

      {/* Main Content strictly in the requested 7-section order */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero onEstimateClick={() => scrollToContact('Car Washing')} />

        {/* 2. About */}
        <About />

        {/* 3. Services */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 4. Why Us */}
        <WhyUs />

        {/* 5. Reviews */}
        <Reviews />

        {/* 6. Contact */}
        <Contact selectedService={selectedService} />
      </main>

      {/* 7. Footer */}
      <Footer onOpenGallery={() => setGalleryOpen(true)} />

      {/* Accessible Gallery Modal & Lightbox */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </div>
  );
}
