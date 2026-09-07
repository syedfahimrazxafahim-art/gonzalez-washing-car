export interface BusinessInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  phoneRaw: string;
  primaryService: string;
  facebookUrl: string;
  logoUrl: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  alt: string;
  category: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  metricLabel?: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  reviewerInitials: string;
  sampleName: string;
  comment: string;
  vehicleType: string;
}

export interface EstimateFormData {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  projectDetails: string;
  projectLocation: string;
}
