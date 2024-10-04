<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Alert, Button, TextInput, View, } from 'react-native';
import { styles } from './styles';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import DateTimePickerModal from "react-native-modal-datetime-picker";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleCallNotification = async () => {
    const {status} = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada!');
      return;
    }
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: titulo,
        body: descricao,
      },
      trigger: date
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: React.SetStateAction<Date>) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  

  return (
    <View style={styles.container}>
      <TextInput value={titulo} onChangeText={setTitulo} placeholder="Titulo" />

      <Button title="Selecionar data e hora" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <TextInput value={descricao} onChangeText={setDescricao} placeholder="descrição" />

      <Button title="chamar notificação" onPress={handleCallNotification} />
      <StatusBar style='auto'/>
    </View>
>>>>>>> ed87a4716a99d3bd1013703706242d5197777518
  );
}
