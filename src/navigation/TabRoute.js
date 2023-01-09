import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

import {Calculator} from '../screen';
import HomeStack from './HomeStack';
import NavString from '../Constents/NavavigationString';
import ColorsName from '../Constents/ColorsName.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: ColorsName.Blue,
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarInactiveTintColor: ColorsName.WHITE,
        tabBarActiveTintColor: ColorsName.YELLOW,
      }}>
      <Tab.Screen
        name={NavString.HOME}
        component={HomeStack}
        options={{
          tabBarLabel: t('TrHome:TabHome'),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '800',
          },

          tabBarIcon: ({color}) => <Icon name="home" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name={NavString.CALCULATOR}
        component={Calculator}
        options={{
          tabBarLabel: t('TrHome:TabConv'),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '800',
          },
          tabBarIcon: ({color}) => (
            <Icon name="calculator" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
