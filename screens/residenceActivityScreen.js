import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import DataService from '../services/DataService';
import {useContext } from 'react'; 
import colors from '../constants/colors.js'
import { AuthContext } from '../contexts/authContext';
import images from '../services/Images.js';
import i18n from 'i18n-js';
import { translations } from '../components/Languages';
i18n.fallbacks = true;


function ResidenceActivityScreen({ navigation }) {
  const globalUID = useContext(AuthContext); 

  const globalLang = useContext(AuthContext);
  console.log("#debug residenceActivityScreen.js - gloabelLanguage: " + globalLang.language.displaylanguage);
  i18n.locale = globalLang.language.displaylanguage;

    return (
      <View style={styles.scrollViewStyle}>
        {DataService.getHotelActivityCards(globalUID.user.username, globalUID.language.displaylanguage)}
      </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.buttonBackgrColor,
    },
    scrollViewStyle: {
      flex: 1,
      marginTop: 0,
      backgroundColor: colors.scrollViewBackgrColor,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    headlineTextBackground: {
      backgroundColor: colors.headlineTxtBackgrColor,
    },
    headlineText: {
      color: colors.headlineTxtColor,
      fontSize: 26,
      lineHeight: 40,
      paddingTop: 20, paddingBottom: 20, paddingLeft: 25, paddingRight: 25,
      textAlign: 'center',
      textShadowRadius: 20,
    }, 
  });

  export default ResidenceActivityScreen;