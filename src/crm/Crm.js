/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
//import database from '@react-native-firebase/database';
import Constants from 'expo-constants';
import {ScrollView} from 'react-native-gesture-handler';

export default class CrmScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: false,
    opportunite: '',
    client: '',
    revenu: '',
    data: [],
  };
  updateUser = (user) => {
    this.setState({user: user});
  };
  handleOpportunite = (text) => {
    this.setState({opportunite: text});
  };
  handleClient = (text) => {
    this.setState({client: text});
  };
  handleRevenu = (text) => {
    this.setState({revenu: text});
  };
  /*** */
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  /**function db 
  writecrmdata = () => {
    database()
      .ref('/crm/' + this.state.client)
      .update({
        opportunite: this.state.opportunite,
        client: this.state.client,
        revenu: this.state.revenu,
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  fetchData = async () => {
    let array = [];
    this.setState({
      loading: true,
    });
    database()
      .ref('crm/')
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
        <Text style={styles.logo}>CRM Screen</Text>
        <FlatList
          refreshing={this.state.loading}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.crmItem}>
              <Text>client :{item.client}</Text>
              <Text>opportunite: {item.opportunite}</Text>
              <Text>revenu: {item.revenu}</Text>
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
            <Text style={styles.logo}>Nouvelle CRM!</Text>
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Opportunité:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleOpportunite}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Client:"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleClient}
            />
            <TextInput
              style={styles.inputView}
              underlineColorAndroid="transparent"
              placeholder="Revenu espéré:$0.00"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={this.handleRevenu}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => this.writecrmdata()}>
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
});
