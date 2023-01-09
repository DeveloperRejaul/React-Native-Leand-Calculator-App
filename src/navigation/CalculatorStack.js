import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavString from '../Constents/NavavigationString';
import {Calculator} from '../screen';

const Stack = createNativeStackNavigator();

export default function CalculatorStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavString.CALCULATOR} component={Calculator} />
    </Stack.Navigator>
  );
}
