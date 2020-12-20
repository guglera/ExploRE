import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

function MenuScreen({ navigation }) {
    return (
      <View style={styles.container}>

            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={400}>
                <Image style={{width:400, height:400}}
                       source={require("../assets/menu.png")}/>
            </ImageZoom>
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