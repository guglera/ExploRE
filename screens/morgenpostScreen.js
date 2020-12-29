import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions, Linking } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import DataService from '../services/DataService';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import images from '../services/Images.js'

function MorgenpostScreen({ navigation }) {
  const globalUID = useContext(AuthContext); 
  const morningMail = DataService.validateId(globalUID.user.username)?DataService.getHotelData(globalUID.user.username).getBackgPic():null;

  console.log("Morgenpost Picture: " + morningMail);
/*<View>
  {DataService.getMorningMail(images.morningMail[morningMail])}
</View> */
    return (

            <View style={styles.container}>

            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={Dimensions.get('screen').width}
                       imageHeight={Dimensions.get('screen').height}>
                <Image style = {styles.image}
                       source={images.morningMail[morningMail]}  
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
      height: Dimensions.get('screen').height, },  
  });


export default MorgenpostScreen;;