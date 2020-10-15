/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button, Header} from 'react-native';

export default class HeaderScreen extends Component{
  render() {
    return (
        <Header
  leftComponent={{ icon: 'menu', color: '#red' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
  }
}
