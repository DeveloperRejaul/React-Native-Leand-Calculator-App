import React from 'react';
import DrawerNavigator from './DrawerRoute';
import {NavigationContainer} from '@react-navigation/native';

export default function MainStack() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
