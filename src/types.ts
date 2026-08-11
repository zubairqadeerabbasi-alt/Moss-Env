export interface EnvironmentalService {
  id: string;
  title: string;
  category: 'Waste & Recycling' | 'Ecological Restoration' | 'Auditing & Testing' | 'Renewable Energy' | 'Compliance & Advisory';
  description: string;
  fullDetails: string;
  iconName: string;
  image: string;
  benefits: string[];
  badge?: string;
  turnaroundTime: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  fullStory: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  description: string;
  iconName: string;
  growth: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  rating: number;
  quote: string;
  verified: boolean;
  projectCategory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Compliance & Standards' | 'Pricing & Quotes';
}

export interface ServiceRequest {
  serviceId: string;
  clientType: 'Commercial' | 'Municipal' | 'Residential' | 'Industrial';
  name: string;
  email: string;
  phone: string;
  location: string;
  notes: string;
  preferredDate?: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
  status: 'Available' | 'In Use' | 'Ready for Dispatch';
}

