import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Weather } from '../components/Weather.js'

function WelcomeScreen({ navigation }) {
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);  

  

    return (
      <View style={styles.container}>

      <ImageBackground source={require("../assets/jacuzzi_ori.jpg")} style={styles.image} resizeMode="stretch">

        <View style={{ flex: 1}}>
          <Text style={styles.loremIpsum}>
            Willkommen, im Hotel {value}
        </Text>
        </View>

        <View style={{ flex: 3}}>
          <View style={styles.buttons}>
          <Button
            color="black"
            title="My Residence"
            onPress={() => navigation.navigate('Residence')}
          />
          </View>

          <View style={styles.buttons}>
          <Button
            color="black"
            title="My Region" onPress={() => navigation.navigate('Region')}
          />
          </View>

          <View style={styles.buttons}>
          <Button
            color="black"
            title="Logout" onPress={() => {navigation.navigate('ExploRE');
              writeItemToStorage("empty")}
            }
          />
          </View>

          <View style={styles.weatherCards}>
            <Weather />
          </View>
        </View>

      </ImageBackground>
    </View >
    );
  }

  export default WelcomeScreen;

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
      paddingBottom: 0
    },
  
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      opacity: 0.70
    },
  
    buttons: {
      width: '90%',
      height: 50,
      backgroundColor: '#2196F3',
      margin: 20
    },

    weatherCards: {
      alignItems: 'center',
    }
  
  });

/*
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Details Screen</Text>
  <Button
    title="Go to Details... again"
    onPress={() => navigation.push('Welcome')}
  />
  <Button title="Region" onPress={() => navigation.navigate('Region')} />
  <Button title="Go to Home" onPress={() => navigation.navigate('ExploRE')} />
  <Button title="Go back" onPress={() => navigation.goBack()} />
  <Button
    title="Go back to first screen in stack"
    onPress={() => navigation.popToTop()}
  />
</View>
*/