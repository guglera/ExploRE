import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../constants/colors.js';
import ActivityCard from '../components/ActivityCard';
import { AuthContext } from '../contexts/authContext';
import {useContext } from 'react'; 


function RegionActivitiesScreen({ navigation }) {
    const globalUID = useContext(AuthContext); 
  
      return (
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.containerColor,
    // flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  cardsContainer:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});

export default RegionActivitiesScreen;