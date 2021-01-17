import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Weather } from '../components/Weather.js'
import DataService from '../services/DataService';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../constants/colors.js'
import i18n from 'i18n-js';
import { AuthContext } from '../contexts/authContext';
i18n.fallbacks = true;


function WelcomeScreen({route, navigation }) {
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const removeItemFromStorage = async (item) => {
    try {
      await AsyncStorage.removeItem(item);
      console.log("#debug welcomeScreen.js - Successfully logged out");
    } catch(e) {
      console.log("#debug welcomeScreen.js - error: " + e);
    } finally {
      setValue(null);
    }
  };

  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    readItemFromStorage()
      .then(data => {
        authContext.login({username: value});
      })
      .catch(e => console.warn(e))
  }

  useEffect(() => {
    loginHandler();
  }, [value]);


  const globalLang = useContext(AuthContext);
  console.log("#debug welcomeScreen.js - gloabelLanguage: " + globalLang.language.displaylanguage);
  i18n.locale = globalLang.language.displaylanguage;


  console.log("#debug welcomeScreen.js - WelcomeScreen ID: " + value);
  console.log("#debug welcomeScreen.js - Language: " + authContext.language.displaylanguage);
  // line 103 replaced:  <Weather lat = {lat} lon = {lon} language = {authContext.language.displaylanguage}/>

  //get the Location of the Hotel and give it to the Weather Component via props; default Location = Innsbruck
  const lat = DataService.validateId(value)?DataService.getHotelData(value).getLat():'47.259659';
  const lon = DataService.validateId(value)?DataService.getHotelData(value).getLon():'11.400375';

    return (
      <View style={styles.container}>

      <ImageBackground source={require("../assets/back3.png")} style={styles.image}>

        <View style={{ flex: 0.8, flexDirection: "column", justifyContent: 'center', }}>

        <Text style={styles.loremIpsum}>
        {i18n.t('txtWelcomeScreen1')} {DataService.getGuestName(value)}!
            {"\n"}
            {"\n"}{i18n.t('txtWelcomeScreen2')} 
            {"\n"}{i18n.t('txtWelcomeScreen3')}
        </Text>
        </View> 

        <View style={{  flex: 1.5, paddingTop: 10, paddingBottom: 5, margin: 20, justifyContent: 'center'}}>
         <TouchableOpacity
            onPress={() => navigation.navigate('Residence')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>{i18n.t('bttnWelcomeScreen1')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Region')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>{i18n.t('bttnWelcomeScreen2')}</Text>
          </TouchableOpacity>

{/*           <TouchableOpacity
            onPress={() => {
              removeItemFromStorage('hotelId');
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'ExploRE'
                  },
                ],
              });
            }
          }
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Logout</Text>
          </TouchableOpacity> */}

          <View>
            <Weather lat = {lat} lon = {lon} language = {authContext.language.displaylanguage}/>
          </View>
          </View>
          
          <TouchableOpacity
            onPress={() => {
              removeItemFromStorage('hotelId');
              removeItemFromStorage('displaylanguage');
              navigation.reset({
                index: 0,
                routes: [{
                    name: 'About'
                  },],
              });
            }
          }
            View style={styles.hotelPicBackground}>
          <View style={styles.headlineTxtBackground}>
          <Text style={styles.headlineTxt}>
            Logout
          </Text>
          </View>
          </TouchableOpacity>

      </ImageBackground>
    </View >
    );
  }

  export default WelcomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      //backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },
  
    loremIpsum: {
      textAlign: "center",
      fontSize: 30,
    marginTop: 30,
    paddingBottom: 0,
    color: 'white'
    },
  
    image: {
      flex: 1,
      //resizeMode: "cover",
      //justifyContent: "center",
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
      opacity: 0.9,
    },

    hotelPicBackground: {
      flex: 0.2,  
      opacity: 0.8,
      flexDirection: "column", justifyContent: 'flex-end', 
    },

    headlineTxtBackground: {
      backgroundColor: colors.headlineTxtBackgrColor,
      //backgroundColor: 'lightgrey',
    },

    headlineTxt: {
      color: colors.headlineTxtColor,
      fontSize: 18,
      lineHeight: 15,
      paddingTop: 20, paddingBottom: 20, paddingLeft: 25, paddingRight: 25,
      textAlign: 'center',
      textShadowRadius: 20,
    }, 
    
  
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