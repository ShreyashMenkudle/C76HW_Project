import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StraMapScreen from "./screens/StraMap";
import DailyPicScreen from "./screens/DailyPic";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SpaceCraftScreen" component={SpaceCraftScreen} />
        <Stack.Screen name="StraMapScreen" component={StraMapScreen} />
        <Stack.Screen name="DailyPicScreen" component={DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
