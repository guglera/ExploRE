import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseBasePath = 'https://explore-689ed-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchSpecificId = async (userId) => {
    try {
        const res = await fetch(`${firebaseBasePath}${userId}.json`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        const data = await res.json();
        const userData = [];
        const keys = Object.keys(data);
        keys.forEach(key => {
            const newUserData = data[key];
            newUserData.id = key;
            userData.push(data[key]);
        });
        await AsyncStorage.setItem('data', JSON.stringify(userData));
        const test = await AsyncStorage.getItem('data');
    } catch (error) {
        console.warn(error);
    }
}



