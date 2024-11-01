import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

const LibraryPage = ({ navigation, route }) => {
  const recentlyPlayed = [
    { id: '1', name: 'moods', details: '11 playlists' },
    { id: '2', name: 'blends', details: '8 playlists' },
    { id: '3', name: 'favs', details: '14 playlists' },
    { id: '4', name: 'random?', details: '10 playlists' },
  ];

  const { name: routeName } = route;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Library</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>+</Text>
        </View>
        <Text style={styles.buttonText}> Add New Playlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>❤️</Text>
        </View>
        <Text style={styles.buttonText}> Your Liked Songs</Text>
      </TouchableOpacity>

      {/* Recently Played Section */}
      <Text style={styles.sectionTitle}>Recently Played</Text>
      <ScrollView>
        {recentlyPlayed.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image 
              source={{ uri: 'https://cdn.glitch.global/63557b2f-b697-4570-814c-7da2a3d66605/Rectangle%2030%402x.png?v=1730435163778' }}
              style={styles.folderIcon} 
            />
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>{item.details}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navigation}>
        <NavigationButton 
          icon="🏠" 
          label="Home" 
          active={routeName === 'Homepage'} 
          onPress={() => navigation.navigate('Homepage')}
        />
        <NavigationButton 
          icon="🔍" 
          label="Explore" 
          active={routeName === 'ExplorePage'} 
          onPress={() => navigation.navigate('ExplorePage')}
        />
        <NavigationButton 
          icon="📚" 
          label="Library" 
          active={routeName === 'LibraryPage'} 
          onPress={() => navigation.navigate('LibraryPage')}
        />
      </View>
    </SafeAreaView>
  );
};

const NavigationButton = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={[styles.navButton, active && styles.activeNavButton]} onPress={onPress}>
    <Text style={styles.navIcon}>{icon}</Text>
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    color: '#00bcd4',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    color: '#87ceeb',
    fontSize: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  folderIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    color: '#808080',
    fontSize: 14,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1e1e1e',
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 24,
    color: 'white',
  },
  navLabel: {
    color: 'white',
    fontSize: 14,
  },
  activeNavButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#00bcd4',
  },
});

export default LibraryPage;
