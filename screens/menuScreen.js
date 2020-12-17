import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';


function MenuScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image
                source={require("../assets/menu.png")}
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
      width: '100%',
      height: 520
    },  
  });

  export default MenuScreen;