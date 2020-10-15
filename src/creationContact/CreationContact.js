/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
export default class CreationContactScreen extends Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
      <View>
        <Text> creation Contacts Screen</Text>
      </View>
      <View style={{backgroundColor: '#fb5b5a', height: 5}} />
      </ScrollView>
      </SafeAreaView>
    );
  }
}
