/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {VenteScreen} from '../ventes';
import {CreationVenteNavigator} from '../creationVenteNav';
import {CreationVenteScreen} from '../creationVente';

const Stack = createStackNavigator();

export default class VenteNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Vente" component={VenteScreen} />
        <Stack.Screen name="CreationVente" component={CreationVenteNavigator} />
      </Stack.Navigator>
    );
  }
}
