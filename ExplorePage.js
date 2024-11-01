import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Search = ({ navigation, routeName }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Main Content Area */}
      <ScrollView style={styles.content}>
        {/* Icons above the search bar */}
        <View style={styles.iconContainer}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/d67c77ea-6f26-44b5-a5a4-07cca9f2db7d/musium%20logo.png?v=1728023297973' }}
            style={styles.logoIcon} 
          />
          <Image 
            source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/Search.png?v=1730275180549' }}
            style={styles.searchIcon} 
          />
        </View>
        
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/browse.png?v=1730275917754' }} 
            style={styles.overlayIcon} 
          />
          <TextInput
            placeholder="Songs, Artists, Podcasts & More"
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>

        {/* Your Top Genres Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Your Top Genres</Text>
          <View style={styles.boxes}>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/Mask%20group%20(1).png?v=1730276378174' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/Indie.png?v=1730276143345' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/rnb.png?v=1730276429376' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/pop%20(1).png?v=1730276429928' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Browse All Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Browse All</Text>
          <View style={styles.boxes}>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/u.png?v=1730276489426' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/new.png?v=1730276524270' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/charts.png?v=1730276534089' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/pods.png?v=1730276554587' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/bol.png?v=1730276617684' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/380ae28e-72ad-4e56-b5a3-2e3647e2684c/indie%20(1).png?v=1730276628452' }}
                style={styles.boxImage} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Navigation Section at the Bottom */}
      <View style={styles.navigation}>
        <TouchableOpacity style={[styles.navButton, routeName === 'Homepage' && styles.activeNavButton]} onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.navText}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, routeName === 'ExplorePage' && styles.activeNavButton]} onPress={() => navigation.navigate('ExplorePage')}>
          <Text style={styles.navText}>🔍</Text>
          <Text style={styles.navLabel}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, routeName === 'LibraryPage' && styles.activeNavButton]} onPress={() => navigation.navigate('LibraryPage')}>
          <Text style={styles.navText}>📚</Text>
          <Text style={styles.navLabel}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logoIcon: {
    width: 63,
    height: 48,
    marginHorizontal: 5,
  },
  searchIcon: {
    height: 20,
    flex: 1,
    marginHorizontal: 5,
    marginLeft: -200,
    resizeMode: 'contain',
  },
    searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 35, // Adjusted padding to avoid overlap with the icon
    color: 'white',
  },
  overlayIcon: {
    position: 'absolute',
    left: 10,
    top: 12, // Adjusted vertical position to center-align with TextInput
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  section: {
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  box: {
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    flexBasis: '45%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingVertical: 10,
    backgroundColor: '#1e1e1e', // Background color for the bottom navigation
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 24,
    color: 'white',
  },
  navLabel: {
    color: 'white',
  },
  activeNavButton: {
    backgroundColor: '#444', // Darker background to indicate active tab
    borderRadius: 5,
    padding: 5,
  },
});

export default Search;
