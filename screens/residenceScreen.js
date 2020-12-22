import { useGestureHandlerRef } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import DataService from '../services/DataService';
import {ScrollView} from 'react-native-gesture-handler';
import { useState, useEffect, useContext } from 'react'; //für Context Funktion: usecontext
import { useAsyncStorage } from '@react-native-async-storage/async-storage'; // alte Varinte
import colors from '../constants/colors.js'
import { AuthContext } from '../contexts/authContext';//für Context Funktion


function ResidenceScreen({ navigation }) {
//dieser Part ist noch besser zu machen, globale Variable nur einmal definieren, nicht bei jedem Screen
 /*
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  */
  // Ergänzung  für's ID auslesen geht bis hier. dann kann man DataService.validateId(value) anstatt DataService.validateId("123456") verwenden

  const globalUID = useContext(AuthContext); //für Context Funktion
  let resBackgPic = DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getBackgPic():null;
  let morgenpost = DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getMorningMail():null;

  console.log("Globale ID: " + globalUID.user.username);
  console.log("Background Picture: " + resBackgPic);
  console.log("Morgenpost: " + morgenpost);

//        <ImageBackground source={require("../assets/hotelplaceholder.jpg")} style={styles.hotelPicBackground}>
//        <ImageBackground source={require(resBackgPic)} style={styles.hotelPicBackground}>
//        <ImageBackground source={require("../assets/bergfrieden-backgpic.jpg")} style={styles.hotelPicBackground}>
//        <ImageBackground source={require({DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getBackgPic():null})} style={styles.hotelPicBackground}>
//andik   <ImageBackground source={require(DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getBackgPic():null)} style={styles.hotelPicBackground}>
//sandra  <ImageBackground source={DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getBackgPic():null} style={styles.hotelPicBackground}>


    return (
      <View style={styles.container}>
         <ImageBackground source={require("../assets/bergfrieden-backgpic.jpg")} style={styles.hotelPicBackground}> 
          <View style={styles.headlineTxtBackground}>
          <Text style={styles.headlineTxt}>
            ExploRe your residence {"\n"}{DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getName():null}
          </Text>
          </View>
        </ImageBackground>

        <View style={styles.scrollViewStyle}>
        <ScrollView contentContainerStyle={styles.scrollContainer}> 
          <TouchableOpacity
            onPress={() => navigation.navigate('Morning Brief')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Show me the Morning Brief</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Show me the Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getUrl():null)}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Forward me to the Hotel Website</Text>
          </TouchableOpacity>

{/*           <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Test my patience and Show me the Menu again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Test my patience and Show me the Menu again</Text>
          </TouchableOpacity> */}

        </ScrollView>
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

  export default ResidenceScreen;