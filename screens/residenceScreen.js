import { useGestureHandlerRef } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import DataService from '../services/DataService';



function ResidenceScreen({ navigation }) {
    return (
      <View style={styles.container}>

      <ImageBackground source={require("../assets/bluewhitegradient.png")} style={styles.image} resizeMode="stretch">

        <View style={{ flex: 1}}>
          <Text style={styles.loremIpsum}>
            Welcome to your residence {"\n"} Hotel {DataService.validateId("508103379")?DataService.getHotelData("508103379").getName():null}
        </Text>
        </View>

        <View style={{ flex: 1}}>

        <View style={styles.buttons}>
          <Button
            color="black"
            title="Hotel Website"
            onPress={() => Linking.openURL(DataService.validateId("508103379")?DataService.getHotelData("508103379").getUrl():null)}
          />
          </View>

          <View style={styles.buttons}>
          <Button
            color="black"
            title="Morning Brief"
            onPress={() => navigation.navigate('Morning Brief')}
          />
          </View>

          <View style={styles.buttons}>
          <Button
            color="black"
            title="Menu"
            onPress={() => navigation.navigate('Menu')}
          />
          </View>

        </View>

      </ImageBackground>
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
  
    loremIpsum: {
      textAlign: "center",
      fontSize: 40,
      marginTop: 0,
    },
  
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      opacity: 0.75
    },
  
    buttons: {
      width: '90%',
      height: 50,
      backgroundColor: '#2196F3',
      margin: 20
    }
  
  });

  export default ResidenceScreen;