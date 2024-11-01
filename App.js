// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screen components
import Onboarding from './Onboarding'; // Onboarding screen component
import SignIn from './SignIn';         // SignIn screen component
import Intro from './Intro';           // Intro screen component
import Login from './Login';           // Login screen component
import Homepage from './Homepage';     // Homepage component
import ExplorePage from './ExplorePage'; // Explore Page component
import LibraryPage from './LibraryPage'; // Library Page component
import FoldersPage from './FoldersPage'; // FoldersPage Page component
// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Stack Navigator for different screens */}
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="ExplorePage" component={ExplorePage} />
        <Stack.Screen name="LibraryPage" component={LibraryPage} />
        <Stack.Screen name="FoldersPage" component={FoldersPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
