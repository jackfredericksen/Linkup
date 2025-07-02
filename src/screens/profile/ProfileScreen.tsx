import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const mockUser = {
    name: 'Alex Johnson',
    age: 28,
    bio: 'Love exploring new activities and meeting like-minded people!',
    interests: ['Hiking', 'Basketball', 'Coffee', 'Networking', 'Photography'],
    eventsAttended: 15,
    location: 'Chicago, IL',
  };

  return (
    <SafeAreaView style={profileStyles.container}>
      <ScrollView contentContainerStyle={profileStyles.content}>
        <View style={profileStyles.header}>
          <Text style={profileStyles.title}>Profile</Text>
        </View>

        <View style={profileStyles.profileCard}>
          <View style={profileStyles.avatar}>
            <Ionicons name="person" size={48} color="#666" />
          </View>
          
          <Text style={profileStyles.name}>{mockUser.name}</Text>
          <Text style={profileStyles.ageLocation}>
            {mockUser.age} • {mockUser.location}
          </Text>
          
          <Text style={profileStyles.bio}>{mockUser.bio}</Text>
          
          <View style={profileStyles.statsContainer}>
            <View style={profileStyles.stat}>
              <Text style={profileStyles.statNumber}>{mockUser.eventsAttended}</Text>
              <Text style={profileStyles.statLabel}>Events Attended</Text>
            </View>
          </View>
        </View>

        <View style={profileStyles.section}>
          <Text style={profileStyles.sectionTitle}>Interests</Text>
          <View style={profileStyles.interestsContainer}>
            {mockUser.interests.map((interest, index) => (
              <View key={index} style={profileStyles.interestTag}>
                <Text style={profileStyles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={profileStyles.menuSection}>
          <TouchableOpacity style={profileStyles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="#666" />
            <Text style={profileStyles.menuText}>Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={profileStyles.menuItem}>
            <Ionicons name="help-circle-outline" size={24} color="#666" />
            <Text style={profileStyles.menuText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={profileStyles.menuItem}>
            <Ionicons name="log-out-outline" size={24} color="#FF6B6B" />
            <Text style={[profileStyles.menuText, { color: '#FF6B6B' }]}>Log Out</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingBottom: 40,
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
  profileCard: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  ageLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  section: {
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestTag: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  interestText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  menuSection: {
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
});