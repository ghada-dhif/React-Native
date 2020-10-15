/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import SelectMultiple from 'react-native-select-multiple';
const fruits = [
  'Signature en ligne',
  'PayPal',
  'Carte de crédit (via Stripe)',
  'Autre intermédiaire de Paiement',
  'Instructions de paiement',
];
export default class CreationVenteScreen extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  state = {
    isModalVisible: false,
    isModal2Visible: false,
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal}>
                <Text style={{color: 'white'}}>Données Sur La Societé</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal2}>
                <Text style={{color: 'white'}}>Methode De Payement</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modalView}>
                  <Text style={styles.logo}>Hello!</Text>
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
                  <Text>hello</Text>
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fb5b5a',
    marginBottom: 10,
    alignItems: 'center',
  },
  logoA: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fb5b5a',
    marginBottom: 10,
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
  },
});
