import { useGestureHandlerRef } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import DataService from '../services/DataService';
import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

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

    return (
      <View style={styles.container}>

      <ImageBackground source={require("../assets/bluewhitegradient.png")} style={styles.image} resizeMode="stretch">

        <View style={{ flex: 1}}>
          <Text style={styles.loremIpsum}>
            Welcome to your residence {"\n"} {DataService.validateId(value)?DataService.getHotelData(value).getName():null}
        </Text>
        </View>

        <View style={{ flex: 1}}>

        <View style={styles.buttons}>
          <Button
            color="black"
            title="Hotel Website"
            onPress={() => Linking.openURL(DataService.validateId(value)?DataService.getHotelData(value).getUrl():null)}
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