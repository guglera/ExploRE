import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions, Linking } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import DataService from '../services/DataService';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import images from '../services/Images.js'



function MorgenpostScreen({ navigation }) {
  const globalUID = useContext(AuthContext); 
  const morningMail = DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getBackgPic():null;

  console.log("Morgenpost Picture: " + morningMail);

    return (
      <View>
        {DataService.getMorningMail(images.morningMail[morningMail])}
      </View>
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
      height: Dimensions.get('screen').height, },  
  });


export default MorgenpostScreen;;