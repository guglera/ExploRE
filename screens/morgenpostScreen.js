import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button, Alert, Dimensions } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
// import DataService from '../services/DataService';

function MorgenpostScreen({ navigation }) {
    return (
      <View style={styles.container}>

            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={require("../assets/morgenpost1.png")}/>
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
      height: 400,
      width: '100%'
    },  
  });

  export default MorgenpostScreen;