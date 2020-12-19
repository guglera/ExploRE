import { useGestureHandlerRef } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import DataService from '../services/DataService';
import {ScrollView} from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


const colors = {
  scrollViewBackgrColor: '#f4f6fc',
  buttonBackgrColor: 
  //'orange'
  //'#ffae45'
  //fav:
  //'#ffb759'
  //'#fbc176'
  //'#eacc98'
  //'white'
  //'#1f3e51'
  //'#4a6676'
  //'#5d8195'
  '#73a0ba'
  ,
  buttonTxtColor: '#fff',
  headlineTxtColor: '#fff',
  containerColor: '#4263ec',
};

function ResidenceScreen({ navigation }) {
  //dieser Part ist noch besser zu machen, globale Variable nur einmal definieren, nicht bei jedem Screen
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  // Ergänzung  für's ID auslesen geht bis hier. dann kann man DataService.validateId(value) anstatt DataService.validateId("123456") verwenden
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/hotelplaceholder.jpg")} style={styles.hotelBackground}>
          <Text style={styles.headlineTxt}>
            Welcome to your residence {"\n"}Hotel {DataService.validateId(value)?DataService.getHotelData(value).getName():null}
          </Text>
        </ImageBackground>

        <ScrollView style={styles.scrollViewStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Morning Brief')}
            View style={styles.buttons}>
              <Text style={styles.buttonText}>Morning Brief</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            View style={styles.buttons}>
              <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL(DataService.validateId(value)?DataService.getHotelData(value).getUrl():null)}
            View style={styles.buttons}>
              <Text style={styles.buttonText}>Hotel Website</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            View style={styles.buttons}>
              <Text style={styles.buttonText}>Test</Text>
          </TouchableOpacity>
        </ScrollView>
    </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.containerColor,
    },

    hotelBackground: {
      flex: 0.5,  
      opacity: 0.9,
      paddingBottom: 20, paddingLeft: 20, flexDirection: "column", justifyContent: 'center',
    },

    scrollViewStyle: {
      flex: 1,
      marginTop: -16,
      paddingTop: 10,
      backgroundColor: colors.scrollViewBackgrColor,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  
    buttonText: {
      fontSize: 24,
      color: colors.buttonTxtColor,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
    },
  
    headlineTxt: {
      color: colors.headlineTxtColor,
      fontSize: 30,
    }, 
  
    buttons: {
      flexDirection: 'row', 
      justifyContent: 'center',
      backgroundColor: colors.buttonBackgrColor,
      marginHorizontal: 16,
      marginVertical: 10,
      borderRadius: 20,
      paddingVertical: 47,
      paddingHorizontal: 20,
    },
  });

  export default ResidenceScreen;