/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView, TextInputMask, Picker, StyleSheet, Modal} from 'react-native';
import {TextInput, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
export default class CreationAchatScreen extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  }
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = {date: '15-05-2018'};
  }
  render() {
    return (
      <SafeAreaView >
        <ScrollView>
        <View
          style={styles.container}>
          <Text style={styles.logo}>
            Créer Achats{' '}
          </Text>
          <Text style={styles.logo} >Demande de Prix</Text>
        </View>
        <View style={{backgroundColor: '#fb5b5a', height: 5}} />
        <View style={styles.containerA} >
          <Text style={styles.logoA}>Fournisseur:</Text>
          </View>
          <View style={styles.containerB} >
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={24}
            underlineColorAndroid="transparent"
            placeholder="Nom,nméro de TVA, courriel ou référance"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
           <TextInput
            style={styles.inputView}
            keyboardType="numeric"
            maxLength={8}
            underlineColorAndroid="transparent"
            placeholder="Référance Fournisseur:"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          </View>
          <View style={styles.containerB}  />
            <View style={styles.containerA} >
          <Text style={styles.logoA}>Date De La Commande:</Text>
          </View>
          <View style={styles.containerB} >
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
          </View>
        <View style={styles.containerA} >
        <Text style={styles.logoA}>Article:  </Text>
        </View>
        <View >
        <TextInput
            style={styles.inputView}
            underlineColorAndroid="transparent"
            placeholder="Article"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            underlineColorAndroid="transparent"
            placeholder="Description Article"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
        </View>
        <View >
        <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={8}
            underlineColorAndroid="transparent"
            placeholder="Quantité: 0.000"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder="Prix Unitaire:0.000"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
        </View>
        <View >
        <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={8}
            underlineColorAndroid="transparent"
            placeholder="Taxe"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
          <TextInput
            style={styles.inputView}
            keyboardType="numeric"
               maxLength={8}
            underlineColorAndroid="transparent"
            placeholder="Sous Total:
            0.000"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
        <View style={styles.containerA} >
        <Text style={styles.logoA}>Autres Informations:  </Text>
        </View>
        <View >
          <Text style={{Color: 'black'}}>Dates De Reception:</Text>
          <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-05-2016"
        maxDate="01-05-2030"
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
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date});}}
      />
       <TextInput
            style={styles.inputView}
            underlineColorAndroid="transparent"
            placeholder="Responcable Achat"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />
        </View>
 <View style={{backgroundColor: 'white', height: 5}} />
 <View style={styles.containerA}>
     <Text style={styles.logoA}>
     Conditions de paiement:
     </Text>
     </View>
     <View>
     <Picker
            style={{borderWidth: 1}}
            selectedValue={this.state.user}
            onValueChange={this.updateUser}>
            <Picker.Item label="" value="" />
            <Picker.Item label="Paiement Immédiat" value="Paiement Immédiat" />
            <Picker.Item label="15 jours" value="15 jours" />
            <Picker.Item label="21 jours" value="21 jours" />
            <Picker.Item label="30 jours" value="30 jours" />
            <Picker.Item label=" Fin De Mois" value="Fin De Mois" />
          </Picker>
          </View>

       <View style={styles.containerA}>
          <Text style={styles.logoA}>Position Fiscale</Text>
          </View>
          <TextInput
            style={{
              width: '90%',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 25,
              fontSize: 15,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}
            underlineColorAndroid="transparent"
            placeholder="Position Fiscale"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={this.handleEmployee}
          />

        </View >
        <View style={styles.containerA}>
        <View style={{flexDirection: 'row'}} >
          <TouchableOpacity
            style={styles.Btn}>
            <Text style={{color: 'white'}}>Comfirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Btn}>
            <Text style={{color: 'white'}}>Annuler</Text>
          </TouchableOpacity>
      </View>
      </View>
        </ScrollView>
      </SafeAreaView>
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
  containerA: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  containerB: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
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
    fontSize: 40,
    color: '#fb5b5a',
    marginBottom: 50,
    alignItems: 'center',
  },
  logoA: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    alignItems: 'center',
  },
  Btn: {
    width: '100%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },

});
