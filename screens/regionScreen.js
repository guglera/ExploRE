import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert } from 'react-native';


function RegionScreen({ navigation }) {
    return (
<View style={styles.container}>

<ImageBackground source={require("./innsbruck1.jpg")} style={styles.image} resizeMode="stretch">

  <View style={{ flex: 2}}>
    <Text style={styles.loremIpsum}>
      My Region - Lernen Sie Ihre Region kennen         
  </Text>
  </View>

  <View style={{ flex: 1.5}}>
    <View style={styles.buttons}>
    <Button
      color="black"
      title="Zurück"
      onPress={() => navigation.goBack()} 
    />
    </View>

    <View style={styles.buttons}>
    <Button
      color="black"
      title="Logout"
      onPress={() => navigation.navigate('ExploRE')} 
    />
    </View>

  </View>

</ImageBackground>
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
  
    loremIpsum: {
      textAlign: "center",
      fontSize: 40,
      marginTop: 0,
    },
  
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      opacity: 0.70
    },
  
    buttons: {
      width: '90%',
      height: 50,
      backgroundColor: '#2196F3',
      margin: 20
    }
  
  });


  export default RegionScreen;