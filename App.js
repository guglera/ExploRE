import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import {QrScanner} from './components/QrScanner';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
   <View style={styles.container}>
      
      <Header
      leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={{ text: 'ExploRE', style: { color: 'white', fontSize: 34 } }}
      rightComponent={{ icon: 'home', color: 'white' }}
      />
      <View style={styles.qrScanner}>
        <QrScanner />
      </View>
      <View style = {styles.textArea}>
        <Text style={styles.title1}>WELCOME</Text>
        <Text style={styles.title2}>are you ready to ExploRE your residence and your region?</Text>
      </View>
      
      <View style={styles.buttonArea}>
        <Button title='My Residence'/>
        <Button title='My Region'/>
      </View>
      
      <StatusBar style="auto" />
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
