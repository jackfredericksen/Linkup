// src/components/cards/EventCard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Event } from '../../types/navigation';

const { width } = Dimensions.get('window');

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'outdoor':
        return 'leaf';
      case 'sports':
        return 'basketball';
      case 'networking':
        return 'people';
      case 'food':
        return 'restaurant';
      case 'music':
        return 'musical-notes';
      default:
        return 'calendar';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'outdoor':
        return '#4CAF50';
      case 'sports':
        return '#FF9800';
      case 'networking':
        return '#2196F3';
      case 'food':
        return '#E91E63';
      case 'music':
        return '#9C27B0';
      default:
        return '#607D8B';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.categoryContainer}>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(event.category) }]}>
            <Ionicons 
              name={getCategoryIcon(event.category)} 
              size={16} 
              color="white" 
            />
            <Text style={styles.categoryText}>{event.category}</Text>
          </View>
        </View>
        <Text style={styles.source}>{event.source}</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.eventName}>{event.name}</Text>
        
        <View style={styles.eventInfo}>
          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={18} color="#666" />
            <Text style={styles.infoText}>
              {formatDate(event.date)} at {event.time}
            </Text>
          </View>
          
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={18} color="#666" />
            <Text style={styles.infoText} numberOfLines={1}>
              {event.location.address}
            </Text>
          </View>
          
          <View style={styles.infoRow}>
            <Ionicons name="people-outline" size={18} color="#666" />
            <Text style={styles.infoText}>
              {event.attendees} attending
              {event.maxAttendees && ` (${event.maxAttendees} max)`}
            </Text>
          </View>

          {event.price && (
            <View style={styles.infoRow}>
              <Ionicons name="card-outline" size={18} color="#666" />
              <Text style={styles.infoText}>${event.price}</Text>
            </View>
          )}
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {event.description}
        </Text>

        <View style={styles.organizer}>
          <Text style={styles.organizerLabel}>Organized by</Text>
          <Text style={styles.organizerName}>{event.organizer}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width - 40,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryContainer: {
    flex: 1,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  categoryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  source: {
    fontSize: 12,
    color: '#999',
    textTransform: 'capitalize',
  },
  cardContent: {
    flex: 1,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  eventInfo: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 16,
  },
  organizer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  organizerLabel: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  organizerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 2,
  },
  cardFooter: {
    alignItems: 'center',
    marginTop: 12,
  },
  detailsButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});