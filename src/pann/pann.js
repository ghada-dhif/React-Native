/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import ActionButton from 'react-native-action-button';
import Axios from 'axios';
export default class PannScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // response: 'click to connect to server',
      isModalVisible: false,
      titre: '',
      projet: '',
      description: '',
    };
  }
  updateUser = (user) => {
    this.setState({user: user});
  };
  handleTitre = (text) => {
    this.setState({titre: text});
  };

  handleProjet = (text) => {
    this.setState({projet: text});
  };

  handleDescription = (text) => {
    this.setState({description: text});
  };
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  postPanne = () => {
    let body = {
      id: this.state.projet,
      description: this.state.description,
      dateA: this.state.dateA,
      dateS: this.state.dateS,
    };
    Axios.post('http://192.168.43.20:5001/ahmed', body)
    this.toggleModal()
  };
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.toggleModal}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.logo}>Nouveau Panne!</Text>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Projet"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleProjet}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Description De Panne:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleDescription}
            />
            {/* <Text>Date:</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.dateA} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2016"
              maxDate="01-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(dateA) => {
                this.setState({dateA: dateA});
              }}
            /> */}
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.Btn} onPress={()=>this.postPanne()}>
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
    backgroundColor: '#F2F2F2',
    // alignItems: 'center',
    alignContent: 'center',
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  crmItem: {
    backgroundColor: 'white',
    margin: 5,
    width: '70%',
    borderRadius: 6,
    padding: 50,
    marginTop: 15,
    elevation: 5,
    alignSelf: 'center',
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
