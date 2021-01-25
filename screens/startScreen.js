import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useState, useEffect, useContext } from 'react';
import {QrScanner} from '../components/QrScanner';
import colors from '../constants/colors.js'
import { AuthContext } from '../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';
import { ScrollView } from 'react-native-gesture-handler';


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

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
      setVisible(!visible);
    };

  useEffect(() => {
    loginHandler();
  }, [value]);
  
  i18n.locale = value;

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../assets/back4.png")} style={styles.image} resizeMode="stretch">
        <Text style={styles.loremIpsum}>
        {i18n.t('txtStartScreen1')} 
        </Text>
        <Text style={styles.loremIpsum}>
        {i18n.t('txtStartScreen2')} 
        </Text>

        <View style={styles.qrScanner}>
        <QrScanner />
        </View>

        <TouchableOpacity
            onPress={toggleOverlay}
            View style={styles.hotelPicBackground, {width: '100%'}}>
            <View style={styles.headlineTxtBackground}>
              <Text style={styles.headlineTxt}>
                  {i18n.t('txtAboutScreen1')}
              </Text>
            </View>
          </TouchableOpacity>

        
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} width='80%' height='auto'
        overlayStyle={{
            borderRadius: 10,
            marginVertical: 100,
            marginHorizontal: 20
        }}
      >
          <View>
            <ScrollView>
                <Text style={styles.h1text}>{i18n.t('txtAboutScreen1')}</Text>
                <Text style={styles.h1text}>{i18n.t('txtAboutScreen2')}</Text>
                <Text style={styles.normaltext}>{i18n.t('txtAboutScreen3')}{"\n"} </Text>

                <Text style={styles.h1text}>{i18n.t('txtAboutScreen4')}</Text>
                <Text style={styles.normaltext}>{i18n.t('txtAboutScreen5')}{"\n"} </Text>

                <Text style={styles.h1text}>{i18n.t('txtAboutScreen6')}</Text>
                <Text style={styles.normaltext}>{i18n.t('txtAboutScreen7')}{"\n"} </Text>

                <Text style={styles.h1text}>{i18n.t('txtAboutScreen8')}</Text>
                <Text style={styles.normaltext}>{i18n.t('txtAboutScreen9')}{"\n"} </Text>
                               
                <Text style={styles.h1text}>{i18n.t('txtAboutScreen11')}</Text>
                <Text style={styles.normaltext}>ExploRe{"\n"}Universitätstraße 15 {"\n"}6020 Innsbruck</Text>
            </ScrollView>
          </View>
      </Overlay>



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
    marginVertical: 0, marginHorizontal: 16,
    paddingVertical: 30, paddingHorizontal: 40,
    width: 300,
    borderRadius: 20,
    elevation: 5,
    opacity: 0.8,
  },

  normaltext: {
    fontSize: 10
},

h1text: {
    fontSize: 12,
    fontWeight: 'bold'
},

hotelPicBackground: {
  flex: 0.2,  
  opacity: 0.8,
  flexDirection: "column", justifyContent: 'flex-end', 
},

headlineTxtBackground: {
  backgroundColor: colors.headlineTxtBackgrColor,
  //backgroundColor: 'lightgrey',
},

headlineTxt: {
  color: colors.headlineTxtColor,
  fontSize: 18,
  lineHeight: 15,
  paddingTop: 20, paddingBottom: 20, paddingLeft: 25, paddingRight: 25,
  textAlign: 'center',
  textShadowRadius: 20,
}, 

});

export default HomeScreen;