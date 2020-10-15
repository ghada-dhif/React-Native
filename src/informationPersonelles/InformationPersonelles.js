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
  SafeAreaView,
  ScrollView, TouchableOpacity,
} from 'react-native';
import {TextInput,} from 'react-native-gesture-handler';
export default class InfoProScreen extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
        <View
          style={styles.container}>
          <Text style={styles.logo}>
            Information {' '}
          </Text>
          <Text style={styles.logo}>
             Personelles{' '}
          </Text>
        </View>
        <View style={{backgroundColor: '#E5E9E8', height: 180}}>
          <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
            Private Contact:
          </Text>
          <TextInput
            style={styles.inputView}
            underlineColorAndroid="transparent"
            placeholder="Adresse:"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
           style={styles.inputView}
           keyboardType='numeric'
               maxLength={16}
            underlineColorAndroid="transparent"
            placeholder="Numéro de Compte Bancaire:"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType='numeric'
               maxLength={4}
            underlineColorAndroid="transparent"
            placeholder="Km Domicile - Bureau:"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
        </View>
        <View style={{backgroundColor: 'grey', height: 5}} />
        <View>
          <Text
            style={{textAlign: 'left', fontWeight: 'bold', borderRadius: 1}}>
            Etat Civil:
          </Text>
          <Picker
            style={{borderWidth: 1}}
            selectedValue={this.state.user}
            onValueChange={this.updateUser}>
            <Picker.Item label="" value="" />
            <Picker.Item label="célibtaires" value="célibtaires" />
            <Picker.Item label="Marié" value="Marié" />
            <Picker.Item label="Dévorsé(e)" value="Dévorsé(e)" />
          </Picker>
          <View style={{backgroundColor: 'grey', height: 5}} />
          <View style={{backgroundColor: '#E5E9E8', height: 180}}>
            <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
              Urgence:
            </Text>
            <TextInput
              style={styles.inputView}
              keyboardType='numeric'
               maxLength={8}
              underlineColorAndroid="transparent"
              placeholder="Contact d'urgence:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleEmployee}
            />
            <TextInput
             style={styles.inputView}
             keyboardType='numeric'
               maxLength={8}
              underlineColorAndroid="transparent"
              placeholder="Téléphone d'urgence:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleEmployee}
            />
          </View>
        </View>
        <View style={{backgroundColor: 'grey', height: 5}} />
        <View>
          <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
            Education:
          </Text>
          <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
            Niveau De Certificat:
          </Text>
          <Picker
            selectedValue={this.state.selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedValue: itemValue})
            }>
            <Picker.Item label="" value="" />
            <Picker.Item label="Bachelier" value="Bachelier" />
            <Picker.Item label="Master" value="Master" />
          </Picker>
          <View style={{backgroundColor: 'grey', height: 5}} />
          <View style={{backgroundColor: 'white', height: 15}} />
           <View style={{backgroundColor: '#E5E9E8', height: 150}}>
          <TextInput
            style={styles.inputView}
            underlineColorAndroid="transparent"
            placeholder="Champ d’étude:"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            underlineColorAndroid="transparent"
            placeholder="École:"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          </View>
        </View>
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
