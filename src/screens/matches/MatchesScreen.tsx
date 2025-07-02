import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock matched events
const mockMatches = [
  {
    id: '1',
    eventName: 'Saturday Morning Hike',
    status: 'confirmed',
    date: '2025-07-05',
    participants: 3,
  },
  {
    id: '2',
    eventName: 'Coffee & Code',
    status: 'pending',
    date: '2025-07-04',
    participants: 1,
  },
];

export default function MatchesScreen() {
  const renderMatch = ({ item }: { item: typeof mockMatches[0] }) => (
    <TouchableOpacity style={styles.matchCard}>
      <View style={styles.matchInfo}>
        <Text style={styles.eventName}>{item.eventName}</Text>
        <Text style={styles.matchDate}>{item.date}</Text>
        <Text style={styles.participants}>
          {item.participants} other{item.participants !== 1 ? 's' : ''} interested
        </Text>
      </View>
      <View style={styles.statusContainer}>
        <View 
          style={[
            styles.statusBadge, 
            { backgroundColor: item.status === 'confirmed' ? '#4CAF50' : '#FF9800' }
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Matches</Text>
        <Text style={styles.subtitle}>Events you've shown interest in</Text>
      </View>

      {mockMatches.length > 0 ? (
        <FlatList
          data={mockMatches}
          renderItem={renderMatch}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>No matches yet</Text>
          <Text style={styles.emptySubtext}>
            Start swiping to find activities you're interested in!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const matchesStyles = StyleSheet.create({
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
  listContainer: {
    padding: 20,
  },
  matchCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  matchInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  matchDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  participants: {
    fontSize: 12,
    color: '#999',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
  },
});

// Merge styles
const styles = { ...matchesStyles };