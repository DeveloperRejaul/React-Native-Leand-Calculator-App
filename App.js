import React from 'react';
import './src/MulltyLanguige/DCSLocalize.js';
import DrawerNavigator from './src/navigation/DrawerRoute.js';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
