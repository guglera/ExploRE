import * as React from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import colors from '../constants/colors.js'
import { useState, useEffect } from 'react';
import * as asyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

import { translations } from '../components/Languages';
import i18n from 'i18n-js';
i18n.fallbacks = true;

function AboutScreen({ navigation }) {
  const [value, setValue] = useState(null);
  const { getItem, setItem } = asyncStorage.useAsyncStorage('displaylanguage');

  const readItemFromStorage = async () => {
    const item = await getItem();
    if (item !== null) {
      setValue(item);
    }
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  // const handleLanguage = ({ language }) => {
  //   writeItemToStorage(language);
  // };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
      setVisible(!visible);
    };

  //i18n.locale = globalLang.language.displaylanguage;

  console.log("#debug aboutScreen.js - displaylanguage: " + value);

  return (
    <View style={styles.container}>

    <ImageBackground source={require("../assets/logoimages/backflag0.png")} style={styles.image}>

      <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', }}></View>

        <View style={{  flex: 1, paddingTop: 0, paddingBottom: 5, margin: 20, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              writeItemToStorage('en');
              Alert.alert("Language","English language selected");
              navigation.navigate('ExploRE');
            }}
            style={styles.buttons}>
              <Text style={styles.buttonTxt}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              writeItemToStorage('de');
              Alert.alert("Sprache","Deutsche Sprache gewählt");
              navigation.navigate('ExploRE');
            }}
            style={styles.buttons}>
              <Text style={styles.buttonTxt}>Deutsch</Text>
          </TouchableOpacity>

{/*           <TouchableOpacity
              onPress={toggleOverlay}
              style={styles.buttons}>
                  <Text style={styles.buttonTxt}>{i18n.t('txtAboutScreen1')}</Text>
          </TouchableOpacity>
 */}
        </View>

      {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay} width='80%' height='auto'
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
      </Overlay> */}
        
    </ImageBackground>

{/*     <TouchableOpacity
          onPress={() => {
            if (value === 'en' || value === 'de') {
              navigation.navigate('ExploRE')
            } else {
              alert("Please select your language first")
            }
          }}
          View style={styles.hotelPicBackground}>
            <View style={styles.headlineTxtBackground}>
                <Text style={styles.headlineTxt}>
                Login
                </Text>
            </View>
        </TouchableOpacity> */}

  </View >
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      //backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },
  
    loremIpsum: {
      textAlign: "center",
      fontSize: 30,
    marginTop: 30,
    paddingBottom: 0,
    color: 'white'
    },

    normaltext: {
        fontSize: 10
    },

    h1text: {
        fontSize: 12,
        fontWeight: 'bold'
    },
  
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center",
      opacity: 1,
      //position: 'absolute',
      resizeMode: 'cover',
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
      opacity: 0.8,
    },

    hotelPicBackground: {
      flex: 0,  
      opacity: 0.9,
      flexDirection: "column", justifyContent: 'flex-end', 
    },

    headlineTxtBackground: {
      backgroundColor: colors.headlineTxtBackgrColor,
      //backgroundColor: 'lightgrey',
    },

    headlineTxt: {
      color: colors.headlineTxtColor,
      fontSize: 25,
      lineHeight: 15,
      paddingTop: 30, paddingBottom: 20, paddingLeft: 25, paddingRight: 25,
      textAlign: 'center',
      textShadowRadius: 20,
    }, 
  
  });

export default AboutScreen;