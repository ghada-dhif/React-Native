/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingView from '../landingView/landingView';
import DrawerScreen from '../myDrawer/Drawer';
const Stack = createStackNavigator();
export default class LandingContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="landing"
            component={LandingView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'mainDrawer'}
            component={DrawerScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
