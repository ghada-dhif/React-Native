/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../feed/Feed';
import SettingScreen from '../setting/setting';
import AchatScreen from '../achats/Achats';
import CrmScreen from '../crm/Crm';
import VentesScreen from '../ventes/Ventes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AchatNavigator from '../achatNavigator/AchatNavigator';
import {CongesScreen} from '../conges';
const Tab = createBottomTabNavigator();
export default class TabScreen extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName={'Feed'}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home';
            }  else if (route.name === 'Ventes') {
              iconName = focused ? 'search-dollar' : 'search-dollar';
            } else if (route.name === 'Achats') {
              iconName = focused ? 'dollar-sign' : 'dollar-sign';
            }  else if (route.name === 'Conges') {
              iconName = focused ? 'dollar-sign' : 'umbrella-beach';
            }
            else if (route.name === 'Setting') {
              iconName = focused ? 'cogs' : 'cogs';
            } else if (route.name === 'CRM') {
              iconName = focused ? 'cogs' : 'cuttlefish';
            }
            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Ventes" component={VentesScreen} />
        <Tab.Screen name="Achats" component={AchatNavigator} />
        <Tab.Screen name="Conges" component={CongesScreen} />
        <Tab.Screen name="CRM" component={CrmScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    );
  }
}
