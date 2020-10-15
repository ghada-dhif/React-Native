/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {Container, Header, Left, Body, Right,  Title, Item, Input, Icon} from 'native-base';
import ActionButton from 'react-native-action-button';
//import { TouchableOpacity } from 'react-native-gesture-handler';
export default class AchatScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <SafeAreaView>
        <ScrollView>
      <Container>
        <Header>
          <Right>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <Icon
                name="menu"
              />
            </TouchableOpacity>
          </Right>
        </Header>
      <View style={styles.container}>
        <Text style={styles.logo}>Achats Screen</Text>
          <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this.props.navigation.navigate('CreationAchat')}
        />
      </View>
      </Container>
        </ScrollView>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,

  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fb5b5a',
    marginBottom: 50,
    alignItems: 'center',
  },
});