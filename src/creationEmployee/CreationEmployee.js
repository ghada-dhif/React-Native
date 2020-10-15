/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Picker,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
//import database from '@react-native-firebase/database';
import Modal from 'react-native-modal';
export default class CreationScreen extends Component {
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

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal}>
                <Text style={{color: 'white'}}>Informations Générales</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal2}>
                <Text style={{color: 'white'}}>Informations Personelles</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modalView}>
                  <Text style={styles.logo}>Hello!</Text>
                  <Text style={styles.logoA}>Entrez vos informations!</Text>
                  <TextInput
                    style={styles.inputView}
                    underlineColorAndroid="transparent"
                    placeholder="Nom De l'employé: "
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
                  <TextInput
                    style={styles.inputView}
                    underlineColorAndroid="transparent"
                    placeholder="Poste Occupé: "
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handlePoste}
                  />
                  <TextInput
                    style={styles.inputView}
                    keyboardType="numeric"
                    maxLength={8}
                    underlineColorAndroid="transparent"
                    placeholder="télephone:"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleTelephone}
                  />
                  <TextInput
                    style={styles.inputView}
                    underlineColorAndroid="transparent"
                    placeholder="Adresse:"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleAdresse}
                  />
                  <TextInput
                    style={styles.inputView}
                    underlineColorAndroid="transparent"
                    placeholder="Lieu de Travail: "
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
                  <TextInput
                    style={styles.inputView}
                    underlineColorAndroid="transparent"
                    placeholder="Gestionnaire: "
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
                  <View style={{flexDirection: 'row'}}>
                    <Text>Départements: </Text>
                    <Picker
                      selectedValue={this.state.user}
                      onValueChange={this.updateUser}
                      style={{height: 50, width: 150}}>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Informatique" value="Informatique" />
                      <Picker.Item label="Mecanique" value="Mecanique" />
                      <Picker.Item label="Electrique" value="Electrique" />
                    </Picker>
                  </View>
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
                    keyboardType="numeric"
                    maxLength={16}
                    underlineColorAndroid="transparent"
                    placeholder="Numéro de Compte Bancaire:"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
                  <TextInput
                    style={styles.inputView}
                    keyboardType="numeric"
                    maxLength={4}
                    underlineColorAndroid="transparent"
                    placeholder="Km Domicile - Bureau:"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
                  <TextInput
                    style={styles.inputView}
                    keyboardType="numeric"
                    maxLength={8}
                    underlineColorAndroid="transparent"
                    placeholder="Contact d'urgence:"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
                  <TextInput
                    style={styles.inputView}
                    keyboardType="numeric"
                    maxLength={8}
                    underlineColorAndroid="transparent"
                    placeholder="Téléphone d'urgence:"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmployee}
                  />
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
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        borderRadius: 1,
                      }}>
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
                  </View>
                  <View style={{flexDirection: 'row'}}>
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
                  </View>
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
