/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Permissions from 'react-native-maps';
//import { TouchableOpacity } from 'react-native-gesture-handler';
export default class MapsScreen extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1, height: 400, width: 400}}
        initialRegion={{
          latitude: 35.764252,
          longitude: 10.811289,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    );
  }
}
