/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CreationContactScreen} from '../creationContact';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
//import database from '@react-native-firebase/database';
export default class ContactsScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: false,
    isModal2Visible: false,
    isModal3Visible: false,
    nom: '',
    societe: '',
    rue: '',
    Rue2: '',
    TVA: '',
    Poste: '',
    telephone: '',
    mobile: '',
    web: '',
    etat: '',
    ville: '',
    code: '',
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
  handleNom = (text) => {
    this.setState({nom: text});
  };
  handleRue = (text) => {
    this.setState({rue: text});
  };
  handleRue2 = (text) => {
    this.setState({rue2: text});
  };
  handleTVA = (text) => {
    this.setState({TVA: text});
  };
  handlePoste = (text) => {
    this.setState({Poste: text});
  };
  handleTelephone = (text) => {
    this.setState({telephone: text});
  };
  handleMobile = (text) => {
    this.setState({mobile: text});
  };
  handleWeb = (text) => {
    this.setState({web: text});
  };
  handleVille = (text) => {
    this.setState({ville: text});
  };
  handleEtat = (text) => {
    this.setState({etat: text});
  };
  handleCode = (text) => {
    this.setState({code: text});
  };
  handleSociete = (text) => {
    this.setState({societe: text});
  };
  /***********function db 
  writeuserdata = () => {
    database()
      .ref('/contacts/' + this.state.nom + this.state.societe)
      .update({
        nom: this.state.nom,
        rue: this.state.rue,
        rue2: this.state.rue2,
        societe: this.state.societe,
        TVA: this.state.TVA,
        Poste: this.state.Poste,
        telephone: this.state.telephone,
        web: this.state.web,
        ville: this.state.Ville,
        etat: this.state.etat,
        code: this.state.code,
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  /**fetching data 
  fetchData = async () => {
    let array = [];
    this.setState({
      loading: true,
    });
    database()
      .ref('contacts/')
      .on('value', (snapshot) => {
        snapshot.forEach((element) => {
          array.push(element._snapshot.value);
        });
        this.setState({
          data: array,
          loading: false,
        });
      });
  };
  componentDidMount() {
    this.fetchData();
  }*/
  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Contacts Screen</Text>
        <FlatList
          refreshing={this.state.loading}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.contactsItem}>
              <Text style={styles.text}>nom :{item.nom}</Text>
              <Text>rue: {item.rue}</Text>
              <Text>rue2: {item.rue2}</Text>
              <Text>societe: {item.societe}</Text>
              <Text>TVA: {item.TVA}</Text>
              <Text>Poste: {item.Poste}</Text>
              <Text>telephone: {item.telephone}</Text>
              <Text>web: {item.web}</Text>
              <Text>ville: {item.ville}</Text>
              <Text>etat: {item.etat}</Text>
              <Text>code: {item.code}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'red',
                }}
              />
            );
          }}
          keyExtractor={(item) => item.key}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.toggleModal}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Nom  "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleNom}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Societé: "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleSociete}
            />
            <Text>Adresse de la société</Text>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Rue.. "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleRue}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Rue2.. "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleRue}
            />
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.inputView1}
                underlineColorAndroid="transparent"
                placeholder="Ville "
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={this.handleVille}
              />
              <TextInput
                style={styles.inputView1}
                underlineColorAndroid="transparent"
                placeholder="Etat "
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={this.handleEtat}
              />
              <TextInput
                style={styles.inputView1}
                underlineColorAndroid="transparent"
                placeholder="Code Postal "
                keyboardType="numeric"
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={this.handleCode}
              />
            </View>
            <TextInput
              style={styles.inputView2}
              underlineColorAndroid="transparent"
              placeholder="N:TVA:e.g.BE0477472701 "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleTVA}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Poste Occupée "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handlePoste}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Téléphone "
              keyboardType="numeric"
              maxLength={8}
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleTelephone}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Mobile "
              keyboardType="numeric"
              maxLength={8}
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleMobile}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Lien vers un site web "
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleWeb}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.Btn}
              onPress={() => this.writeuserdata()}>
                <Text style={{color: 'white'}}>Comfirmer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn} onPress={this.toggleModal}>
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
    //alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 11,
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
  inputView1: {
    width: '40%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 2,
  },
  inputView2: {
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
    margin: 10,
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
  contactsItem: {
    backgroundColor: 'white',
    margin: 5,
    width: '70%',
    borderRadius: 6,
    padding: 50,
    marginTop: 15,
    elevation: 5,
    alignSelf:'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
