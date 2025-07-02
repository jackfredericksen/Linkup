// src/types/navigation.ts
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Discover: undefined;
  Matches: undefined;
  Profile: undefined;
};

// Event and User types
export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  category: string;
  attendees: number;
  maxAttendees?: number;
  price?: number;
  imageUrl?: string;
  organizer: string;
  source: 'meetup' | 'eventbrite' | 'user-created';
}

export interface User {
  id: string;
  name: string;
  age: number;
  bio?: string;
  interests: string[];
  location: {
    latitude: number;
    longitude: number;
  };
  profilePicture?: string;
}