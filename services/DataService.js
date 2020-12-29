import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions, Linking } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import images from '../services/Images.js'
import PersonData from '../models/PersonData';
import HotelData from '../models/HotelData';
import demoData from '../demoData/demo.json'


export default class DataService{}

DataService.getPersonData = function(userId) {
       return new PersonData(demoData[userId].PersonData);
  }

DataService.getHotelData = function(userId) {
    return new HotelData(demoData[userId].HotelData);
}

DataService.validateId = function(userId) {
    return 'undefined' !== typeof(demoData[userId])? true: false;
}


DataService.getMorningMail = function imageElements(morningMail) {
    console.log(morningMail.map)
    const morningMails = morningMail.map(morningMail => {
        return(
            <ImageZoom cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={Dimensions.get('screen').width}
                imageHeight={Dimensions.get('screen').height}>
                    <Image
                        key={morningMail.index}
                        source={morningMail} 
                        style={styles.image}
                        resizeMode='contain'
                    />
            </ImageZoom>
        )
    })

    return(
      <View style={styles.container}>
            {morningMails}
        </View >
    )
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