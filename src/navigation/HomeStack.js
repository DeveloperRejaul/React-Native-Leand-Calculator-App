import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavString from '../Constents/NavavigationString';
import {
  Home,
  Rectangular,
  Triangular,
  Circle,
  Circular,
  Ellipse,
  Square,
  Akok,
  Polygon,
} from '../screen';
import ColorsName from '../Constents/ColorsName.js';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorsName.Blue,
        },
        transitionSpec: {
          open: config,
          close: config,
        },
        headerTintColor: ColorsName.WHITE,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={NavString.HOME}
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={NavString.SQUARE}
        component={Square}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavString.RECTANGULAR}
        component={Rectangular}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavString.TRIANGULAR}
        component={Triangular}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavString.CIRCULAR}
        component={Circular}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavString.CIRCLE}
        component={Circle}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavString.ELLIPSE}
        component={Ellipse}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavString.POLYGON}
        component={Polygon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavString.ALL_AKOK}
        component={Akok}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
