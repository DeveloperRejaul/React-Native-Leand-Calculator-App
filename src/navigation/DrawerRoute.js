import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import {About, Calculator, Privacy} from '../screen';
import NavString from '../Constents/NavavigationString';
import SplassStack from './SplassStack.js';
import Settings from '../screen/Settings/Settings.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={NavString.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name={NavString.HOME} component={SplassStack} />
      <Drawer.Screen name={`${NavString.CALCULATOR}2`} component={Calculator} />
      <Drawer.Screen name={NavString.ABOUT} component={About} />
      <Drawer.Screen name={NavString.PRIVACY} component={Privacy} />
      <Drawer.Screen name={NavString.SETTINGS} component={Settings} />
    </Drawer.Navigator>
  );
}
