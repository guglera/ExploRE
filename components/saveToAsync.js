
    import React, { useState, useEffect } from 'react';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import { useAsyncStorage } from '@react-native-async-storage/async-storage';

    export  function saveToAsync (data) { 
        const [value, setValue] = useState(null);
        writeItemToStorage(data);
        const { getItem, setItem } = asyncStorage.useAsyncStorage('data');
    }
    export async function readItemFromStorage() {
          const item = await getItem();
          if (item !== null) {
            setValue(item);
          }
          return value;
        };
      
export async function writeItemToStorage (newValue){
          await setItem(newValue);
          setValue(newValue);
        };