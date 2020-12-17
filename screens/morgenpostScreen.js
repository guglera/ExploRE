import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';


function MorgenpostScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image
                source={require("../assets/morgenpost1.png")}
                style={styles.image}
            />
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
  
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 400,
      width: '100%'
    },  
  });

  export default MorgenpostScreen;