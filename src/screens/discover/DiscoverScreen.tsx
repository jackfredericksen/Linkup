// src/screens/discover/DiscoverScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import SwipeCards from 'react-native-deck-swiper';
import { Event } from '../../types/navigation';
import EventCard from '../../components/cards/EventCard';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');

// Mock data for prototype
const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Saturday Morning Hike',
    description: 'Join us for a refreshing hike through the local trails. All skill levels welcome!',
    date: '2025-07-05',
    time: '8:00 AM',
    location: {
      address: 'Lincoln Park, Chicago, IL',
      latitude: 41.9189,
      longitude: -87.6359,
    },
    category: 'Outdoor',
    attendees: 12,
    maxAttendees: 20,
    organizer: 'Chicago Hiking Group',
    source: 'meetup',
  },
  {
    id: '2',
    name: 'Pickup Basketball',
    description: 'Casual basketball game at the local court. Bring your A-game!',
    date: '2025-07-03',
    time: '6:00 PM',
    location: {
      address: 'Millennium Park, Chicago, IL',
      latitude: 41.8826,
      longitude: -87.6226,
    },
    category: 'Sports',
    attendees: 8,
    maxAttendees: 12,
    organizer: 'Chicago Ballers',
    source: 'user-created',
  },
  {
    id: '3',
    name: 'Coffee & Code',
    description: 'Bring your laptop and join fellow developers for coffee and coding.',
    date: '2025-07-04',
    time: '10:00 AM',
    location: {
      address: 'Starbucks, River North, Chicago, IL',
      latitude: 41.8955,
      longitude: -87.6295,
    },
    category: 'Networking',
    attendees: 15,
    maxAttendees: 25,
    organizer: 'Chicago Developers',
    source: 'meetup',
  },
];

export default function DiscoverScreen() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [cardIndex, setCardIndex] = useState(0);
  const [userLocation, setUserLocation] = useState<{latitude: number, longitude: number} | null>(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const onSwipedRight = (index: number) => {
    console.log('Swiped right on:', events[index].name);
    Alert.alert('Interested!', `You're interested in "${events[index].name}"`);
    // TODO: Add to user's interested events
  };

  const onSwipedLeft = (index: number) => {
    console.log('Swiped left on:', events[index].name);
    // TODO: Add to user's rejected events
  };

  const onSwipedAll = () => {
    Alert.alert('No more events', 'Check back later for new activities!');
    // TODO: Fetch more events
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>Find activities near you</Text>
      </View>

      <View style={styles.cardContainer}>
        {events.length > 0 ? (
          <SwipeCards
            cards={events}
            renderCard={(event: Event) => <EventCard event={event} />}
            onSwipedRight={onSwipedRight}
            onSwipedLeft={onSwipedLeft}
            onSwipedAll={onSwipedAll}
            cardIndex={cardIndex}
            backgroundColor="transparent"
            stackSize={3}
            cardVerticalMargin={20}
            cardHorizontalMargin={20}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
            overlayLabels={{
              left: {
                title: 'PASS',
                style: {
                  label: {
                    backgroundColor: '#FF6B6B',
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                    padding: 10,
                    borderRadius: 5,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: 'INTERESTED',
                style: {
                  label: {
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                    padding: 10,
                    borderRadius: 5,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
        ) : (
          <View style={styles.noEventsContainer}>
            <Text style={styles.noEventsText}>No events available</Text>
          </View>
        )}
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionText}>
          Swipe right if interested, left to pass
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  noEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEventsText: {
    fontSize: 18,
    color: '#666',
  },
  instructions: {
    padding: 20,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});