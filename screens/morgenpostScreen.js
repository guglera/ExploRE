import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions, Linking } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import DataService from '../services/DataService';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

function MorgenpostScreen({ navigation }) {

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

            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={Dimensions.get('screen').width}
                       imageHeight={Dimensions.get('screen').height}>
                <Image style = {styles.image}
                       source={require("../assets/quellenhofMenu.png")}   //{DataService.validateId(value)?DataService.getHotelData(value).getMorningMail():null}
                       resizeMode='contain'
                       />
            </ImageZoom>
    </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  
    image: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },  
  });

  export default MorgenpostScreen;