/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {FeedScreen} from '../feed';
import DrawerScreen from '../myDrawer/Drawer';
const Stack = createStackNavigator();

export default class AccNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="mainDrawer" component={DrawerScreen} />
      </Stack.Navigator>
    );
  }
}
