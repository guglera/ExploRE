import * as React from 'react';
import  Navigator from "./navigator.js";

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import DataService from './services/DataService';
import PersonlaData from './models/PersonalData';
import Interest from './models/Interest';
import HotelData from './models/HotelData';
import Menu from './models/Menu';
import MorningMail from './models/MorningMail';

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
  // console.log(DataService.getPersonData(userId));
  // console.log(DataService.getInterest(userId));
  // console.log(DataService.getHotelData(userId));
  // console.log(DataService.getMenu(userId));
  // console.log(DataService.getMorningMail(userId));
  return (
    <Navigator passedUid={userId}/>
  );
}

export default App; 