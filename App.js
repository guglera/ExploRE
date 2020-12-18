import * as React from 'react';
import  Navigator from "./navigator.js";
import DataService from './services/DataService';

import { View } from 'react-native';


function App() {
  const userId = "123";
  console.log(DataService.getPersonData(userId));
  console.log(DataService.getInterest(userId));
  console.log(DataService.getHotelData(userId).getLat());
  console.log(DataService.getMenu(userId));
  console.log(DataService.getMorningMail(userId));
  return (
    <Navigator/>
  );
}

export default App; 