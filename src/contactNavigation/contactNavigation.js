/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CreationContactScreen} from '../creationContact';
import {ContactsScreen} from '../contacts';
const Stack = createStackNavigator();
export default class ContactNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={ContactsScreen} />
        <Stack.Screen name="CreationContact" component={CreationContactScreen} />
      </Stack.Navigator>
    );
  }
}
