import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect} from 'react';
import { Button } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import * as asyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DataService from '../services/DataService';


export function QrScanner ({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [value, setValue] = useState('value');
  const { getItem, setItem } = asyncStorage.useAsyncStorage('hotelId');

  const naviqr = useNavigation();

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    writeItemToStorage(`${data}`);
    if (`${type}` == '256' || `${type}` == 'org.iso.QRCode') {
      if (!DataService.validateId(`${data}`)) {
        alert("No valid ID recognized, please scan again.");
        console.log("#debug QrScanner.js - Invalid value scanned");
      } else {
        naviqr.navigate("Welcome", {welcomeUID: `${data}`});
      }
    } else {
      alert("Invalid QR Code format, please scan again.");
      console.log("#debug QrScanner.js - Invalid QR Code format");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject} />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    
  );
}

export const styles = StyleSheet.create({
    container: {
      width: 300,
      height: 300,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });

  export default QrScanner;