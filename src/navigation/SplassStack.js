import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavavigationString from '../Constents/NavavigationString.js';
import SplasScreen from '../Components/SplasScreen.js';
import TabNavigator from './TabRoute.js';
const SpalassStack = createNativeStackNavigator();
export default function SplassStack() {
  return (
    <SpalassStack.Navigator>
      <SpalassStack.Screen
        name={NavavigationString.SPLASS_SCREEN}
        component={SplasScreen}
        options={{headerShown: false}}
      />
      <SpalassStack.Screen
        name={NavavigationString.HOME}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </SpalassStack.Navigator>
  );
}
