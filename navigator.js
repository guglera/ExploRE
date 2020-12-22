import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from "./screens/startScreen.js"
import WelcomeScreen from "./screens/welcomeScreen.js"
import RegionScreen from "./screens/regionScreen.js"
import ResidenceScreen from "./screens/residenceScreen.js"
import MorgenpostScreen from "./screens/morgenpostScreen.js"
import MenuScreen from "./screens/menuScreen.js"
import QrScanner from "./components/QrScanner.js"

const Stack = createStackNavigator();

const Navigator = (props) => {
  const navigatorUID = props.appUID

  console.log("navigatorUID: " + navigatorUID);

  const selectStartScreen = () => {
    if (navigatorUID === null) {
      return "Explore";
    } else {
    return "Welcome";
    }
  };
  
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={selectStartScreen()}>
          <Stack.Screen name="ExploRE" component={HomeScreen} />
          <Stack.Screen name ="Scan" component={QrScanner} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Region" component={RegionScreen} />
          <Stack.Screen name="Residence" component={ResidenceScreen} />
          <Stack.Screen name="Morning Brief" component={MorgenpostScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Navigator;