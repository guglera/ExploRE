import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  HomeScreen from "./screens/startScreen.js";
import Landingpage from "./screens/landingpage.js";
import  WelcomeScreen from "./screens/welcomeScreen.js";
import RegionScreen from "./screens/regionScreen.js"
import ResidenceScreen from "./screens/residenceScreen.js"
import MorgenpostScreen from "./screens/morgenpostScreen.js"
import MenuScreen from "./screens/menuScreen.js"

const Stack = createStackNavigator();

function Navigator() {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="ExploRE">
          <Stack.Screen name="ExploRE" component={HomeScreen} />
          <Stack.Screen name ="Scan" component={Landingpage} />
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