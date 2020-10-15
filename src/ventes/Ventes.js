/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import Modal from 'react-native-modal';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const fruits = [
  'Signature en ligne',
  'PayPal',
  'Carte de crédit (via Stripe)',
  'Autre intermédiaire de Paiement',
  'Instructions de paiement',
];
export default class VenteScreen extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  state = {
    isModalVisible: false,
    isModal2Visible: false,
    isModal3Visible: false,
  };
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  toggleModal2 = () => {
    this.setState({
      isModal2Visible: !this.state.isModal2Visible,
    });
  };
  toggleModal3 = () => {
    this.setState({
      isModal3Visible: !this.state.isModal3Visible,
    });
  };
  state = {selectedFruits: []};

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({selectedFruits});
  };
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={styles.container}>
        <Text style={styles.logo} >Vente Screen</Text>
          <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.toggleModal3}
        />
        <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modalView}>
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
                  <Text style={styles.logoA}>Adresse:</Text>
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
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.Btn}>
                      <Text style={{color: 'white'}}>Comfirmer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.Btn}
                      onPress={this.toggleModal}>
                      <Text style={{color: 'white'}}>Annuler</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal isVisible={this.state.isModal2Visible}>
                <View style={styles.modalView}>
                  <SelectMultiple
                    items={fruits}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                  />
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.Btn}>
                      <Text style={{color: 'white'}}>Comfirmer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.Btn}
                      onPress={this.toggleModal2}>
                      <Text style={{color: 'white'}}>Annuler</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal isVisible={this.state.isModal3Visible}>
                <View style={styles.modalView}>
                <Text>Entrez vos informations...</Text>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.Btn}
                 onPress={this.toggleModal}>
                      <Text style={{color: 'white'}}>Données Sur La Société </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btn}
                    onPress={this.toggleModal2}>
                      <Text style={{color: 'white'}}>Methode De Payement</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.Btn}
                      onPress={this.toggleModal3}>
                      <Text style={{color: 'white'}}>Annuler</Text>
                    </TouchableOpacity>

                </View>

              </Modal>
      </View>
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
  Btn: {
    width: '50%',
    backgroundColor: '#fb5b5a',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
    margin: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 2,
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});