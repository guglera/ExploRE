import * as React from 'react';
import  Navigator from "./navigator.js";
import LoadingScreen from "./screens/loading.js";

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState, useEffect, useContext } from 'react';

import DataService from './services/DataService';

import { View } from 'react-native';

import AuthContextProvider from "./contexts/authContext";
// import { AuthContext } from "./contexts/authContext";

function App() {
  const [value, setValue] = useState('value');
  const [loading, setLoading] = useState(true);
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
    setLoading(false);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const userId = value;
         
  DataService.start();
  return (
    <View >
      {DataService.getHotelActivityCards('508103379', 'en')}
  </View >
  )
}

export default App; 
