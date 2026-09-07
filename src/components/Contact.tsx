import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { EstimateFormData } from '../types';

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService = 'Car Washing' }) => {
  const [formData, setFormData] = useState<EstimateFormData>({
    name: '',
    phone: '',
    email: '',
    serviceNeeded: selectedService,
    projectDetails: '',
    projectLocation: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EstimateFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync selectedService prop with form state
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: selectedService }));
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EstimateFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Location or ZIP code in Los Angeles is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  // Construct mailto link with form details
  const mailtoSubject = encodeURIComponent(
    `Free Estimate Request: ${formData.serviceNeeded} - ${formData.name}`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Gonzalez Car Wash,\n\nI would like to request an estimate for car washing services.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service Needed: ${formData.serviceNeeded}\n` +
      `Location / ZIP Code: ${formData.projectLocation}\n` +
      `Details / Vehicle Info: ${formData.projectDetails || 'None provided'}\n\nThank you!`
  );
  const mailtoUrl = `mailto:${BUSINESS_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section
      id="contact"
      aria-label="Contact and Free Estimate Section"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            Inquire Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Get a Free Estimate
          </h2>
          <p className="text-base text-[#E5E7EB] leading-relaxed">
            Reach out directly to arrange your vehicle wash in Los Angeles. Fill out the estimate details
            below or contact us by phone or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#141414] border border-red-600/30 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-black border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-red-600/30 flex items-center justify-center shrink-0 text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="block text-base font-bold text-white hover:text-red-400 cursor-pointer transition-colors mt-0.5 font-mono"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                    <span className="text-xs text-[#E5E7EB]/80">Tap to call directly</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-black border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-red-600/30 flex items-center justify-center shrink-0 text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${BUSINESS_DATA.email}`}
                      className="block text-sm sm:text-base font-bold text-white hover:text-red-400 cursor-pointer transition-colors break-all mt-0.5"
                    >
                      {BUSINESS_DATA.email}
                    </a>
                    <span className="text-xs text-[#E5E7EB]/80">Send email inquiries</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-black border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-red-600/30 flex items-center justify-center shrink-0 text-red-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      Service Location
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">
                      {BUSINESS_DATA.location}, California
                    </p>
                    <span className="text-xs text-[#E5E7EB]/80">
                      Serving vehicle owners across the LA area
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-black border border-white/20 hover:border-red-500 hover:bg-white/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Estimate Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#141414] border border-red-600/30 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Estimate Request Form
              </h3>
              <p className="text-xs text-[#E5E7EB] mb-6">
                Please provide your vehicle details and Los Angeles location for a prompt estimate.
              </p>

              {submitted ? (
                /* Honest Submission Feedback */
                <div
                  id="form-submission-feedback"
                  className="p-6 rounded-xl bg-black border border-red-600/40 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Estimate Request Prepared
                      </h4>
                      <p className="text-sm text-[#E5E7EB] mt-1 leading-relaxed">
                        Your request details have been gathered. Because automated backend submission
                        is not connected for this demo, you can send these exact details directly to{' '}
                        <strong className="text-white">{BUSINESS_DATA.email}</strong> via email, or call{' '}
                        <strong className="text-white">{BUSINESS_DATA.phone}</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#141414] border border-white/5 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#E5E7EB]">Name:</span>
                      <span className="font-semibold text-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#E5E7EB]">Phone:</span>
                      <span className="font-semibold text-white">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#E5E7EB]">Service:</span>
                      <span className="font-semibold text-red-400">{formData.serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#E5E7EB]">Location:</span>
                      <span className="font-semibold text-white">{formData.projectLocation}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      id="submit-mailto-action-btn"
                      href={mailtoUrl}
                      className="w-full inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider text-white py-3.5 px-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-red-600/25 gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto py-3 px-5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white hover:text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form id="estimate-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-semibold text-white mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black border text-white text-sm placeholder-white/20 transition-colors focus:bg-[#111] ${
                          errors.name ? 'border-red-600' : 'border-white/15 focus:border-red-500'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-[11px] text-red-400 mt-1 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-phone"
                        className="block text-xs font-semibold text-white mb-1"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(213) 000-0000"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black border text-white text-sm placeholder-white/20 transition-colors focus:bg-[#111] ${
                          errors.phone ? 'border-red-600' : 'border-white/15 focus:border-red-500'
                        }`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-[11px] text-red-400 mt-1 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-semibold text-white mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black border text-white text-sm placeholder-white/20 transition-colors focus:bg-[#111] ${
                          errors.email ? 'border-red-600' : 'border-white/15 focus:border-red-500'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-red-400 mt-1 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-location"
                        className="block text-xs font-semibold text-white mb-1"
                      >
                        Location or ZIP Code in LA <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-location"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, projectLocation: e.target.value })
                        }
                        placeholder="e.g. Downtown LA or 90012"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black border text-white text-sm placeholder-white/20 transition-colors focus:bg-[#111] ${
                          errors.projectLocation
                            ? 'border-red-600'
                            : 'border-white/15 focus:border-red-500'
                        }`}
                        aria-invalid={!!errors.projectLocation}
                        aria-describedby={errors.projectLocation ? 'location-error' : undefined}
                      />
                      {errors.projectLocation && (
                        <p id="location-error" className="text-[11px] text-red-400 mt-1 font-medium">
                          {errors.projectLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-semibold text-white mb-1"
                    >
                      Service Needed
                    </label>
                    <select
                      id="form-service"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeeded: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:border-red-500 focus:bg-[#111] transition-colors cursor-pointer"
                    >
                      <option value="Car Washing">Car Washing (Primary Service)</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="form-details"
                      className="block text-xs font-semibold text-white mb-1"
                    >
                      Project Details / Vehicle Information
                    </label>
                    <textarea
                      id="form-details"
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDetails: e.target.value })
                      }
                      placeholder="Vehicle make/model, preferred day, or specific cleaning requests..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm placeholder-white/20 focus:border-red-500 focus:bg-[#111] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-estimate-form-btn"
                    className="w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                  >
                    <span>Request Free Estimate</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
