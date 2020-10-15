/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
//import database from '@react-native-firebase/database';
export default class EmployeesScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: false,
    isModal2Visible: false,
    isModal3Visible: false,
    adresseDomicile: '',
    compteBancaire: '',
    kmDomicile: '',
    telephoneUrgence: '',
    contactUrgence: '',
    champEtude: '',
    ecole: '',
    employee: '',
    Poste: '',
    telephone: '',
    adresse: '',
    lieu: '',
    gestionaire: '',
    departement: '',
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

  updateUser = (user) => {
    this.setState({user: user});
  };
  handleEmployee = (text) => {
    this.setState({employee: text});
  };
  handlePoste = (text) => {
    this.setState({Poste: text});
  };
  handleTelephone = (text) => {
    this.setState({telephone: text});
  };
  handleAdresse = (text) => {
    this.setState({adresse: text});
  };
  handleLieu = (text) => {
    this.setState({lieu: text});
  };
  handleGestionaire = (text) => {
    this.setState({gestionaire: text});
  };
  handleDepartement = (text) => {
    this.setState({departement: text});
  };
  handleadresseDomicile = (text) => {
    this.setState({adresseDomicile: text});
  };
  handlecompteBancaire = (text) => {
    this.setState({compteBancaire: text});
  };
  handlekmDomicile = (text) => {
    this.setState({kmDomicile: text});
  };
  handletelephoneUrgence = (text) => {
    this.setState({telephoneUrgence: text});
  };
  handlecontactUrgence = (text) => {
    this.setState({contactUrgence: text});
  };
  handlechampEtude = (text) => {
    this.setState({champEtude: text});
  };
  handleecole = (text) => {
    this.setState({ecole: text});
  };
  /**************Function (db) 
  writeuserdata = () => {
    database()
      .ref('/informations/' + this.state.employee + this.state.telephone)
      .update({
        adresseDomicile: this.state.adresseDomicile,
        compteBancaire: this.state.compteBancaire,
        kmDomicile: this.state.kmDomicile,
        telephoneUrgence: this.state.telephoneUrgence,
        contactUrgence: this.state.contactUrgence,
        champEtude: this.state.champEtude,
        ecole: this.state.ecole,
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  writeProdata = () => {
    database()
      .ref('/informations/' + this.state.employee + this.state.telephone)
      .update({
        employee: this.state.employee,
        Poste: this.state.Poste,
        telephone: this.state.telephone,
        adresse: this.state.adresse,
        lieu: this.state.lieu,
        gestionaire: this.state.gestionaire,
        departement: this.state.departement,
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  /*************************** */

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Employés Screen</Text>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.toggleModal3}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.logoA}>Entrez vos informations!</Text>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Nom De l'employé: "
              placeholderTextColor="grey"
              autoCapitalize="none"
              value={this.state.employee}
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
              onChangeText={this.handleLieu}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Gestionnaire: "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.inputChangeHandler}
            />
            <View style={{flexDirection: 'row'}}>
              <Text>Départements: </Text>
              <Picker
                selectedValue={this.state.user}
                onValueChange={this.handleDepartement}
                style={{height: 50, width: 150}}>
                <Picker.Item label="" value="" />
                <Picker.Item label="Informatique" value="Informatique" />
                <Picker.Item label="Mecanique" value="Mecanique" />
                <Picker.Item label="Electrique" value="Electrique" />
              </Picker>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => this.writeProdata()}>
                <Text style={{color: 'white'}}>Comfirmer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal}>
                <Text style={{color: 'white'}}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={this.state.isModal3Visible}>
          <View style={styles.modalView}>
            <Text>Entrez vos informations...</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal}>
                <Text style={{color: 'white'}}>profissionelles</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal2}>
                <Text style={{color: 'white'}}>Personelles</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Btn} onPress={this.toggleModal3}>
              <Text style={{color: 'white'}}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={this.state.isModal2Visible}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Adresse:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleadresseDomicile}
            />
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              maxLength={16}
              underlineColorAndroid="transparent"
              placeholder="Numéro de Compte Bancaire:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handlecompteBancaire}
            />
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              maxLength={4}
              underlineColorAndroid="transparent"
              placeholder="Km Domicile - Bureau:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handlekmDomicile}
            />
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              maxLength={8}
              underlineColorAndroid="transparent"
              placeholder="Contact d'urgence:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handlecontactUrgence}
            />
            <TextInput
              style={styles.inputView}
              keyboardType="numeric"
              maxLength={8}
              underlineColorAndroid="transparent"
              placeholder="Téléphone d'urgence:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handletelephoneUrgence}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Champ d’étude:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handlechampEtude}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="École:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleecole}
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
                selectedValue={this.state.niveauCertif}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({niveauCertif: itemValue})
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="Bachelier" value="Bachelier" />
                <Picker.Item label="Master" value="Master" />
              </Picker>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => this.writeuserdata()}>
                <Text style={{color: 'white'}}>Comfirmer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal2}>
                <Text style={{color: 'white'}}>Annuler</Text>
              </TouchableOpacity>
            </View>
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
