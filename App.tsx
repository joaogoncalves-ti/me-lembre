import 'react-native-gesture-handler'; // Ensure this import is at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView

import WelcomePage from './screens/WelcomePage';
import Timer from './screens/Timer';

export type RootStackParamList = {
  Welcome: undefined;
  Timer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" options={{ headerShown: false }}  component={WelcomePage} />
          <Stack.Screen name="Timer" options={{ headerShown: false }} component={Timer} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
