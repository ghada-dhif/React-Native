/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import ContactsScreen from '../contacts/Contacts';
import TabScreen from '../tab/Tab';
import {CongesScreen} from '../conges';
import {CongNav} from '../congNav';
import {CrmScreen} from '../crm';
import {ServiceScreen} from '../service';
import {MapsScreen} from '../maps';
import {PannScreen} from '../pann';
import {SettingScreen} from '../setting';
import NavigationScreen from '../navigation/Navigation';
import HeaderScreen from '../header/Header';
import VenteNavigator from '../venteNavigator/VenteNavigator';
import DrawerContents from '../drawerContents';
import {View, Image, Icon, Content} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import AchatNavigator from '../achatNavigator/AchatNavigator';
import {StyleSheet, ScrollView} from 'react-native';
import {Caption, Title, Avatar} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {EmployeesScreen} from '../employees';
import {AboutScreen} from '../about';
//import {LandingView} from '../landingView';
function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={{height: 150}}>
          <Avatar.Image source={require('../img/ghada.jpg')} />
          <Title>Ghada Dhif</Title>
          <Caption>@Ghada1edhif</Caption>
        </View>
        <View style={{backgroundColor: 'white', height: 5}} />
        <View style={{height: 600}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              {...props}
              style={styles.loginBtn}
              onPress={() => props.navigation.navigate('Feed')}>
               <Icon name="" />
              <Text style={{color: 'black'}}>Acceuil</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('pann')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>pann</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('service')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>Service Sur Site</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('employees')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>Employés</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('vente')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>Ventes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('crm')}>
            <Text style={{color: 'black'}}>Crm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('contacts')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('Achats')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>Achats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('Conges')}>
            <Text style={{color: 'black'}}>Congés</Text>
          </TouchableOpacity>
          <TouchableOpacity
            {...props}
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('maps')}>
            <Icon name="" />
            <Text style={{color: 'black'}}>maps</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: 'white', height: 5}} />
      <View style={styles.containerA}>
        <TouchableOpacity
          style={styles.Btn}
          {...props}
          onPress={() => props.navigation.navigate('About')}>
          <Text style={{color: 'black'}}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        {...props}
        onPress={() => props.navigation.navigate('LandingView')}
        style={styles.Btn}>
          <Text style={{color: 'black'}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
class DrawerScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DrawerNav.Navigator
        // eslint-disable-next-line react-native/no-inline-styles
        drawerStyle={{
          width: 320,
        }}
        drawerType={'slide'}
        initialRouteName="tabsHome"
        drawerContent={() => <DrawerContent {...this.props} />}>
        <DrawerNav.Screen name="tabsHome" component={TabScreen} />
        <DrawerNav.Screen name="employees" component={NavigationScreen} />
        <DrawerNav.Screen name="congés" component={CongesScreen} />
        <DrawerNav.Screen name="vente" component={VenteNavigator} />
        <DrawerNav.Screen name="About" component={AboutScreen} />
        <DrawerNav.Screen name="maps" component={MapsScreen} />
        <DrawerNav.Screen name="crm" component={CrmScreen} />
        <DrawerNav.Screen name="contacts" component={ContactsScreen} />
        <DrawerNav.Screen name="service" component={ServiceScreen} />
        <DrawerNav.Screen name="pann" component={PannScreen} />
      </DrawerNav.Navigator>
    );
  }
}

export default DrawerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containerA: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
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
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fb5b5a',
    marginBottom: 50,
    alignItems: 'center',
  },
  Btn: {
    width: '30%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
    margin: 0.5,
  },
});
