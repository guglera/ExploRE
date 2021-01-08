import * as React from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import colors from '../constants/colors.js'
import { useState, useEffect } from 'react';
import * as asyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

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

  console.log("#debug aboutScreen.js - displaylanguage: " + value);

  return (
    <View style={styles.container}>

    <ImageBackground source={require("../assets/logoimages/backflag0.png")} style={styles.image}>

      <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', }}></View>

        <View style={{  flex: 1, paddingTop: 0, paddingBottom: 5, margin: 20, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {writeItemToStorage('en');
                            Alert.alert("Language","English language selected");
            }}
            style={styles.buttons}>
              <Text style={styles.buttonTxt}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {writeItemToStorage('de');
                            Alert.alert("Sprache","Deutsche Sprache gewählt");
            }}
            style={styles.buttons}>
              <Text style={styles.buttonTxt}>Deutsch</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={toggleOverlay}
              style={styles.buttons}>
                  <Text style={styles.buttonTxt}>Datenschutzerklärung</Text>
          </TouchableOpacity>

        </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} width='80%' height='auto'
        overlayStyle={{
            borderRadius: 10,
            marginVertical: 100,
            marginHorizontal: 20
        }}
      >
          <View>
            <ScrollView>
                <Text style={styles.h1text}>Erklärung zur Informationspflicht</Text>
                <Text style={styles.normaltext}>Wir von ExploRe nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        Wenn Sie diese Apps benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.{"\n"} </Text>

                <Text style={styles.h1text}>Verarbeiten von Daten (Kunden- und Vertragsdaten)</Text>
                <Text style={styles.normaltext}>Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Apps (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.{"\n"} </Text>

                <Text style={styles.h1text}>Ihre Rechte</Text>
                <Text style={styles.normaltext}>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.{"\n"} </Text>

                <Text style={styles.h1text}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</Text>
                <Text style={styles.normaltext}>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.{"\n"} </Text>
                               
                <Text style={styles.h1text}>Sie erreichen uns unter folgenden Kontaktdaten:</Text>
                <Text style={styles.normaltext}>ExploRe{"\n"}Universitätstraße 15 {"\n"}6020 Innsbruck</Text>
            </ScrollView>
          </View>
      </Overlay>
        
    </ImageBackground>

    <TouchableOpacity
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
        </TouchableOpacity>

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