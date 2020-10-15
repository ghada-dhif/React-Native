/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CreationVenteScreen} from '../creationVente';
import {DonneeScreen} from '../donnee';
import {MethodeScreen} from '../methode';
import {MiseScreen} from '../mise';
const Stack = createStackNavigator();

export default class CreationVenteNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="CreationVente" component={CreationVenteScreen} />
        <Stack.Screen name="donnee" component={DonneeScreen} />
        <Stack.Screen name="mise" component={MiseScreen} />
        <Stack.Screen name="methode" component={MethodeScreen} />
      </Stack.Navigator>
    );
  }
}
