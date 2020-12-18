import * as React from 'react';
import  Navigator from "./navigator.js";
import DataService from './services/DataService';

import { View } from 'react-native';

console.log(probs.readItemFromStorage.getItem());

function App() {
  const userId = "123";
  console.log(DataService.getPersonData(userId));
  console.log(DataService.getInterest(userId));
  console.log(DataService.getHotelData(userId));
  console.log(DataService.getMenu(userId));
  console.log(DataService.getMorningMail(userId));
  return (
    <Navigator/>
  );
}

export default App; 