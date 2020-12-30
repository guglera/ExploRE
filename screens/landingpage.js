
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header } from 'react-native-elements';
import React from 'react';
import {QrScanner} from '../components/QrScanner';

export default function Landingpage({ navigation }) {
  return (
   <View style={styles.container}>
      
      <Header
      leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={{ text: 'ExploRE', style: { color: 'white', fontSize: 34 } }}
      rightComponent={{ icon: 'home', color: 'white' }}
      />

      <View style = {styles.textArea}>
        <Text style={styles.title1}>WELCOME</Text>
        <Text style={styles.title2}>are you ready to ExploRE your residence and your region?</Text>
      </View>
      
      <View style={styles.qrScanner}>
        <QrScanner />
      </View>

      <View style={styles.buttonArea}>
        <Button title='My Residence'
          onPress={() => navigation.navigate('Residence')} />
        <Button title='My Region'
          onPress={() => navigation.navigate('Region')} />
      </View>
      

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  qrScanner: {
    width: 300,
    height: 300,
    backgroundColor: 'lightgray'
  },
  buttonArea: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textArea: {
    flex: 0.4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#4b6082',
  },
  title2: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#4b6082',
  },
});
