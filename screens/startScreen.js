import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';
import {QrScanner} from '../components/QrScanner';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require("./innsbruck1.jpg")} style={styles.image} resizeMode="stretch">

        <View style={{ flex: 2 }}>
          <Text style={styles.loremIpsum}>
            Willkommen, scannen Sie jetzt Ihren Buchung!
        </Text>
        </View>

      <View style={styles.qrScanner}>
        <QrScanner />
      </View>

        <View style={{ flex: 1 }}>
          <View style={styles.buttons}>
            <Button
              color="black"
              title="LOGIN"
              onPress={() => navigation.navigate('Welcome')}
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
    paddingBottom: 0
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.70
  },

  buttons: {
    width: '90%',
    height: 50,
    backgroundColor: '#2196F3',
    margin: 20
  },

  qrScanner: {
    width: 300,
    height: 300,
    backgroundColor: 'lightgray',
    alignItems: 'center'
  },

});

export default HomeScreen;