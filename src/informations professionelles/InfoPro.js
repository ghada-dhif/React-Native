/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Picker,
  StyleSheet,
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
export default class InfoProScreen extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logo}>Information Professionelles </Text>
          </View>
          <View>
          <View style={{backgroundColor: 'white', height: 10}} />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Adresse professionnelle:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleEmployee}
            />
          </View>
          <View style={{backgroundColor: '#E5E9E8', height: 10}} />
          <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
            Responsables:
          </Text>
          <View style={{backgroundColor: '#E5E9E8', height: 130}}>
            <Text style={{textAlign: 'left', fontWeight: 'bold'}}>Mentor:</Text>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="" value="" />
              <Picker.Item label="Administrateur" value="Administrateur" />
              <Picker.Item
                label="creer et modifier"
                value="creer et modifier"
              />
            </Picker>
          </View>
          <View style={{backgroundColor: '#E5E9E8', height: 10}} />
          <View style={{backgroundColor: '#E5E9E8', height: 130}}>
            <Text style={{textAlign: 'left', fontWeight: 'bold'}}>congé:</Text>
            <Picker
              selectedValue={this.state.selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({selectedValue: itemValue})
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="Administrateur" value="Administrateur" />
              <Picker.Item
                label="creer et modifier"
                value="creer et modifier"
              />
            </Picker>
          </View>
          <View style={{backgroundColor: '#E5E9E8', height: 150}} />
          <View style={styles.containerA}>
        <View style={{flexDirection: 'row'}} >
          <TouchableOpacity
            style={styles.Btn}>
            <Text style={{color: 'white',}}>Comfirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Btn}>
            <Text style={{color: 'white',}}>Annuler</Text>
          </TouchableOpacity>
      </View>
      </View>
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
  containerA: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  containerB: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
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
    marginBottom: 20,
    alignItems: 'center',
  },
  logoA: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    alignItems: 'center',
  },
  Btn: {
    width: '50%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
});
