import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import DataService from '../services/DataService';
import {useContext } from 'react'; 
import colors from '../constants/colors.js'
import { AuthContext } from '../contexts/authContext';
import images from '../services/Images.js'


function ResidenceScreen({ navigation }) {
  const globalUID = useContext(AuthContext); 

    return (
      <View style={styles.container}>
         <ImageBackground source={images.backgrounds[DataService.getHotelId(globalUID.user.username)]} style={styles.hotelPicBackground}> 
          <View style={styles.headlineTextBackground}>
          <Text style={styles.headlineText}>
            ExploRe your residence {"\n"}{DataService.getHotelName(globalUID.user.username)}{"\n"}
            {DataService.getBookingPeriodFrom(globalUID.user.username)} to {DataService.getBookingPeriodTo(globalUID.user.username)}
          </Text>
          </View>
        </ImageBackground>
        {DataService.validateBonkingDate(globalUID.user.username, { navigation })}
        {/* #debug Central invalid date:  DataService.validateBonkingDate("508103382", { navigation })*/}
        {/* #debug Bergfrieden valid date: DataService.validateBonkingDate("16865045", { navigation })*/}
    </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.buttonBackgrColor,
    },

    hotelPicBackground: {
      flex: 0.8,  
      opacity: 0.9,
      flexDirection: "column", justifyContent: 'center', 
    },

    headlineTextBackground: {
      backgroundColor: colors.headlineTxtBackgrColor,
    },

    headlineText: {
      color: colors.headlineTxtColor,
      fontSize: 26,
      lineHeight: 40,
      paddingTop: 20, paddingBottom: 20, paddingLeft: 25, paddingRight: 25,
      textAlign: 'center',
      textShadowRadius: 20,
    }, 
  });

  export default ResidenceScreen;