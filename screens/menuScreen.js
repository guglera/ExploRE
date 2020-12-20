import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

function MenuScreen({ navigation }) {
    return (
      <View style={styles.container}>

            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={Dimensions.get('screen').width}
                       imageHeight={Dimensions.get('screen').height}>
                <Image style={styles.image}
                       source={require("../assets/menu.png")}
                       resizeMode='contain'/>
            </ImageZoom>
    </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  
    image: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },  
  });

  export default MenuScreen;