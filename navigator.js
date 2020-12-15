import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  HomeScreen from "./screens/startScreen.js";
import Landingpage from "./screens/landingpage.js";
import  WelcomeScreen from "./screens/welcomeScreen.js";
import RegionScreen from "./screens/regionScreen.js"
import ResidenceScreen from "./screens/residenceScreen.js"

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
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigator;