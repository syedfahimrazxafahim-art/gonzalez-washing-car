import { BusinessInfo, NavItem, ValueCard, ReviewItem, GalleryImage } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: "Gonzalez Car Wash",
  location: "Los Angeles",
  email: "juangj82@yahoo.com",
  phone: "213-840-8767",
  phoneRaw: "2138408767",
  primaryService: "Car Washing",
  facebookUrl: "https://www.facebook.com/profile.php?id=61552979174920&utm_source=chatgpt.com",
  logoUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1788811458/708345536_122248849856099305_1462820226780556736_n.jpg",
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "showcase-vehicle",
    url: "https://res.cloudinary.com/fzobzdco/image/upload/v1788811467/d993df7f-e198-42bd-b647-211ebffbf5ab.png",
    title: "Vehicle Presentation",
    alt: "Vehicle showcase displaying clean exterior presentation",
    category: "Featured Presentation",
  },
  {
    id: "work-photo-1",
    url: "https://res.cloudinary.com/fzobzdco/image/upload/v1788811470/681775464_122244687356099305_7912604262918527867_n.jpg",
    title: "Exterior Vehicle Wash",
    alt: "Vehicle exterior during professional car wash service",
    category: "Exterior Wash",
  },
  {
    id: "work-photo-2",
    url: "https://res.cloudinary.com/fzobzdco/image/upload/v1788811473/492008032_122192960648099305_884501028133337942_n.jpg",
    title: "Surface Clean & Detail",
    alt: "Thorough exterior surface cleaning and hand car wash",
    category: "Surface Care",
  },
  {
    id: "work-photo-3",
    url: "https://res.cloudinary.com/fzobzdco/image/upload/v1788811477/491996525_122193189518099305_2147711472160957025_n.jpg",
    title: "Attentive Hand Wash",
    alt: "Attentive hand washing for passenger vehicle surfaces",
    category: "Hand Wash",
  },
  {
    id: "work-photo-4",
    url: "https://res.cloudinary.com/fzobzdco/image/upload/v1788811479/491588001_122192961038099305_597494309924776719_n.jpg",
    title: "Clean Finish Results",
    alt: "Clean and refreshed vehicle finish after exterior car wash",
    category: "Clean Results",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/**
 * Value cards for the Why Us section.
 * Using strictly safe, non-factual-claim themes as specified:
 * Professional Presentation, Convenient Service, Clean Results, Customer Focus.
 */
export const WHY_US_CARDS: ValueCard[] = [
  {
    id: 'presentation',
    title: 'Professional Presentation',
    description: 'Committed to delivering a clean, sharp finish that elevates the everyday look and road presence of your vehicle.',
    iconName: 'Sparkles',
  },
  {
    id: 'convenient',
    title: 'Convenient Service',
    description: 'Straightforward car washing solutions thoughtfully coordinated for vehicles throughout the Los Angeles area.',
    iconName: 'Clock',
  },
  {
    id: 'clean-results',
    title: 'Clean Results',
    description: 'Thorough hand-focused exterior and surface care designed to lift roadway grime and leave a refreshed finish.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'customer-focus',
    title: 'Customer Focus',
    description: 'Direct, clear communication by phone or email to help you schedule your car wash estimate without hassle.',
    iconName: 'UserCheck',
  },
];

/**
 * Sample reviews strictly for layout preview purposes only.
 * Not genuine customer feedback; no ratings or platform badges are claimed.
 */
export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    reviewerInitials: 'LA',
    sampleName: 'Sample Reviewer A',
    vehicleType: 'Sedan Wash',
    comment: 'Great attention to detail on the exterior rinse and hand wash. The vehicle looked thoroughly refreshed and ready for the week.',
  },
  {
    id: 'rev-2',
    reviewerInitials: 'MC',
    sampleName: 'Sample Reviewer B',
    vehicleType: 'SUV Wash',
    comment: 'Prompt communication when requesting an estimate. Thorough cleaning across all surfaces and wheels.',
  },
  {
    id: 'rev-3',
    reviewerInitials: 'DR',
    sampleName: 'Sample Reviewer C',
    vehicleType: 'Truck Wash',
    comment: 'Reliable service right here in Los Angeles. Clean glass, spotless mirrors, and careful hand drying.',
  },
  {
    id: 'rev-4',
    reviewerInitials: 'ER',
    sampleName: 'Sample Reviewer D',
    vehicleType: 'Compact Car Wash',
    comment: 'Very polite service and honest attention to customer requests. Left the exterior spotless.',
  },
];
