import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import {View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';

import Button from './app/components/Button';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {
  
  return (
    //<WelcomeScreen />
    //<ViewImageScreen/>
    //<ListingDetailsScreen/>
    //<Card/>
    <MessagesScreen/>
  );
}
