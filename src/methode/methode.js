/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
//import { TouchableOpacity } from 'react-native-gesture-handler';
const fruits = [
  'Signature en ligne',
  'PayPal',
  'Carte de crédit (via Stripe)',
  'Autre intermédiaire de Paiement',
  'Instructions de paiement',
];
export default class MethodeScreen extends Component {
  state = {selectedFruits: []};

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({selectedFruits});
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logo}>methode de payement </Text>
          </View>
          <View>
            <SelectMultiple
              items={fruits}
              selectedItems={this.state.selectedFruits}
              onSelectionsChange={this.onSelectionsChange}
            />
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
    fontSize: 30,
    color: '#fb5b5a',
    marginBottom: 50,
    alignItems: 'center',
  },
});
