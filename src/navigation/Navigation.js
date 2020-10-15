/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button, LogoTitle} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {EmployeesScreen} from '../employees';
import CreationScreen from '../creationEmployee/CreationEmployee';
import {FeedScreen} from '../feed';
import {CrmScreen} from '../crm';
import {InfoPerScreen} from '../informationPersonelles';
import {InfoProScreen} from '../informations professionelles';
import {CreationAchatScreen} from '../creationAchat';
import {AchatsScreen} from '../achats';
import AchatNavigator from '../achatNavigator/AchatNavigator';
import { CongNav } from '../congNav';
const Stack = createStackNavigator();

export default class NavigationScreen extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles

      <Stack.Navigator initialRouteName="Employees">
        <Stack.Screen
          name="Employees"
          options={{headerShown: false}}
          component={EmployeesScreen}
        />
        <Stack.Screen name="Creation" component={CreationScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="InfoPer" component={InfoPerScreen} />
        <Stack.Screen name="InfoPro" component={InfoProScreen} />
        <Stack.Screen name="Achat" component={AchatNavigator} />
        <Stack.Screen name="Conges" component={CongNav} />

      </Stack.Navigator>
    );
  }
}
