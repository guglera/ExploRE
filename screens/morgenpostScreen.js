import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
// import DataService from '../services/DataService';

function MorgenpostScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image
                // source={DataService.validateId("16865045")?DataService.getHotelData("16865045").getMorningMail().getFilePath():null}
                source={require("../assets/morgenpost1.png")}
                style={styles.image}
            />
    </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 400,
      width: '100%'
    },  
  });

  export default MorgenpostScreen;