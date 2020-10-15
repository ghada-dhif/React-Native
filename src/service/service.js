/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  ListView,
  ActivityIndicator,
  AppRegistry,
  Button,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
//import database from '@react-native-firebase/database';
import Constants from 'expo-constants';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import nodejs from 'nodejs-mobile-react-native';

export default class ServiceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // response: 'click to connect to server',
      isModalVisible: false,
      titre: '',
      client: '',
      projet: '',
      assigne: '',
      description: '',
    };
  }
  updateUser = (user) => {
    this.setState({user: user});
  };
  handleTitre = (text) => {
    this.setState({titre: text});
  };
  handleClient = (text) => {
    this.setState({client: text});
  };
  handleProjet = (text) => {
    this.setState({projet: text});
  };
  handleAssigne = (text) => {
    this.setState({assigne: text});
  };
  handleDescription = (text) => {
    this.setState({description: text});
  };
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  /*signup = () => {
  const data = { description: 'description',
  titre: 'titre',
  projet: 'projet',
  assigne: 'assigne',
  client: 'client',
 };
}*/
  /*signup = () => {
    const [titre,setTitre] = useState('');
    const [projet,setProjet] = useState('');
    const [assigne,setAssigne] = useState('');
    const [client,setClient] = useState('')
    const [modal,setModal] = useState(false)
  }
  /*function database*/
  componentDidMount() {
    /*return fetch('http://192.168.43.20:5001/todos')
  .then ((response) => response.json())
  .then((responseJson) => {
    this.setState({
      description: '',
      titre: '',
      client: '',
      projet: '',
      assigne: '',

    })
  })
  .catch((error) => {
    console.log(error)
  });*/
    this.getData();
  }
  getData = () => {
    fetch('http://192.168.43.20:5001/todos')
      .then((response) => response.json())
      .then((data) => {
        this.setState({data: data});
        console.log(data);
      });
  };
  sendCred = () => {
    fetch('http://192.168.43.20:5001/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: this.state.description,
        titre: this.state.titre,
        projet: this.state.projet,
        assigne: this.state.assigne,
        client: this.state.client,
        date: this.state.date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  /*async componentDidMount(){
  try{
await fetch('http://localhost:5001/todos',{
method: 'get',
mode: 'no-cors',
headers:{
  Accept: 'application/json',
        'Content-Type': 'application/json',
},
body: JSON.stringify({
  description: 'description',
  titre: 'titre',
  projet: 'projet',
  assigne: 'assigne',
  client: 'client',
})
});
  }catch(e){
    console.log(e);
  }
}*/
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={styles.container}>
        <Text style={styles.logo}>{this.state.response} </Text>
        <FlatList
          refreshing={this.state.loading}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.crmItem}>
              <Text>projet: {item.projet}</Text>
              <Text>titre: {item.titre}</Text>
              <Text>client :{item.client}</Text>
              <Text>assigne: {item.assigne}</Text>
              <Text>description :{item.description}</Text>
              <Text>date: {item.date}</Text>
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
            <Text style={styles.logo}>Nouveaux Services!</Text>
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
              placeholder="Titre:"
              //value={titre}
              placeholderTextColor="grey"
              autoCapitalize="none"
              //onChangeText={text => this.setTitre(text)}
              onChangeText={this.handleTitre}
            />

            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Client:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              //onChangeText={text => this.setClient(text)}
              onChangeText={this.handleClient}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="assigné à ..."
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleAssigne}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Description:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleDescription}
            />
            <Text>Date:</Text>
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.Btn} onPress={this.sendCred}>
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
