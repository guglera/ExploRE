import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import {QrScanner} from '../components/QrScanner';
import colors from '../constants/colors.js'
import { AuthContext } from '../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

function HomeScreen({ navigation }) {  
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('displaylanguage');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    readItemFromStorage()
      .then(data => {
        authContext.langfunc({displaylanguage: value});
      })
      .catch(e => console.warn(e))
  }

  useEffect(() => {
    loginHandler();
  }, [value]);
  
  console.log("#debug startScreen.js - startScreenLanguage: " + value);

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../assets/back4.png")} style={styles.image} resizeMode="stretch">
        <Text style={styles.loremIpsum}>
            Welcome
        </Text>
        <Text style={styles.loremIpsum}>
              Please scan your QR-Code!
        </Text>

        <View style={styles.qrScanner}>
        <QrScanner />
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
    flex: 1,
    textAlign: "center",
    fontSize: 30,
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
    flex: 10,
    width: 500,
    height: 500,
    alignItems: 'flex-end'
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