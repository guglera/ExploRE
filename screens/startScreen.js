import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import {QrScanner} from '../components/QrScanner';
import colors from '../constants/colors.js'

function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>

      <ImageBackground source={require("../assets/back3.png")} style={styles.image} resizeMode="stretch">
        <View style={{ flex: 2 }}>
          <Text style={styles.loremIpsum}>
            Welcome, please scan your QR-Code!
        </Text>
        </View>

      <View style={styles.qrScanner}>
        <QrScanner />
      </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Welcome'
                  },
                ],
              })
            }
            View style={styles.buttons}>
              <Text style={styles.buttonTxt}>Login</Text>
          </TouchableOpacity>
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
    backgroundColor: 'lightgrey',
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