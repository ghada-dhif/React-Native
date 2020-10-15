/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {Container, Header, Left, Body, Right,  Title, Item, Input, Icon} from 'native-base';
//import { TouchableOpacity } from 'react-native-gesture-handler';
export default class DonneeScreen extends Component {
  render() {
    return (
      <SafeAreaView >
        <ScrollView>
      <View style={styles.container}>
        <Text style={styles.logo}>Donnee Screen</Text>
      </View>
      <View style={{backgroundColor: '#fb5b5a', height: 5}} />
      <View style={styles.containerB} >
      <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Nom de la société"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          </View>
          <View style={styles.containerA} >
          <Text style={styles.logoA}>Adresse:</Text>
          </View>
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="RUE"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="RUE2"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Ville"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Code Postale"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Telephone"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="courriel"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Site Web"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Numéro de TVA"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Registre De lA Société"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <View style={{backgroundColor: 'white', height: 5}} />
          <View style={styles.containerA}>
        <View style={{flexDirection: 'row'}} >
          <TouchableOpacity
            style={styles.Btn}>
            <Text style={{color: 'white',}}>Appliquer</Text>
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
    marginBottom: 50,
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