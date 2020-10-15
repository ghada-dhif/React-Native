/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CongesScreen} from '../conges';
import MapsScreen from '../maps/maps';
import DrawerScreen from '../myDrawer/Drawer';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export default class mapsNav extends Component {
  render() {
    return (
        <NavigationContainer initialRouteName="mainDrawer">
      <Stack.Navigator>
        <Stack.Screen name="maps" component={MapsScreen} />
        <Stack.Screen name="mainDrawer" component={DrawerScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
