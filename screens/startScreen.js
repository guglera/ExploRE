import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import {QrScanner} from '../components/QrScanner';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require("../assets/jacuzzi_ori.jpg")} style={styles.image} resizeMode="stretch">

        <View style={{ flex: 2 }}>
          <Text style={styles.loremIpsum}>
            Willkommen, scannen Sie jetzt Ihre Buchung!
        </Text>
        </View>

      <View style={styles.qrScanner}>
        <QrScanner />
      </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome')}
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Login</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View >
  );
}

const colors = {
  scrollViewBackgrColor: 
  '#f4f6fc',
  buttonBackgrColor:
  //'#fbc176'
  //'white'
  //'#1f3e51'
  //'#4a6676'
  '#73a0ba'
  ,
  buttonTxtColor: '#fff',
  headlineTxtColor: 'white',
  headlineTxtBackgrColor: 'rgba(115,160,186,0.65)',
  containerColor: '#4263ec',
};

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
    marginTop: 30,
    paddingBottom: 0,
    color: 'white'
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1
  },

  qrScanner: {
    width: 300,
    height: 300,
    backgroundColor: 'lightgray',
    alignItems: 'center'
  },

  buttonTxt: {
    fontSize: 18,
    color: colors.buttonTxtColor,
    textShadowRadius: 10,
  },

  buttons: {
    flexDirection: 'row', 
    justifyContent: 'center',
    backgroundColor: colors.buttonBackgrColor,
    marginVertical: 10, marginHorizontal: 16,
    paddingVertical: 30, paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
  },

});

export default HomeScreen;