/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import {CardItem, Card, Text, Body, } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class AboutScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logo}>About us Screen</Text>
          </View>
          <View style={{backgroundColor: '#fb5b5a', height: 5}} />
          <View style={styles.containerA}>
            <Text style={styles.logoA}>
              CONTACTER - ALPHA ENGINEERING INTERNATIONAL:
            </Text>
          </View>
          <View>
            <Text>SAHLOUL 3</Text>
            <Text> Université de Sousse</Text>
            <Text>4054 Sousse</Text>
            <Text>Fax +216 73 821 249</Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL('http://www.alpha-engineering.com.tn/')
              }>
              Alpha Engineering
            </Text>
          </View>
          <Card>
          <CardItem header bordered>
            <Text>
              INFORMATIONS JURIDIQUE - ALPHA ENGINEERING INTERNATIONAL
            </Text>
            </CardItem>
            <CardItem bordered>
            <Body>
            <Text>Année de création ==> 2006</Text>
            <Text>
              Forme juridique ==> Société A Responsabilité limitée (S.A.R.L.)
            </Text>
            <Text>Kompass ID ==> TN106187</Text>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header bordered>
            <Text>
              PRÉSENTATION - ALPHA ENGINEERING INTERNATIONAL
            </Text>
            </CardItem>
            <CardItem bordered>
            <Body>
          <Text>
            Une société d'ingénierie leader établi en 2004 en offrant à ses
            clients une gamme complète de services d'ingénierie, de gestion, de
            supervision et de formation dans l'industrie du pétrole et du gaz:{' '}
          </Text>
          <Text>- Oil & Gas Projets Ingénierie</Text>
          <Text>- Oil & Gas packages pré-ingénierie </Text>
          <Text>- Gestion de projet Oil & Gas </Text>
          <Text>- Oil & Gas Project Control</Text>
          <Text>- Oil & Gas formation </Text>
          <Text>- supervision Oil & Gas champ</Text>
          </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem header bordered>
            <Text >
              ACTIVITÉS PRINCIPALES SELON LA CLASSIFICATION KOMPASS
            </Text>
            </CardItem>
            <CardItem bordered>
            <Body>
            
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-ingenierie-pour-l-extraction-et-l-industrie-du-petrole/84380/',
                )
              }>
              *Conseil en ingénierie pour l'extraction et l'industrie du pétrole
              et du gaz
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-prospection-de-petrole-et-de-gaz/8438001/',
                )
              }>
              ** Conseil en prospection de pétrole et de gaz
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-extraction-de-petrole-et-de-gaz/8438002/',
                )
              }>
              *** Conseil en extraction de pétrole et de gaz
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/etude-de-projets-pour-ingenierie-de-recherche-petroliere/8438003/',
                )
              }>
              ***Etude de projets pour ingénierie de recherche pétrolière
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-ingenierie-pour-l-extraction-petroliere-en-mer/8438005/',
                )
              }>
              *** Conseil en ingénierie pour l'extraction pétrolière en mer
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-injection-d-eau-pour-puits-de-petrole/8438006/',
                )
              }>
              ***Conseil en injection d'eau pour puits de pétrole
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-ingenierie-pour-l-inspection-de-plates-formes-petrolieres/8438007/',
                )
              }>
              ***Conseil en ingénierie pour l'inspection de plates-formes
              pétrolières
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-installation-et-deplacement-de-plates-formes-petrolieres/8438008/',
                )
              }>
              ***Conseil en installation et déplacement de plates-formes
              pétrolières
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/services-pour-cables-de-forage-de-puits-de-petrole/8438009/',
                )
              }>
              ***Services pour câbles de forage de puits de pétrole
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-ingenierie-pour-l-inspection-de-plates-formes-petrolieres/8438007/',
                )
              }>
              ***Conseil en ingénierie pour l'inspection de plates-formes
              pétrolières
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/conseil-en-installation-et-deplacement-de-plates-formes-petrolieres/8438008/',
                )
              }>
              ***Conseil en installation et déplacement de plates-formes
              pétrolières
            </Text>
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://tn.kompass.com/a/services-pour-cables-de-forage-de-puits-de-petrole/8438009/',
                )
              }>
              ***Services pour câbles de forage de puits de pétrole
            </Text>
            </Body>
          </CardItem>
          </Card>
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
