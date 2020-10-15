/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {AchatsScreen} from '../achats';
import {CreationAchatScreen} from '../creationAchat';
const Stack = createStackNavigator();
export default class AchatNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Achat" component={AchatsScreen} />
        <Stack.Screen name="CreationAchat" component={CreationAchatScreen} />
      </Stack.Navigator>
    );
  }
}
