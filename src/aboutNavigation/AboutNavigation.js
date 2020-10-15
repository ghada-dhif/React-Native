/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AboutScreen} from '../about';
import DrawerScreen from '../myDrawer/Drawer';
const Stack = createStackNavigator();

export default class AboutNavigationScreen extends Component {
  render() {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="mainDrawer">
      <Stack.Screen
            name={'mainDrawer'}
            component={DrawerScreen}
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
