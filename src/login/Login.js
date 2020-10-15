/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TextInput, StatusBar, TouchableOpacity} from 'react-native';
const userInfo = {username: 'Admin', password: 'Admin'};
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      // eslint-disable-next-line no-alert
      alert('logged IN');
      this.props.navigation.navigate('Alpha');
    } else {
      alert('username or password incorrect');
    }
  };
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <Text
          style={{
            backgroundColor: 'powderblue',
            width: 500,
            height: 80,
            textAlign: 'center',
          }}>
          welcome to my application :)
        </Text>
        <TextInput
          placeholder="username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          onPress={this._login}
          //onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text style={{textAlign: 'center'}}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.push('Alpha')}>
          <Text style={{color: 'black', textAlign: 'center', height: 42}}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
