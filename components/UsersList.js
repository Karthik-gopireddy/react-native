import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './HomePage';
import VideosScreen from './VideosScreen';
import DocumentsScreen from './DocumentsScreen';
import AssignmentsScreen from './AssignmentsScreen';

const Tab = createBottomTabNavigator();

export default function UsersList() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Videos') {
              iconName = 'videocam-outline';
            } else if (route.name === 'Documents') {
              iconName = 'document-text-outline';
            } else if (route.name === 'Assignments') {
              iconName = 'folder-outline';
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#B0B0B0',
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Videos" component={VideosScreen} />
        
        <Tab.Screen name="Documents" component={DocumentsScreen} />
        <Tab.Screen name="Assignments" component={AssignmentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#6200EE',
    borderTopColor: '#000000',
    height: 60,
  },
  tabBarLabel: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
