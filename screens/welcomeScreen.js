import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Weather } from '../components/Weather.js'
import DataService from '../services/DataService';
import {ScrollView} from 'react-native-gesture-handler';


function WelcomeScreen({route, navigation }) {
  
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  

  /*
  const welcomeUID = route.params.welcomeUID
  console.log("WelcomeUID: " + welcomeUID);
  */

    return (
      <View style={styles.container}>

      <ImageBackground source={require("../assets/jacuzzi_ori.jpg")} style={styles.image} resizeMode="stretch">

        <View style={{ flex: 1}}>

        <Text style={styles.loremIpsum}>
            Willkommen, im {DataService.validateId(value)?DataService.getHotelData(value).getName():null/*value}*/}
        </Text>
        </View>

        <View style={{ flex: 3,paddingTop: 10, paddingBottom: 10,}}>
        <ScrollView> 
         <TouchableOpacity
            onPress={() => navigation.navigate('Residence')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>My Residence</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Region')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>My Region</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ExploRE')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Logout</Text>
          </TouchableOpacity>

          <View style={styles.weatherCards}>
            <Weather />
          </View>

          </ScrollView> 
        </View>

      </ImageBackground>
    </View >
    );
  }

  export default WelcomeScreen;

  const colors = {
    scrollViewBackgrColor: 
    '#f4f6fc',
    buttonBackgrColor:
    //'#fbc176'
    //'white'
    //'#1f3e51'
    //'#4a6676'
    '#73a0ba'
    ,
    buttonTxtColor: '#fff',
    headlineTxtColor: 'white',
    headlineTxtBackgrColor: 'rgba(115,160,186,0.65)',
    containerColor: '#4263ec',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    loremIpsum: {
      textAlign: "center",
      fontSize: 40,
    marginTop: 30,
    paddingBottom: 0,
    color: 'white'
    },
  
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      opacity: 1
    },
  
    buttonTxt: {
      fontSize: 18,
      color: colors.buttonTxtColor,
      textShadowRadius: 10,
    },
  
    buttons: {
      flexDirection: 'row', 
      justifyContent: 'center',
      backgroundColor: colors.buttonBackgrColor,
      marginVertical: 10, marginHorizontal: 16,
      paddingVertical: 30, paddingHorizontal: 20,
      borderRadius: 20,
      elevation: 5,
    },
    
    weatherCards: {
      alignItems: 'center',
    }
  
  });

/*
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Details Screen</Text>
  <Button
    title="Go to Details... again"
    onPress={() => navigation.push('Welcome')}
  />
  <Button title="Region" onPress={() => navigation.navigate('Region')} />
  <Button title="Go to Home" onPress={() => navigation.navigate('ExploRE')} />
  <Button title="Go back" onPress={() => navigation.goBack()} />
  <Button
    title="Go back to first screen in stack"
    onPress={() => navigation.popToTop()}
  />
</View>
*/