import * as React from 'react';
import  Navigator from "./navigator.js";

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import DataService from './services/DataService';

import { View } from 'react-native';

function App() {
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('hotelId');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const userId = value;
  console.log("userId: " + userId);
  DataService.validateId(userId)?console.log(DataService.getPersonData(userId).getFullName()):null;
  DataService.validateId("16865045")?console.log(DataService.getPersonData("16865045").getFullName()):null;
  DataService.validateId("16865045")?console.log(DataService.getHotelData("16865045").getName()):null;
  DataService.validateId("508103379")?console.log(DataService.getPersonData("508103379").getFullName()):null;
  DataService.validateId("508103379")?console.log(DataService.getHotelData("508103379").getName()):null;

  return (
    <Navigator passedUid={userId}/>
  );
}

export default App; 