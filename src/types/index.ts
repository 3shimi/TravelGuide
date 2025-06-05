// Core data models based on the PRD

export interface Restaurant {
  id: string;
  name: {
    zh: string;
    en: string;
    ja?: string;
  };
  location: {
    address: string;
    coordinates: [number, number];
    nearestMRT?: string;
    walkingTime?: number;
  };
  category: string[];
  priceRange: 1 | 2 | 3 | 4; // $ to $$$$
  ratings: {
    overall: number;
    foreignerFriendly: number;
    menuTranslation: number;
  };
  menu: MenuItem[];
  images: string[];
  features: string[]; // ['WiFi', 'English Menu', 'Vegetarian Options']
}

export interface MenuItem {
  id: string;
  name: {
    zh: string;
    en: string;
    ja?: string;
  };
  description: {
    zh: string;
    en: string;
    ja?: string;
  };
  price: number;
  images: string[];
  tags: string[]; // ['spicy', 'vegetarian', 'popular']
  allergens: string[];
  spiceLevel: 0 | 1 | 2 | 3 | 4;
  culturalNotes?: {
    en: string;
    ja?: string;
  };
}

export interface Itinerary {
  id: string;
  title: string;
  description?: string;
  duration: number; // 天數
  tags: string[]; // ['foodie', 'culture', 'shopping', 'photography']
  difficulty: 'easy' | 'moderate' | 'challenging';
  budget: 'budget' | 'mid-range' | 'luxury';
  season: string[]; // ['spring', 'summer', 'autumn', 'winter']
  collaborators: string[]; // user IDs
  days: ItineraryDay[];
  author: {
    id: string;
    name: string;
    isLocalExpert: boolean;
  };
  stats: {
    likes: number;
    saves: number;
    views: number;
    rating: number;
  };
}

export interface ItineraryDay {
  day: number;
  date?: string;
  activities: Activity[];
  totalBudget?: number;
  walkingDistance?: number; // km
  notes?: string;
}

export interface Activity {
  id: string;
  type: 'restaurant' | 'attraction' | 'shopping' | 'transport' | 'accommodation';
  name: {
    zh: string;
    en: string;
  };
  location: {
    address: string;
    coordinates: [number, number];
  };
  timeSlot: {
    start: string; // HH:mm
    end?: string;
    duration?: number; // minutes
  };
  estimatedCost?: number;
  priority: 'must-visit' | 'recommended' | 'optional';
  tips?: {
    en: string;
    zh?: string;
  };
  bookingRequired?: boolean;
  relatedPlaces?: string[]; // nearby attractions/restaurants
}

export interface UserPreferences {
  userId: string;
  interests: string[]; // ['food', 'culture', 'nature', 'shopping', 'nightlife']
  dietaryRestrictions: string[]; // ['vegetarian', 'halal', 'gluten-free']
  budgetRange: 'budget' | 'mid-range' | 'luxury';
  mobilityNeeds?: string[]; // ['wheelchair-accessible', 'elderly-friendly']
  language: string;
  travelStyle: 'independent' | 'guided' | 'social';
  pace: 'relaxed' | 'moderate' | 'packed';
}

// Additional utility types
export interface SearchFilters {
  category?: string[];
  priceRange?: number[];
  rating?: number;
  features?: string[];
  location?: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  type: 'question' | 'tip' | 'review' | 'guide';
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  replies: number;
  views: number;
}

export interface LocaleContent {
  zh: string;
  en: string;
  ja?: string;
}