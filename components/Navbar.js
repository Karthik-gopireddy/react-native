import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideosScreen from './VideosScreen';
import DocumentsScreen from './DocumentsScreen';
import AssignmentsScreen from './AssignmentsScreen';
import { StyleSheet,Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
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
    borderTopColor: '#6200EE',
    height: 60,
  },
  tabBarLabel: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
