import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import DataService from '../services/DataService';
import {useContext } from 'react'; 
import colors from '../constants/colors.js'
import { AuthContext } from '../contexts/authContext';
import i18n from 'i18n-js';
import { translations } from '../components/Languages';
i18n.fallbacks = true;


function ResidenceActivityScreen({ navigation }) {
  const globalUID = useContext(AuthContext); 

  const globalLang = useContext(AuthContext);
  i18n.locale = globalLang.language.displaylanguage;

    return (
      <View style={styles.scrollViewStyle}>
        {DataService.getHotelActivityCards(globalUID.user.username, globalUID.language.displaylanguage)}
      </View >
    );
  }

  const styles = StyleSheet.create({
    scrollViewStyle: {
      // flex: 1,
      marginTop: 1,
      backgroundColor: colors.scrollViewBackgrColor,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  });

  export default ResidenceActivityScreen;