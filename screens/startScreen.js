import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import {QrScanner} from '../components/QrScanner';
import colors from '../constants/colors.js'

function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>

      <ImageBackground source={require("../assets/back4.png")} style={styles.image} resizeMode="stretch">
        
      <View style={styles.qrScanner}>
        <QrScanner />
      </View>
        
        <View style={{ flex: 2 }}>
          <Text style={styles.loremIpsum}>
            Welcome
        </Text>
        <Text style={styles.loremIpsum2}>
              Please scan your {"\n"} QR-Code!
        </Text>
        </View>



        {/* <View style={{ flex: 1 }}>
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
        </View> */}

      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  loremIpsum: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 100,
    paddingBottom: 0,
    color: 'white'
  },

  loremIpsum2: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 25,
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
    flex: 2,
    width: 250,
    height: 300,
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