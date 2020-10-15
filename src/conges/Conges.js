/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Picker,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
//import database from '@react-native-firebase/database';
import Modal from 'react-native-modal';
import ActionButton from 'react-native-action-button';
export default class CongesScreen extends Component {
  state = {user: '', duree: '', description: '', type: ''};
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  updateUser = (user) => {
    this.setState({user: user});
  };
  handleDuree = (Text) => {
    this.setState({duree: Text});
  };
  handleDescription = (Text) => {
    this.setState({description: Text});
  };
  handleDate = (Text) => {
    this.setState({date: Text});
  };
  // eslint-disable-next-line no-shadow
  handleType = (Text) => {
    this.setState({type: Text});
  };
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = {date: '15-05-2018'};
  }
  /***function db 
  writeuserdata = () => {
    database()
      .ref('/congé ' + this.state.description)
      .update({
        duree: this.state.duree,
        description: this.state.description,
        date: this.state.date,
        type: this.state.type,
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };*/
  /**fetching data 
  fetchData = async () => {
    let array = [];
    this.setState({
      loading: true,
    });
    database()
      .ref('congé/')
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
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={styles.container}>
        <Text style={styles.logo}>Congés Screen</Text>
        <Text style={styles.logoA}>Nouvelle Demande De Congé</Text>
        <FlatList
          refreshing={this.state.loading}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.crmItem}>
              <Text>duree :{item.duree}</Text>
              <Text>date: {item.date}</Text>
              <Text>description: {item.description}</Text>
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
            <Text style={styles.logoA}>Type De Congé: </Text>
            <Picker
              style={{borderWidth: 1}}
              selectedValue={this.state.user}
              onValueChange={this.updateUser}
              onChangeText={this.handleType}>
              <Picker.Item label="" value="" />
              <Picker.Item label="Congé Payé" value=" Congé Payé" />
              <Picker.Item label="Congé Inpayé" value=" Congé Inpayé" />
              <Picker.Item label="Congé De Maladie" value=" Congé De Maladie" />
            </Picker>
            <Text>De:</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.date} //initial date from state
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
              onDateChange={(date) => {
                this.setState({date: date});
              }}
            />
            <Text>à:</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.date} //initial date from state
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
              onDateChange={(date) => {
                this.setState({date: date});
              }}
            />

            <Text>Durée: </Text>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="1.00 jours"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleDuree}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="description..."
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleDescription}
            />
            <View style={styles.containerA}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() => this.writeuserdata()}>
                  <Text style={{color: 'white'}}>Comfirmer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={this.toggleModal}>
                  <Text style={{color: 'white'}}>Annuler</Text>
                </TouchableOpacity>
              </View>
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
  crmItem: {
    backgroundColor: 'white',
    margin: 5,
    width: '70%',
    borderRadius: 6,
    padding: 50,
    marginTop: 15,
    elevation: 5,
    alignSelf:'center',
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
