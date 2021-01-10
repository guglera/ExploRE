import { useGestureHandlerRef } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import DataService from '../services/DataService';
import {ScrollView} from 'react-native-gesture-handler';
import { useContext } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import colors from '../constants/colors.js';
import { AuthContext } from '../contexts/authContext';


function RegionScreen({ navigation }) {
  const globalUID = useContext(AuthContext);

  console.log("#debug regionScreen.js - globalUID: " + globalUID.user.username);
  console.log("#debug regionScreen.js - gloabelLanguage: " + globalUID.language.displaylanguage);
  
   
    return (
      <View style={styles.container}>
      <ImageBackground source={require("../assets/picInnsbruck.jpg")} style={styles.hotelPicBackground}>
        <View style={styles.headlineTxtBackground}>
        <Text style={styles.headlineTxt}>
          ExploRe your region {DataService.getGuestName(globalUID.user.username)}
          {"\n"}there's a lot to see
          
        </Text>
        </View>
      </ImageBackground>

      <View style={styles.scrollViewStyle}>
          {DataService.getActivityCards(globalUID.user.username, globalUID.language.displaylanguage)}
      </View>
  </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerColor,
  },

  hotelPicBackground: {
    flex: 0.8,  
    opacity: 0.9,
    flexDirection: "column", justifyContent: 'center', 
  },

  headlineTxtBackground: {
    backgroundColor: colors.headlineTxtBackgrColor,
  },

  headlineTxt: {
    color: colors.headlineTxtColor,
    fontSize: 26,
    lineHeight: 40,
    paddingTop: 20, paddingBottom: 20, paddingLeft: 25, paddingRight: 25,
    textAlign: 'center',
    textShadowRadius: 20,
  }, 

  scrollViewStyle: {
    flex: 1,
    marginTop: -16,
    backgroundColor: colors.scrollViewBackgrColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  scrollContainer: {
    paddingTop: 10,
    paddingBottom: 10,
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
});

  export default RegionScreen;